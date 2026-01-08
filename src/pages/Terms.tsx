import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Users, Building2, AlertTriangle, Scale, Ban } from "lucide-react";

const sections = [
  {
    icon: Users,
    title: "User Accounts",
    content: `**Account Registration:**
You must register for an account to use InstaCrew's services. You agree to:
- Provide accurate and complete information
- Maintain the security of your account credentials
- Notify us immediately of any unauthorized access
- Accept responsibility for all activities under your account

**Account Types:**
- **Business Owners:** Organizations seeking to hire temporary crew members
- **Crew Members:** Individuals seeking temporary work opportunities

You may only maintain one account per type. We reserve the right to suspend or terminate accounts that violate these terms.`
  },
  {
    icon: Building2,
    title: "Business Owner Obligations",
    content: `As a Business Owner using InstaCrew, you agree to:

**Legal Compliance:**
- Comply with all applicable employment and labor laws
- Maintain necessary business licenses and insurance
- Properly classify workers according to applicable law
- Pay crew members as agreed through the platform

**Shift Posting:**
- Provide accurate shift descriptions and requirements
- Honor confirmed shift bookings
- Provide a safe working environment
- Not discriminate against crew members

**Payment Terms:**
- Pay for services as invoiced
- Maintain valid payment methods
- Accept responsibility for all charges incurred`
  },
  {
    icon: Users,
    title: "Crew Member Obligations",
    content: `As a Crew Member using InstaCrew, you agree to:

**Professional Conduct:**
- Arrive on time for confirmed shifts
- Perform work to reasonable standards
- Follow business instructions and policies
- Maintain professional behavior at all times

**Documentation:**
- Provide accurate identity and work authorization documents
- Keep certifications and qualifications up to date
- Notify us of any changes to your eligibility to work

**Cancellations:**
- Provide adequate notice for cancellations when possible
- Understand that excessive cancellations may affect your account standing

**No-Shows:**
- Understand that no-shows may result in account suspension
- Accept that repeated no-shows will lead to permanent removal from the platform`
  },
  {
    icon: Scale,
    title: "Platform Rules",
    content: `**Fees and Payments:**
- Business Owners pay subscription fees and per-shift fees as outlined in our pricing
- Crew Members use the platform free of charge
- All fees are non-refundable unless otherwise stated
- We may modify pricing with 30 days notice

**Intellectual Property:**
- InstaCrew owns all platform content, features, and functionality
- You may not copy, modify, or distribute our intellectual property
- User content remains owned by users but is licensed to InstaCrew for platform operation

**Disputes:**
- Users should attempt to resolve disputes directly
- InstaCrew may mediate disputes at our discretion
- Our dispute resolution decisions are final
- We are not liable for disputes between users`
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    content: `You may not use InstaCrew to:

**Fraud and Misrepresentation:**
- Provide false or misleading information
- Impersonate another person or entity
- Create fake accounts or shift postings
- Manipulate ratings or reviews

**Illegal Activities:**
- Violate any applicable laws or regulations
- Facilitate illegal employment arrangements
- Discriminate based on protected characteristics
- Harass, threaten, or abuse other users

**Platform Abuse:**
- Attempt to circumvent platform fees
- Scrape or harvest data from the platform
- Interfere with platform operation
- Use automated systems without permission

**Off-Platform Transactions:**
- Solicit or arrange work outside the platform
- Share contact information to avoid platform fees
- Recruit users for competing services`
  },
  {
    icon: AlertTriangle,
    title: "Liability and Disclaimers",
    content: `**Service "As Is":**
InstaCrew is provided "as is" without warranties of any kind. We do not guarantee:
- Continuous or error-free service
- Accuracy of user-provided information
- Quality or reliability of any user
- Availability of shifts or crew members

**Limitation of Liability:**
To the maximum extent permitted by law:
- We are not liable for indirect, incidental, or consequential damages
- Our total liability is limited to fees paid in the prior 12 months
- We are not liable for disputes between users
- We are not responsible for work performed or not performed

**Indemnification:**
You agree to indemnify InstaCrew against claims arising from:
- Your violation of these terms
- Your use of the platform
- Disputes with other users
- Your violation of any laws

**Employment Relationship:**
InstaCrew is a platform connecting businesses and workers. We are not:
- An employer of Crew Members
- An employment agency
- A party to employment contracts
- Responsible for employment decisions`
  },
];

export default function Terms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
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
              <FileText className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Please read these terms carefully before using InstaCrew. 
              By using our platform, you agree to be bound by these terms.
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
              <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to InstaCrew. These Terms of Service ("Terms") govern your use of 
                the InstaCrew platform, including our website, mobile applications, and 
                related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground mt-4">
                InstaCrew is operated by InstaCrew Ltd, a company registered in England 
                and Wales. By accessing or using our Service, you agree to be bound by 
                these Terms and our Privacy Policy.
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

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. We will notify you of material 
                changes by posting the new Terms on this page and updating the "Last updated" 
                date. Your continued use of the Service after changes constitutes acceptance 
                of the revised Terms.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by and construed in accordance with the laws of 
                England and Wales, without regard to conflict of law principles. Any disputes 
                arising from these Terms or your use of the Service shall be subject to the 
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> legal@instacrew.com</li>
                <li><strong>Address:</strong> InstaCrew Ltd, 123 Tech Street, London, EC1A 1BB, UK</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
