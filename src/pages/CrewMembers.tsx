import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  UserCircle, 
  Search, 
  Clock, 
  Star, 
  Wallet,
  Shield,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  BadgeCheck,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: UserCircle,
    title: "Build Your Profile",
    description: "Showcase your skills, certifications, and experience to stand out to employers.",
  },
  {
    icon: Search,
    title: "Find Perfect Shifts",
    description: "Browse available shifts by location, pay rate, and type. Apply with one tap.",
  },
  {
    icon: BadgeCheck,
    title: "Get Verified",
    description: "Complete verification once and unlock access to premium, higher-paying shifts.",
  },
  {
    icon: Clock,
    title: "Easy Clock In/Out",
    description: "GPS-verified time tracking ensures accurate hours and hassle-free timesheets.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Earn ratings and reviews from employers to unlock better opportunities.",
  },
  {
    icon: Wallet,
    title: "Fast Payments",
    description: "Track your earnings and get paid quickly. View payment history anytime.",
  },
];

const benefits = [
  "Work when you want, where you want",
  "Access to 1,000+ businesses hiring",
  "Competitive pay rates",
  "No agency fees—ever",
  "Verified, safe work environments",
  "Build your professional network",
];

const shifts = [
  { role: "Event Staff", location: "London", pay: "£14/hr", distance: "2.3 mi", urgent: true },
  { role: "Bartender", location: "Manchester", pay: "£16/hr", distance: "1.8 mi", urgent: false },
  { role: "Security", location: "Birmingham", pay: "£18/hr", distance: "3.1 mi", urgent: true },
  { role: "Catering", location: "Leeds", pay: "£13/hr", distance: "0.9 mi", urgent: false },
];

export default function CrewMembers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-40 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <UserCircle className="w-4 h-4" />
                For Crew Members
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Find Shifts.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  Get Paid.
                </span>
                <br />Own Your Schedule.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Browse hundreds of shifts near you. Apply instantly. Work on your terms. 
                Build your reputation and unlock premium opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group bg-accent hover:bg-accent/90" asChild>
                  <Link to="#">
                    Join as Crew
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/help">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Mobile App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <motion.div
                  className="w-72 h-[580px] bg-card rounded-[3rem] border-4 border-foreground/10 shadow-2xl overflow-hidden"
                  animate={{ rotateY: [-3, 3, -3], rotateX: [1, -1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Screen Content */}
                  <div className="h-full bg-background p-4 pt-12">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Good morning,</p>
                        <p className="text-lg font-semibold text-foreground">Alex!</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <UserCircle className="w-6 h-6 text-accent" />
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-3 mb-4 flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Search shifts near you...</span>
                    </div>

                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                      {["All", "Today", "This Week", "£15+"].map((filter, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap ${
                            i === 0 
                              ? "bg-accent text-accent-foreground" 
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {filter}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {shifts.map((shift, i) => (
                        <motion.div
                          key={i}
                          className="bg-card rounded-xl p-3 border border-border/50"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-foreground text-sm">{shift.role}</p>
                                {shift.urgent && (
                                  <span className="text-[10px] px-1.5 py-0.5 bg-destructive/20 text-destructive rounded">
                                    Urgent
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                <MapPin className="w-3 h-3" />
                                {shift.location} • {shift.distance}
                              </div>
                            </div>
                            <span className="text-sm font-bold text-primary">{shift.pay}</span>
                          </div>
                          <Button size="sm" className="w-full h-7 text-xs">
                            Quick Apply
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-8 bg-primary text-primary-foreground rounded-xl p-3 shadow-lg"
                  animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">4.9 Rating</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-8 bg-accent text-accent-foreground rounded-xl p-3 shadow-lg"
                  animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Wallet className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">£2,450 earned</span>
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
              Your Career,{" "}
              <span className="text-accent">Your Control</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find work, track earnings, and grow your professional reputation.
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
                className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Verification */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Safety First</h3>
                    <p className="text-sm text-muted-foreground">All businesses verified</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Business Verification", status: "Verified", icon: BadgeCheck },
                    { label: "Insurance Coverage", status: "Protected", icon: Shield },
                    { label: "Payment Protection", status: "Guaranteed", icon: Wallet },
                    { label: "24/7 Support", status: "Available", icon: Smartphone },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item.label}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{item.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Work with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Confidence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business on InstaCrew is verified. We ensure safe work environments, 
                guaranteed payments, and 24/7 support when you need it.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent via-accent to-primary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, white 1px, transparent 1px),
                             radial-gradient(circle at 70% 30%, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
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
            <h2 className="text-3xl md:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Start Working?
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Create your profile in minutes and start applying to shifts today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/onboarding/crew">
                  Create Your Profile
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
                <Link to="/help">View FAQ</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
