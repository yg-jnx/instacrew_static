import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Database, Lock, FileCheck, Globe, Server, CreditCard, Users, AlertTriangle, Clock, UserCheck, FileText, Award } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "1. Purpose and Regulatory Framework",
    content: `This UK GDPR & Data Protection Policy documents the measures implemented by **JNX Technology Ltd**, trading as **InstaCrew**, to ensure compliance with the **UK General Data Protection Regulation ("UK GDPR")** and the **Data Protection Act 2018**.

This Policy is intended to demonstrate accountability, transparency, and lawful processing in accordance with ICO guidance and applies to all personal data processed through the InstaCrew platform.`
  },
  {
    icon: Users,
    title: "2. Data Controller and Processor Status",
    content: `For the purposes of UK data protection legislation:

• **JNX Technology Ltd trading as InstaCrew** acts as **Data Controller** where it determines the purposes and means of processing personal data; and
• acts as **Data Processor** where it processes personal data strictly on the documented instructions of Businesses using the Platform.

These roles are assessed per processing activity and documented internally.`
  },
  {
    icon: Database,
    title: "3. Categories of Personal Data Collected and Processed",
    subsections: [
      {
        subtitle: "3.1 Identity and Right-to-Work Data",
        content: `• Full legal name
• Date of birth
• Passport details
• Driving licence details
• Government-issued legal identification
• UK Home Office share codes (where provided)

This data is collected solely for **identity verification and right-to-work compliance purposes** and is not used for automated decision-making.`
      },
      {
        subtitle: "3.2 Contact and Account Data",
        content: `• Email address
• Telephone number
• Residential address (where provided)
• Account credentials (stored in encrypted or hashed form)`
      },
      {
        subtitle: "3.3 Work and Platform Usage Data",
        content: `• Availability and shift history
• Engagement records
• Ratings, reviews, and feedback
• Platform communications`
      },
      {
        subtitle: "3.4 Technical and Usage Data",
        content: `• IP address
• Device identifiers
• Browser type and operating system
• Login timestamps and activity logs`
      },
      {
        subtitle: "3.5 Financial and Transaction Metadata",
        content: `• Payment status indicators
• Transaction references
• Invoicing and platform fee records

**Important:** Payment card details are **never stored** by JNX Technology Ltd.`
      }
    ]
  },
  {
    icon: FileCheck,
    title: "4. Lawful Bases for Processing",
    content: `Processing activities are conducted only where a lawful basis exists under Article 6 UK GDPR, including:

• **Performance of a contract** – to operate and provide the Platform
• **Legal obligation** – including right-to-work and regulatory compliance
• **Legitimate interests** – to ensure platform security, integrity, and fraud prevention
• **Consent** – where required for optional processing activities

Lawful basis determinations are recorded and reviewed periodically.`
  },
  {
    icon: Server,
    title: "5. Hosting, Infrastructure, and Data Storage",
    content: `The InstaCrew platform is hosted using a combination of:

• **Microsoft Azure** cloud infrastructure; and
• **Google Firebase** services (including authentication, messaging, and application services).

Data is hosted primarily within **UK and/or EEA data centres**, as configured by JNX Technology Ltd. Access to production systems is restricted to authorised personnel and monitored.

JNX Technology Ltd remains responsible for compliance irrespective of the infrastructure used.`
  },
  {
    icon: Globe,
    title: "6. Third-Party Service Providers",
    content: `JNX Technology Ltd uses carefully selected third-party service providers to support Platform functionality, including:

• cloud hosting and infrastructure providers (e.g. Microsoft Azure);
• application services and authentication (e.g. Firebase);
• payment facilitation services (e.g. Stripe);
• analytics, monitoring, and customer support tools.

Where such providers process personal data, they do so under written contractual terms incorporating UK GDPR-compliant data protection obligations.`
  },
  {
    icon: CreditCard,
    title: "7. Payment Processing (Stripe)",
    content: `Payments facilitated via the Platform are processed by **Stripe** or Stripe-affiliated entities.

• Stripe acts as an **independent data controller** for payment card information.
• JNX Technology Ltd receives only limited transaction metadata necessary for reconciliation and record-keeping.
• JNX Technology Ltd does not store or process full cardholder data and does not have access to payment card numbers.`
  },
  {
    icon: Globe,
    title: "8. International Data Transfers",
    content: `JNX Technology Ltd does **not intentionally transfer personal data outside the United Kingdom**.

Where third-party providers may process data from locations outside the UK, JNX Technology Ltd ensures that appropriate safeguards are in place, including adequacy decisions or approved contractual protections, in accordance with UK GDPR requirements.`
  },
  {
    icon: Lock,
    title: "9. Data Security Measures",
    content: `Appropriate technical and organisational measures are implemented to safeguard personal data, including:

• encryption of data in transit and at rest where appropriate;
• role-based access controls;
• logging and monitoring of system access;
• regular security reviews and updates.`
  },
  {
    icon: Clock,
    title: "10. Data Retention and Deletion",
    content: `Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, including legal, regulatory, and audit obligations.

Where retention is no longer required, data is securely deleted or anonymised.`
  },
  {
    icon: UserCheck,
    title: "11. Data Deletion Requests",
    content: `Individuals may request deletion of their personal data by submitting a written request to:

📧 **info@jnxtechnology.co.uk**

Requests will be:
• verified to confirm identity;
• assessed against legal retention requirements;
• actioned within statutory timeframes.

Where deletion cannot be completed due to legal obligations, the individual will be informed accordingly.`
  },
  {
    icon: Shield,
    title: "12. Data Subject Rights",
    content: `Individuals have rights under UK GDPR, including the right to:

• access personal data;
• request rectification;
• request erasure;
• restrict or object to processing;
• request data portability.

All requests are logged and handled in accordance with statutory requirements.`
  },
  {
    icon: AlertTriangle,
    title: "13. Personal Data Breach Management",
    content: `JNX Technology Ltd maintains a documented incident response procedure to identify, investigate, and contain personal data breaches.

In the event of a breach:
1. The matter must be reported internally to **JNX Technology Ltd** immediately;
2. A risk assessment will be conducted without undue delay;
3. Where required by law, the **Information Commissioner's Office (ICO)** will be notified within 72 hours;
4. Affected individuals will be notified where there is a high risk to their rights and freedoms.

All incidents are recorded for accountability purposes.`
  },
  {
    icon: Award,
    title: "14. Accountability and Governance",
    content: `To demonstrate compliance, JNX Technology Ltd maintains:

• records of processing activities;
• data protection risk assessments;
• processor agreements;
• staff training records;
• internal policies and procedures.`
  },
  {
    icon: Users,
    title: "15. Training and Confidentiality",
    content: `All personnel with access to personal data are subject to confidentiality obligations and receive appropriate data protection training.`
  },
];

export default function GDPR() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
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
              UK GDPR & Data Protection Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Our comprehensive framework for protecting your personal data in compliance 
              with UK GDPR and Data Protection Act 2018.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>JNX Technology Ltd (trading as InstaCrew)</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 16, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground m-0">{section.title}</h2>
                </div>
                
                {section.subsections ? (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {subsection.subtitle}
                        </h3>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {subsection.content}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Policy Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">16. Policy Review</h2>
              </div>
              <p className="text-muted-foreground">
                This Policy is reviewed periodically and updated to reflect changes in law, technology, regulatory guidance, or business operations.
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
                For questions about GDPR compliance or data protection, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2 list-none pl-0">
                <li>📧 <strong>Email:</strong> info@jnxtechnology.co.uk</li>
                <li><strong>Company:</strong> JNX Technology Ltd (trading as InstaCrew)</li>
                <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
