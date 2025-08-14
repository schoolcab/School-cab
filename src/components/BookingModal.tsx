import { useState } from "react";
import { X, MapPin, School, CreditCard, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { RAZORPAY_CONFIG } from "@/lib/razorpay";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentAddress: "",
    school: "",
    studentName: "",
    parentName: "",
    phoneNumber: "",
    alternateNumber: "",
    pickupTime: "",
    dropTime: "",
    specialInstructions: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { error, isLoading, Razorpay } = useRazorpay();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (!formData.currentAddress || !formData.school || !formData.studentName || !formData.parentName || !formData.phoneNumber || !formData.pickupTime || !formData.dropTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including pickup and drop times.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const initiatePayment = () => {
    if (isLoading) {
      toast({
        title: "Loading...",
        description: "Please wait while we load the payment gateway.",
      });
      return;
    }

    if (error) {
      toast({
        title: "Payment Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!Razorpay) {
      toast({
        title: "Payment Unavailable",
        description: "Payment gateway is not available right now.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    const options: RazorpayOrderOptions = {
      key: RAZORPAY_CONFIG.KEY_ID,
      amount: RAZORPAY_CONFIG.SUBSCRIPTION_AMOUNT,
      currency: RAZORPAY_CONFIG.CURRENCY,
      name: RAZORPAY_CONFIG.COMPANY_NAME,
      description: 'Monthly School Cab Subscription',
      image: '/favicon.ico',
      order_id: 'order_' + Date.now(),
      handler: (response) => {
        console.log('Payment Success:', response);
        setIsProcessing(false);
        setStep(3);
        toast({
          title: "Payment Successful!",
          description: "Payment ID: " + response.razorpay_payment_id,
        });
      },
      prefill: {
        name: formData.parentName,
        email: '',
        contact: formData.phoneNumber,
      },
      notes: {
        address: formData.currentAddress,
        school: formData.school,
        student: formData.studentName,
        pickupTime: formData.pickupTime,
        dropTime: formData.dropTime,
        specialInstructions: formData.specialInstructions || '',
      },
      theme: {
        color: RAZORPAY_CONFIG.THEME_COLOR,
      },
      modal: {
        ondismiss: () => {
          setIsProcessing(false);
          toast({
            title: "Payment Cancelled",
            description: "You can try again when ready.",
            variant: "destructive",
          });
        }
      }
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      currentAddress: "",
      school: "",
      studentName: "",
      parentName: "",
      phoneNumber: "",
      alternateNumber: "",
      pickupTime: "",
      dropTime: "",
      specialInstructions: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-strong">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">
            {step === 1 ? "Book Your Ride" : step === 2 ? "Confirm & Pay" : "Booking Confirmed"}
          </h2>
          <button 
            onClick={resetForm}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Step 1: Booking Form */}
        {step === 1 && (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentAddress" className="text-foreground font-medium">
                  Current Address *
                </Label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea
                    id="currentAddress"
                    placeholder="Enter your full pickup address..."
                    value={formData.currentAddress}
                    onChange={(e) => handleInputChange("currentAddress", e.target.value)}
                    className="pl-10 resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="school" className="text-foreground font-medium">
                  School Name *
                </Label>
                <div className="relative mt-2">
                  <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="school"
                    placeholder="Enter school name..."
                    value={formData.school}
                    onChange={(e) => handleInputChange("school", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentName" className="text-foreground font-medium">
                    Student Name *
                  </Label>
                  <Input
                    id="studentName"
                    placeholder="Student's name"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="parentName" className="text-foreground font-medium">
                    Parent Name *
                  </Label>
                  <Input
                    id="parentName"
                    placeholder="Your name"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange("parentName", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phoneNumber" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="alternateNumber" className="text-foreground font-medium">
                    Alternate Number
                  </Label>
                  <Input
                    id="alternateNumber"
                    placeholder="Optional"
                    value={formData.alternateNumber}
                    onChange={(e) => handleInputChange("alternateNumber", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground font-medium">
                    Pickup Time *
                  </Label>
                  <div className="relative mt-2">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={formData.pickupTime} onValueChange={(value) => handleInputChange("pickupTime", value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select pickup time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6:00 AM">6:00 AM</SelectItem>
                        <SelectItem value="6:30 AM">6:30 AM</SelectItem>
                        <SelectItem value="7:00 AM">7:00 AM</SelectItem>
                        <SelectItem value="7:30 AM">7:30 AM</SelectItem>
                        <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                        <SelectItem value="8:30 AM">8:30 AM</SelectItem>
                        <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-foreground font-medium">
                    Drop Time *
                  </Label>
                  <div className="relative mt-2">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={formData.dropTime} onValueChange={(value) => handleInputChange("dropTime", value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select drop time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                        <SelectItem value="2:30 PM">2:30 PM</SelectItem>
                        <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                        <SelectItem value="3:30 PM">3:30 PM</SelectItem>
                        <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        <SelectItem value="4:30 PM">4:30 PM</SelectItem>
                        <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="specialInstructions" className="text-foreground font-medium">
                  Special Instructions
                </Label>
                <Textarea
                  id="specialInstructions"
                  placeholder="Any special pickup instructions or requirements..."
                  value={formData.specialInstructions}
                  onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                  className="mt-2 resize-none"
                  rows={2}
                />
              </div>
            </div>

            <Button 
              onClick={handleContinue}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              size="lg"
            >
              Continue to Payment
            </Button>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="p-6 space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student:</span>
                  <span className="text-foreground">{formData.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">School:</span>
                  <span className="text-foreground">{formData.school}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup Time:</span>
                  <span className="text-foreground">{formData.pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Drop Time:</span>
                  <span className="text-foreground">{formData.dropTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup:</span>
                  <span className="text-foreground text-right max-w-[60%]">{formData.currentAddress}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary p-4 rounded-lg text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Monthly Subscription</p>
                  <p className="text-sm opacity-90">Starts from</p>
                  <p className="text-2xl font-bold">₹299</p>
                </div>
                <CreditCard className="h-8 w-8 opacity-80" />
              </div>
              <p className="text-sm opacity-90 mt-2">Final price based on distance • Includes GPS tracking</p>
            </div>

            <Button 
              onClick={initiatePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              size="lg"
            >
              {isProcessing ? "Processing..." : "Get Quote & Pay"}
            </Button>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="p-6 text-center space-y-6">
            <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
              <p className="text-muted-foreground">
                Thank you for choosing SchoolCab Connect! Our team will contact you soon to finalize your pickup schedule and driver details.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg text-left">
              <h4 className="font-semibold text-foreground mb-2">What's Next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Our team will call you within 24 hours</li>
                <li>• Driver details will be shared with you</li>
                <li>• Service starts from next Monday</li>
                <li>• You'll receive login details for our app</li>
              </ul>
            </div>

            <Button 
              onClick={resetForm}
              className="w-full"
              variant="outline"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;