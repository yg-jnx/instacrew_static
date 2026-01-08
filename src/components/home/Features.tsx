import { features } from "@/data/mockData";
import { Zap, Shield, Clock, Users, Bell, Star, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Clock,
  Users,
  Bell,
  Star,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Features() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient-primary">manage shifts</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From posting to payment, InstaCrew handles the entire shift lifecycle so you can focus on running your business.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl overflow-hidden h-full">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:shadow-glow"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
