import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  User, 
  Mail, 
  Phone,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  Shield,
  Briefcase,
  Award,
  MapPin
} from "lucide-react";

const steps = [
  { id: 1, name: "Personal Info", icon: User },
  { id: 2, name: "Experience", icon: Briefcase },
  { id: 3, name: "Documents", icon: FileText },
  { id: 4, name: "Complete", icon: CheckCircle2 },
];

const skills = [
  "Bartending", "Waiting", "Security", "Event Staff", "Catering",
  "Kitchen Staff", "Cleaning", "Reception", "Promotional", "Other"
];

export default function OnboardingCrew() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <Layout>
      <section className="min-h-screen py-12 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <User className="w-4 h-4" />
              Crew Member Signup
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join the InstaCrew Team
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Create your profile and start finding shifts that match your skills and schedule.
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
                        ? "bg-accent border-accent text-accent-foreground"
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
                      currentStep > step.id ? "bg-accent" : "bg-border"
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
                    currentStep >= step.id ? "text-accent" : "text-muted-foreground"
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
                  <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Alex"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
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
                        placeholder="alex@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="London, UK"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll show you shifts near this location
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Your Experience</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Skills & Expertise *
                    </label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select all that apply. This helps us match you with relevant shifts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedSkills.includes(skill)
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                      <option value="">Select experience level</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Certifications (Optional)
                    </label>
                    <div className="relative">
                      <Award className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        placeholder="List any relevant certifications (e.g., SIA License, Food Hygiene, First Aid)"
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      About You (Optional)
                    </label>
                    <textarea
                      placeholder="Tell employers a bit about yourself and what makes you a great hire..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      A good bio can help you stand out
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Verification Documents</h2>
                  <p className="text-muted-foreground mb-6">
                    Upload your documents to get verified. Verified crew members get access to more shifts and higher pay rates.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Government-Issued ID", description: "Passport, Driver's License, or National ID", status: "required" },
                      { label: "Right to Work Document", description: "Visa, work permit, or proof of residency", status: "required" },
                      { label: "CV / Resume", description: "Your work history and experience", status: "optional" },
                      { label: "Profile Photo", description: "Clear, professional headshot", status: "optional" },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed border-border rounded-xl p-6 hover:border-accent/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                              <Upload className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{doc.label}</p>
                              <p className="text-sm text-muted-foreground">
                                {doc.description}
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

                  <div className="bg-accent/5 rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Your Privacy Matters</p>
                      <p className="text-sm text-muted-foreground">
                        Documents are encrypted and only used for verification. We comply with GDPR and never share your personal data.
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
                    className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Welcome to InstaCrew!
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Your profile is being verified. Once approved, you'll have access to hundreds of shifts near you.
                  </p>
                  
                  <div className="bg-muted/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                    <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Document review (usually 24-48 hours)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Email notification when approved
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Start browsing and applying to shifts
                      </li>
                    </ul>
                  </div>

                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Browse Available Shifts
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
                  <Button 
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    className="bg-accent hover:bg-accent/90"
                  >
                    {currentStep === 3 ? "Complete Profile" : "Continue"}
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
