import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  User, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Upload,
  Shield,
  Briefcase,
  Award,
  MapPin,
  Star,
  Wallet,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { id: 1, name: "Personal Info", icon: User, description: "Create your profile" },
  { id: 2, name: "Experience", icon: Briefcase, description: "Add your skills" },
  { id: 3, name: "Documents", icon: FileText, description: "Get verified" },
  { id: 4, name: "Start Working", icon: CheckCircle2, description: "Apply to shifts" },
];

const skills = [
  "Bartending", "Waiting", "Security", "Event Staff", "Catering",
  "Kitchen Staff", "Cleaning", "Reception"
];

const benefits = [
  { icon: Clock, title: "Flexible Hours", description: "Work when you want" },
  { icon: Wallet, title: "Fast Payments", description: "Get paid quickly" },
  { icon: Star, title: "Build Reputation", description: "Earn great reviews" },
  { icon: MapPin, title: "Work Nearby", description: "Find local shifts" },
];

export default function OnboardingCrew() {
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
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <User className="w-4 h-4" />
              Crew Member Signup
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                InstaCrew Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create your profile and start finding shifts that match your skills. 
              Get verified once and access premium opportunities.
            </p>
          </motion.div>

          {/* Progress Steps Display */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl border border-border/50 p-6 text-center hover:border-accent/30 hover:shadow-lg transition-all">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <step.icon className="w-6 h-6 text-accent-foreground" />
                    </motion.div>
                    <div className="text-xs text-accent font-medium mb-2">Step {step.id}</div>
                    <h3 className="font-semibold text-foreground mb-1">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mock Profile Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Profile</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground">
                      Alex
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground">
                      Johnson
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Skills & Expertise
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          index < 3
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Certifications
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <div className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground">
                      SIA License, Food Hygiene Level 2
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Documents
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload ID & verification documents</p>
                  </div>
                </div>

                <div className="bg-accent/5 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Your Privacy Matters</p>
                    <p className="text-sm text-muted-foreground">
                      Documents are encrypted and only used for verification. GDPR compliant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Ready to find shifts near you?</p>
                <Button size="lg" className="group bg-accent hover:bg-accent/90" asChild>
                  <Link to="/crew">
                    Learn More About Crew
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Why Crew Members Love InstaCrew
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card/50 rounded-xl border border-border/50 p-5 text-center hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}