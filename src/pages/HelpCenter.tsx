import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  HelpCircle, 
  User, 
  Briefcase,
  Users,
  CreditCard,
  Grid,
  Mail,
  MessageCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA, FAQ_CATEGORIES } from "@/data/mockData";

// Map icon strings to components
const iconMap: Record<string, any> = {
  Grid,
  HelpCircle,
  Briefcase,
  Users,
  CreditCard,
  User,
};

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter FAQs based on search and category
  const getFilteredFAQs = () => {
    let filtered = FAQ_DATA;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredFAQs = getFilteredFAQs();

  // Group FAQs by category for display
  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof FAQ_DATA>);

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

            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-4">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
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

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {FAQ_CATEGORIES.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              const count = FAQ_DATA.filter(faq => 
                category.id === 'all' ? true : faq.category === category.id
              ).length;

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                  className={`px-6 py-3 rounded-full border flex items-center gap-2 transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card border-border/50 hover:border-primary/30 hover:shadow-md text-foreground"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category.id
                      ? "bg-primary-foreground/20"
                      : "bg-muted"
                  }`}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browse all categories
              </p>
              <Button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>
                Clear Search
              </Button>
            </motion.div>
          ) : (
            Object.entries(groupedFAQs).map(([categoryId, faqs], categoryIndex) => {
              const categoryInfo = FAQ_CATEGORIES.find(c => c.id === categoryId);
              if (!categoryInfo) return null;

              const IconComponent = iconMap[categoryInfo.icon];

              return (
                <motion.div
                  key={categoryId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{categoryInfo.label}</h2>
                    <span className="text-sm text-muted-foreground">({faqs.length})</span>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryId}-${index}`}
                        className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-5">
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              );
            })
          )}
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

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us a message and we'll respond within 24 hours",
                action: "support@instacrew.co.uk",
                actionLink: "mailto:support@instacrew.co.uk",
                available: "Response within 24 hours",
              },
              {
                icon: MessageCircle,
                title: "Urgent Issues",
                description: "For urgent matters, include 'URGENT' in your subject line",
                action: "support@instacrew.co.uk",
                actionLink: "mailto:support@instacrew.co.uk?subject=URGENT",
                available: "Priority response for urgent issues",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.actionLink}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl border border-border/50 p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all block"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                <p className="font-medium text-primary mb-1">{contact.action}</p>
                <p className="text-xs text-muted-foreground">{contact.available}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
