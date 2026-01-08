import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Clock, Mail } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, post a shift, apply for work, or contact us for support.

**Personal Information:**
- Name, email address, and phone number
- Business information (for Business Owners)
- Work history and certifications (for Crew Members)
- Payment and billing information
- Profile photos and identification documents

**Automatically Collected Information:**
- Device information and browser type
- IP address and location data
- Usage patterns and preferences
- Cookies and similar technologies`
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the information we collect to:

- Provide, maintain, and improve our services
- Process transactions and send related information
- Match Crew Members with relevant shift opportunities
- Verify identities and conduct background checks
- Send notifications about shifts, applications, and updates
- Respond to your comments, questions, and requests
- Monitor and analyze trends and usage
- Detect, investigate, and prevent fraudulent activities
- Comply with legal obligations`
  },
  {
    icon: Lock,
    title: "Information Sharing",
    content: `We share your information in the following circumstances:

**Between Users:**
- Business Owners can see Crew Member profiles when reviewing applications
- Crew Members can see basic business information for posted shifts

**Service Providers:**
- Payment processors for handling transactions
- Identity verification services
- Cloud hosting and data storage providers
- Analytics and monitoring services

**Legal Requirements:**
- When required by law or legal process
- To protect the rights and safety of InstaCrew, our users, or others
- In connection with a merger, acquisition, or sale of assets`
  },
  {
    icon: Shield,
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information:

- Encryption of data in transit and at rest
- Regular security assessments and penetration testing
- Access controls and authentication requirements
- Employee training on data protection
- Incident response procedures
- Regular backups and disaster recovery plans

While we strive to protect your information, no method of transmission over the Internet is 100% secure.`
  },
  {
    icon: Clock,
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to:

- Provide our services to you
- Comply with legal obligations
- Resolve disputes and enforce agreements

**Retention Periods:**
- Active account data: Duration of account plus 2 years
- Financial records: 7 years for tax compliance
- Verification documents: 3 years after account closure
- Usage logs: 12 months

You can request deletion of your data at any time, subject to legal retention requirements.`
  },
  {
    icon: Mail,
    title: "Your Rights & Choices",
    content: `Under GDPR and applicable data protection laws, you have the right to:

- **Access** your personal data
- **Correct** inaccurate information
- **Delete** your data (right to be forgotten)
- **Port** your data to another service
- **Object** to processing of your data
- **Restrict** processing in certain circumstances
- **Withdraw consent** at any time

To exercise these rights, contact us at privacy@instacrew.com or through your account settings.

**Marketing Communications:**
You can opt out of marketing emails by clicking "unsubscribe" in any email or updating your notification preferences.`
  },
];

export default function Privacy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
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
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your privacy matters to us. This policy explains how InstaCrew collects, 
              uses, and protects your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground">
                InstaCrew ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our platform connecting businesses with 
                temporary crew members.
              </p>
              <p className="text-muted-foreground mt-4">
                By using InstaCrew, you agree to the collection and use of information 
                in accordance with this policy. If you do not agree with our practices, 
                please do not use our services.
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                </div>
                <div className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> privacy@instacrew.com</li>
                <li><strong>Address:</strong> InstaCrew Ltd, 123 Tech Street, London, EC1A 1BB, UK</li>
                <li><strong>Data Protection Officer:</strong> dpo@instacrew.com</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
