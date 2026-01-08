import { stats, trustBadges } from "@/data/mockData";
import { Shield, Award, Lock, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract numeric value
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffixFromValue = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffixFromValue}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/10"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full border border-primary-foreground/10"
        />
        
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute rounded-full bg-primary-foreground/10"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Trusted by thousands
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/10">
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-foreground"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter value={stat.value} />
                </motion.div>
                <p className="mt-2 text-primary-foreground/80 font-medium">{stat.label}</p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary-foreground/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const badgeIcons = [Shield, Award, Lock, CheckCircle];

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30 py-10 overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badgeIcons[index % badgeIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
