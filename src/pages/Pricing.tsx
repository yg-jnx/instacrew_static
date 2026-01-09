import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Check, 
  X, 
  Zap, 
  Building2, 
  Rocket,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started",
    monthlyPrice: 49,
    sixMonthPrice: 39,
    icon: Zap,
    features: [
      { name: "Up to 20 shifts/month", included: true },
      { name: "Up to 50 crew members", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "1 location", included: true },
      { name: "Advanced reporting", included: false },
      { name: "API access", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with multiple locations",
    monthlyPrice: 99,
    sixMonthPrice: 79,
    icon: Building2,
    features: [
      { name: "Unlimited shifts", included: true },
      { name: "Unlimited crew members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "Up to 5 locations", included: true },
      { name: "Advanced reporting", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: false },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 249,
    sixMonthPrice: 199,
    icon: Rocket,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Unlimited locations", included: true },
      { name: "Custom analytics & dashboards", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Custom integrations", included: true },
      { name: "SLA guarantees", included: true },
      { name: "On-premise deployment option", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Start using InstaCrew immediately with full access to all features. No credit card required. At the end of 14 days, choose the plan that fits your needs.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for Enterprise customers.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts required. Monthly plans can be cancelled anytime. 6-month plans offer savings with a 6-month commitment.",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes! We offer special pricing for registered non-profit organizations. Contact our sales team for details.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your data at any time before or after cancelling.",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-card rounded-full p-2 border border-border/50">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isAnnual 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                6 Months
                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-card rounded-3xl border ${
                  plan.popular 
                    ? "border-primary shadow-2xl shadow-primary/20 scale-105 z-10" 
                    : "border-border/50 hover:border-primary/30 hover:shadow-xl"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.popular 
                        ? "bg-gradient-to-br from-primary to-accent" 
                        : "bg-primary/10"
                    }`}>
                      <plan.icon className={`w-6 h-6 ${
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        £{isAnnual ? plan.sixMonthPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-primary mt-1">
                        Billed £{plan.sixMonthPrice * 6} every 6 months
                      </p>
                    )}
                  </div>

                  <Button 
                    className={`w-full mb-8 group ${
                      plan.popular 
                        ? "" 
                        : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Trusted by 2,000+ Businesses
            </h2>
            <p className="text-muted-foreground">
              Join thousands of companies already using InstaCrew
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-muted-foreground"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about billing and pricing
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, white 2px, transparent 2px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              No credit card required. Cancel anytime. Full access for 14 days.
            </p>
            <Button size="lg" variant="secondary" className="group">
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}