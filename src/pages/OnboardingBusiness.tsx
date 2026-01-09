import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Upload,
  Shield,
  Zap,
  Clock,
  Users,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { id: 1, name: "Business Info", icon: Building2, description: "Tell us about your company" },
  { id: 2, name: "Contact Details", icon: User, description: "Add your contact information" },
  { id: 3, name: "Verification", icon: FileText, description: "Upload verification documents" },
  { id: 4, name: "Go Live", icon: CheckCircle2, description: "Start posting shifts" },
];

const benefits = [
  { icon: Zap, title: "Quick Setup", description: "Get started in under 5 minutes" },
  { icon: Clock, title: "Save Time", description: "80% faster than traditional hiring" },
  { icon: Users, title: "Verified Crew", description: "Access pre-screened talent pool" },
  { icon: BarChart3, title: "Full Analytics", description: "Track everything in real-time" },
];

export default function OnboardingBusiness() {
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
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Business Onboarding
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Up & Running
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already using InstaCrew to find reliable staff. 
              Our simple onboarding process gets you posting shifts in minutes.
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
                  <div className="bg-card rounded-2xl border border-border/50 p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div className="text-xs text-primary font-medium mb-2">Step {step.id}</div>
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

          {/* Mock Form Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Business Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <div className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground">
                      Your Business Name
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type *
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground">
                    Select business type
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Verification Documents
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload business documents</p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Secure & Private</p>
                    <p className="text-sm text-muted-foreground">
                      Your documents are encrypted and stored securely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Ready to get started?</p>
                <Button size="lg" className="group" asChild>
                  <Link to="/pricing">
                    View Pricing Plans
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
              Why Businesses Love InstaCrew
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
                  className="bg-card/50 rounded-xl border border-border/50 p-5 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-primary" />
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