import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, User, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const businessFeatures = [
  "Post shifts in under 2 minutes",
  "Screen verified applicants instantly",
  "GPS-verified time tracking",
  "Automatic invoicing and payments",
];

const crewFeatures = [
  "Find shifts near you instantly",
  "One-tap applications",
  "Build your verified reputation",
  "Track earnings and get paid on time",
];

function FeatureList({ features, color }: { features: string[]; color: "primary" | "accent" }) {
  return (
    <ul className="mt-6 space-y-4">
      {features.map((item, index) => (
        <motion.li 
          key={index} 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 text-foreground group/item"
        >
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.4 }}
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              color === "primary" ? "bg-primary/10" : "bg-accent/10"
            }`}
          >
            <CheckCircle2 className={`h-4 w-4 ${color === "primary" ? "text-primary" : "text-accent"}`} />
          </motion.div>
          <span className="group-hover/item:translate-x-1 transition-transform duration-200">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function ValueProps() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for <span className="text-gradient-primary">everyone</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Business Owners */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl md:p-10 h-full">
              {/* Animated background */}
              <motion.div 
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-500 group-hover:scale-[2] group-hover:bg-primary/10"
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-tr from-primary/10 to-transparent transition-all duration-500 group-hover:scale-150"
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                >
                  <Briefcase className="h-8 w-8" />
                </motion.div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">For Business Owners</h3>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  InstaCrew helps business owners post shifts in minutes, review applicants, assign the right people, 
                  and manage the full shift lifecycle—from clock-in/out to disputes—without juggling spreadsheets, 
                  calls, and no-shows. Business accounts start with a 14-day free trial.
                </p>

                <FeatureList features={businessFeatures} color="primary" />

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Button asChild className="gap-2 group/btn shadow-lg shadow-primary/20">
                    <Link to="/business">
                      <span>Start free trial</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Crew Members */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl md:p-10 h-full">
              {/* Animated background */}
              <motion.div 
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 transition-all duration-500 group-hover:scale-[2] group-hover:bg-accent/10"
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-tr from-accent/10 to-transparent transition-all duration-500 group-hover:scale-150"
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/30"
                >
                  <User className="h-8 w-8" />
                </motion.div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">For Crew Members</h3>
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  InstaCrew helps crew members find shifts that fit their schedule, apply quickly, and show up with 
                  confidence through profile and document verification. Real-time push notifications keep crew updated 
                  on applications, assignments, and shift changes.
                </p>

                <FeatureList features={crewFeatures} color="accent" />

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Button 
                    asChild 
                    variant="outline" 
                    className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground group/btn shadow-lg shadow-accent/10"
                  >
                    <Link to="/crew">
                      <span>Create your profile</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
