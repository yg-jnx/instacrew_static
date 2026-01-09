import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Code2, 
  Key, 
  Webhook,
  Shield,
  Users,
  Calendar,
  FileText,
  CreditCard,
  Terminal,
  Book,
  Check,
  Zap,
  Globe,
  Lock
} from "lucide-react";

const resources = [
  { icon: Users, name: "Users", description: "Manage business and crew member accounts" },
  { icon: Calendar, name: "Shifts", description: "Create, update, and manage shift postings" },
  { icon: FileText, name: "Applications", description: "Handle shift applications and assignments" },
  { icon: Shield, name: "Documents", description: "Upload and verify identity documents" },
  { icon: CreditCard, name: "Subscriptions", description: "Manage billing and subscription plans" },
];

const codeExample = `// Authentication using API key
const response = await fetch('https://api.instacrew.com/v1/shifts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const shifts = await response.json();

// Create a new shift
const newShift = await fetch('https://api.instacrew.com/v1/shifts', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Event Staff',
    location: 'London, UK',
    start_time: '2025-02-01T18:00:00Z',
    hourly_rate: 14.00,
    positions: 5
  })
});`;

const features = [
  { icon: Zap, title: "RESTful API", description: "Clean, predictable endpoints" },
  { icon: Globe, title: "99.9% Uptime", description: "Enterprise-grade reliability" },
  { icon: Lock, title: "OAuth 2.0", description: "Secure authentication" },
  { icon: Webhook, title: "Webhooks", description: "Real-time event notifications" },
];

export default function Developers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Developer Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build with the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                InstaCrew API
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Integrate staffing capabilities directly into your applications with our 
              powerful, well-documented REST API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                <Key className="mr-2 w-4 h-4" />
                Get API Keys
              </Button>
              <Button size="lg" variant="outline">
                <Book className="mr-2 w-4 h-4" />
                Read the Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl border border-border/50 p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Resources */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build powerful staffing integrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-xl border border-border/50 p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{resource.name}</h3>
                <p className="text-xs text-muted-foreground">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Simple, Powerful Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our RESTful API uses standard HTTP methods and returns JSON responses. 
                Get started in minutes with our SDKs for popular languages.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Authentication", description: "Secure API key-based authentication" },
                  { title: "Create Shifts", description: "Post new shifts programmatically" },
                  { title: "Webhooks", description: "Real-time event notifications" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border/50"
                  >
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      Example Code
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">JavaScript</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-muted-foreground">{codeExample}</code>
                </pre>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg px-3 py-1.5 shadow-lg"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-medium">REST API v1</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Webhooks Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Webhook className="w-4 h-4" />
              Webhooks
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Real-Time Event Notifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to events and get instant notifications when things happen
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { event: "application.created", description: "New application submitted" },
              { event: "application.accepted", description: "Application accepted by business" },
              { event: "shift.filled", description: "All positions for a shift filled" },
              { event: "shift.started", description: "Crew member clocked in" },
              { event: "shift.completed", description: "Shift ended and timesheet generated" },
              { event: "payment.processed", description: "Payment successfully processed" },
              { event: "document.verified", description: "Identity document approved" },
              { event: "rating.submitted", description: "New rating or review posted" },
            ].map((webhook, index) => (
              <motion.div
                key={webhook.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <code className="text-sm font-mono text-primary">{webhook.event}</code>
                  <p className="text-xs text-muted-foreground">{webhook.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/20 p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Security First</h2>
                <p className="text-muted-foreground">Enterprise-grade security for your integrations</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "TLS 1.3 Encryption", description: "All API traffic encrypted in transit" },
                { title: "API Key Rotation", description: "Rotate keys anytime from the dashboard" },
                { title: "Webhook Signatures", description: "HMAC signatures verify webhook authenticity" },
                { title: "Rate Limiting", description: "Protection against abuse and DDoS" },
                { title: "IP Whitelisting", description: "Restrict API access by IP address" },
                { title: "Audit Logs", description: "Complete history of API activity" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get your API keys and start integrating InstaCrew into your applications today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group">
                Get API Keys
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}