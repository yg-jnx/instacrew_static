import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/mockData";
import { ArrowRight, Play, Sparkles, Users, Clock, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Floating 3D Card Component
function FloatingCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Animated Background Orbs
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/20 to-accent/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-primary/10 to-transparent blur-3xl"
      />
    </div>
  );
}

// Floating Stats Pill
function StatPill({ icon: Icon, value, label, delay }: { icon: any; value: string; label: string; delay: number }) {
  return (
    <FloatingCard delay={delay}>
      <div className="flex items-center gap-3 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 px-4 py-2 shadow-lg">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </FloatingCard>
  );
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-hero py-20 md:py-28 lg:py-32 flex items-center">
      <BackgroundOrbs />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 h-64 w-64 rounded-full border border-dashed border-primary/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 h-48 w-48 rounded-full border border-dashed border-accent/20"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 10,000+ businesses</span>
            </motion.div>

            {/* Rotating headline */}
            <div className="relative h-[140px] md:h-[120px] lg:h-[140px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 15 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {heroContent.headlines[currentIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Rotating tagline */}
            <div className="relative h-[50px] md:h-[40px] mt-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`tagline-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-muted-foreground md:text-xl"
                >
                  {heroContent.taglines[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center lg:justify-start gap-2"
            >
              {heroContent.headlines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-10 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Show headline ${index + 1}`}
                />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" asChild className="min-w-[220px] gap-2 shadow-glow group relative overflow-hidden">
                <Link to="/signup">
                  <span className="relative z-10 flex items-center gap-2">
                    Start 14-day free trial
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="min-w-[220px] gap-2 group">
                <Link to="#how-it-works">
                  <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                  See how it works
                </Link>
              </Button>
            </motion.div>

            {/* Trust note */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </div>

          {/* 3D Visual Display */}
          <div className="relative hidden lg:block">
            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 z-20">
              <StatPill icon={Users} value="50K+" label="Active Users" delay={0.3} />
            </div>
            <div className="absolute top-1/4 -right-12 z-20">
              <StatPill icon={Clock} value="<2min" label="To Post Shift" delay={0.5} />
            </div>
            <div className="absolute bottom-16 -left-12 z-20">
              <StatPill icon={Shield} value="100%" label="Verified Crew" delay={0.7} />
            </div>

            {/* Main 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: [-2, 2, -2], rotateX: [-1, 1, -1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                
                {/* Mock Dashboard Preview */}
                <div className="aspect-[4/3] p-6 relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">InstaCrew Dashboard</p>
                        <p className="text-xs text-muted-foreground">Welcome back, Sarah!</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-destructive/60" />
                      <div className="h-3 w-3 rounded-full bg-warning/60" />
                      <div className="h-3 w-3 rounded-full bg-primary/60" />
                    </div>
                  </div>

                  {/* Mock Shift Cards */}
                  <div className="space-y-3">
                    {[
                      { title: "Morning Barista", time: "6:00 AM - 2:00 PM", status: "3 applicants", color: "primary" },
                      { title: "Event Staff", time: "5:00 PM - 11:00 PM", status: "Filled", color: "accent" },
                      { title: "Warehouse Helper", time: "8:00 AM - 4:00 PM", status: "Posted", color: "primary" },
                    ].map((shift, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.2 }}
                        className="flex items-center justify-between rounded-xl bg-background/50 p-3 border border-border/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${shift.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                          <div>
                            <p className="text-sm font-medium text-foreground">{shift.title}</p>
                            <p className="text-xs text-muted-foreground">{shift.time}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          shift.status === 'Filled' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {shift.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-4 grid grid-cols-3 gap-3"
                  >
                    {[
                      { label: "Active Shifts", value: "12" },
                      { label: "This Week", value: "$4,280" },
                      { label: "Crew Rating", value: "4.9★" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 p-3 text-center">
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl -z-10 rounded-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Mobile: Simple visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-12 max-w-lg lg:hidden"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="aspect-video p-6 flex items-center justify-center relative z-10">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <Play className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Watch Platform Demo</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
