import { howItWorks } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

function StepCard({ step, index, total, accentColor }: { 
  step: { step: number; title: string; description: string }; 
  index: number; 
  total: number;
  accentColor: "primary" | "accent";
}) {
  return (
    <motion.div
      custom={index}
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          className={`absolute left-[calc(50%+50px)] top-12 hidden h-1 w-[calc(100%-100px)] origin-left md:block ${
            accentColor === "primary" ? "bg-gradient-to-r from-primary/50 to-primary/20" : "bg-gradient-to-r from-accent/50 to-accent/20"
          }`}
        />
      )}
      
      {/* Arrow indicator */}
      {index < total - 1 && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.7 }}
          className="absolute right-0 top-10 hidden md:block"
        >
          <ArrowRight className={`h-5 w-5 ${accentColor === "primary" ? "text-primary/50" : "text-accent/50"}`} />
        </motion.div>
      )}
      
      <div className="relative text-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl">
        {/* Step number with glow */}
        <motion.div 
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className={`relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl font-bold shadow-lg ${
            accentColor === "primary" 
              ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/30" 
              : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-accent/30"
          }`}
        >
          <span className="relative z-10">{step.step}</span>
          
          {/* Pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-3xl ${
              accentColor === "primary" ? "bg-primary" : "bg-accent"
            }`}
          />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>

        {/* Decorative corner */}
        <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          accentColor === "primary" ? "bg-primary/5" : "bg-accent/5"
        }`} />
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent" />
      
      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/5 blur-2xl"
      />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          >
            Simple Process
          </motion.span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How <span className="text-gradient-primary">InstaCrew</span> works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're hiring or looking for work, getting started is simple.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 p-1.5 h-auto bg-secondary/50 backdrop-blur-sm">
              <TabsTrigger 
                value="business" 
                className="gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <Briefcase className="h-4 w-4" />
                Business Owners
              </TabsTrigger>
              <TabsTrigger 
                value="crew" 
                className="gap-2 py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
              >
                <User className="h-4 w-4" />
                Crew Members
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="business" className="mt-12" key="business">
                <div className="grid gap-8 md:grid-cols-3">
                  {howItWorks.business.map((step, index) => (
                    <StepCard 
                      key={index} 
                      step={step} 
                      index={index} 
                      total={howItWorks.business.length}
                      accentColor="primary"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crew" className="mt-12" key="crew">
                <div className="grid gap-8 md:grid-cols-3">
                  {howItWorks.crew.map((step, index) => (
                    <StepCard 
                      key={index} 
                      step={step} 
                      index={index} 
                      total={howItWorks.crew.length}
                      accentColor="accent"
                    />
                  ))}
                </div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
