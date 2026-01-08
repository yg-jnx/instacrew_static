import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  Shield
} from "lucide-react";

const steps = [
  { id: 1, name: "Business Info", icon: Building2 },
  { id: 2, name: "Contact Details", icon: User },
  { id: 3, name: "Verification", icon: FileText },
  { id: 4, name: "Complete", icon: CheckCircle2 },
];

export default function OnboardingBusiness() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Layout>
      <section className="min-h-screen py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Business Onboarding
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Business Started
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete your profile in just a few steps and start posting shifts today.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      currentStep >= step.id
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                    animate={currentStep === step.id ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-24 lg:w-32 h-1 mx-2 rounded ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex justify-between mt-2">
              {steps.map((step) => (
                <span
                  key={step.id}
                  className={`text-sm ${
                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Business Information</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Enter your business name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      This will be displayed to crew members
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="">Select business type</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="events">Events & Entertainment</option>
                      <option value="catering">Catering</option>
                      <option value="security">Security</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        placeholder="Enter your business address"
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll send verification and updates to this email
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="+44 7700 900000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Business Verification</h2>
                  <p className="text-muted-foreground mb-6">
                    Upload documents to verify your business. This helps build trust with crew members.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Business Registration Certificate", status: "required" },
                      { label: "Proof of Insurance", status: "required" },
                      { label: "ID Verification (Director/Owner)", status: "optional" },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed border-border rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Upload className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{doc.label}</p>
                              <p className="text-sm text-muted-foreground">
                                PDF, JPG, PNG up to 10MB
                              </p>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            doc.status === "required" 
                              ? "bg-destructive/10 text-destructive" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Secure & Private</p>
                      <p className="text-sm text-muted-foreground">
                        Your documents are encrypted and stored securely. We never share your information.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    You're All Set!
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Your business account has been created. We'll verify your documents within 24 hours 
                    and you'll be ready to post your first shift.
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full md:w-auto">
                      Go to Dashboard
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Check your email for a confirmation link
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}>
                    {currentStep === 3 ? "Complete Setup" : "Continue"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
