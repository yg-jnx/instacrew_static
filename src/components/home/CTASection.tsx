import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl relative"
        >
          {/* Main card with gradient */}
          <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br from-primary via-primary/80 to-accent">
            <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-primary/95 to-primary/80 p-8 md:p-16 text-center">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-full border border-primary-foreground/10 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1.5, 1, 1.5],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-1/2 -right-1/2 w-full h-full border border-primary-foreground/10 rounded-full"
                />
                
                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-10 left-10 md:top-16 md:left-16"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                    <Zap className="h-6 w-6 text-primary-foreground/60" />
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute bottom-10 right-10 md:bottom-16 md:right-16"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                    <Users className="h-6 w-6 text-primary-foreground/60" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/3 right-10 md:right-20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/30 backdrop-blur-sm">
                    <Sparkles className="h-5 w-5 text-primary-foreground/60" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-1.5 text-sm text-primary-foreground mb-6">
                    <Sparkles className="h-4 w-4" />
                    Start your journey today
                  </span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl"
                >
                  Ready to transform your staffing?
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90"
                >
                  Join thousands of businesses and crew members already using InstaCrew. 
                  Start your 14-day free trial today—no credit card required.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      asChild
                      className="min-w-[220px] gap-2 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 group"
                    >
                      <Link to="/signup">
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
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="min-w-[220px] border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30"
                    >
                      <Link to="/business">Learn more for business</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70"
                >
                  {["No credit card required", "14-day free trial", "Cancel anytime"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl -z-10 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
