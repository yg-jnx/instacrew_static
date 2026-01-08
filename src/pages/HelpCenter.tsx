import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  HelpCircle, 
  User, 
  Calendar,
  FileText,
  Wallet,
  Shield,
  AlertTriangle,
  Wrench,
  MessageCircle,
  Mail,
  Phone
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/mockData";

const categories = [
  { id: "account", name: "Account & Profile", icon: User, color: "primary" },
  { id: "postingShifts", name: "Posting Shifts", icon: Calendar, color: "accent" },
  { id: "applyingShifts", name: "Applying to Shifts", icon: FileText, color: "primary" },
  { id: "payments", name: "Payments & Billing", icon: Wallet, color: "accent" },
  { id: "verification", name: "Verification", icon: Shield, color: "primary" },
  { id: "disputes", name: "Disputes & Issues", icon: AlertTriangle, color: "accent" },
  { id: "troubleshooting", name: "Troubleshooting", icon: Wrench, color: "primary" },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory 
    ? categories.filter(c => c.id === activeCategory)
    : categories;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Can We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search our knowledge base or browse categories to find answers.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-foreground">Browse by Category</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card border-border/50 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <category.icon className={`w-8 h-8 mb-3 ${
                  activeCategory === category.id ? "text-primary-foreground" : "text-primary"
                }`} />
                <h3 className={`font-semibold ${
                  activeCategory === category.id ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {category.name}
                </h3>
              </motion.button>
            ))}
          </div>

          {activeCategory && (
            <div className="text-center mt-6">
              <Button variant="outline" onClick={() => setActiveCategory(null)}>
                Show All Categories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {filteredCategories.map((category, categoryIndex) => {
            const faqs = faqCategories[category.id as keyof typeof faqCategories] || [];
            if (faqs.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-medium text-foreground">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to assist you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
                available: "Available 9am-6pm GMT",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us a message and we'll respond within 24 hours",
                action: "support@instacrew.com",
                available: "Response within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our support team",
                action: "+44 20 1234 5678",
                available: "Mon-Fri 9am-6pm GMT",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl border border-border/50 p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                <p className="font-medium text-primary mb-1">{contact.action}</p>
                <p className="text-xs text-muted-foreground">{contact.available}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
