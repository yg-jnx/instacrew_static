import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Clock, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  FileCheck,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Calendar,
    title: "Post Shifts in Seconds",
    description: "Create and publish shifts with just a few clicks. Set requirements, pay rates, and let qualified crew find you.",
  },
  {
    icon: Users,
    title: "Pre-Screened Talent Pool",
    description: "Access verified crew members with background checks, certifications, and proven track records.",
  },
  {
    icon: FileCheck,
    title: "Smart Applicant Matching",
    description: "Our AI matches your shifts with the most qualified candidates based on skills and availability.",
  },
  {
    icon: Clock,
    title: "Real-Time Time Tracking",
    description: "GPS-verified clock-in/out with automatic timesheet generation and overtime calculations.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Track labor costs, attendance patterns, and crew performance with detailed reports.",
  },
  {
    icon: MapPin,
    title: "Multi-Location Support",
    description: "Manage shifts across multiple venues, sites, or locations from a single dashboard.",
  },
];

const benefits = [
  "Reduce hiring time by 80%",
  "Cut no-show rates by 60%",
  "Save 20+ hours per week on scheduling",
  "Access to 10,000+ verified crew members",
  "Real-time shift updates and notifications",
  "Automated compliance documentation",
];

export default function BusinessOwners() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                For Business Owners
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Staff Your Shifts{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  10x Faster
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop scrambling for last-minute coverage. InstaCrew connects you with verified, 
                reliable crew members in minutes—not days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/pricing">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/help">See How It Works</Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative perspective-1000">
                <motion.div
                  className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground">Shift Dashboard</h3>
                    <span className="text-xs text-muted-foreground">Live Preview</span>
                  </div>
                  
                  {/* Mock Shift Cards */}
                  {[
                    { role: "Event Staff", time: "6:00 PM - 11:00 PM", applicants: 12, status: "Active" },
                    { role: "Security Guard", time: "8:00 AM - 4:00 PM", applicants: 8, status: "Filled" },
                    { role: "Bartender", time: "9:00 PM - 2:00 AM", applicants: 5, status: "Active" },
                  ].map((shift, i) => (
                    <motion.div
                      key={i}
                      className="bg-background/50 rounded-xl p-4 mb-3 border border-border/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground">{shift.role}</p>
                          <p className="text-sm text-muted-foreground">{shift.time}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          shift.status === "Active" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-accent/20 text-accent"
                        }`}>
                          {shift.status}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {shift.applicants} applicants
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-3 shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">+45% faster</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Manage Your Crew</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for hospitality, events, and service businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  InstaCrew
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses that have transformed their staffing operations 
                with our platform.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* ROI Calculator Mock */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Your Potential Savings</h3>
                    <p className="text-sm text-muted-foreground">Based on 50 shifts/month</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Time Saved</span>
                    <span className="text-2xl font-bold text-primary">86 hrs/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">No-Show Reduction</span>
                    <span className="text-2xl font-bold text-accent">60%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                    <span className="font-medium text-foreground">Estimated Savings</span>
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      $4,200/mo
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Staffing?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/pricing">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/help">Talk to Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
