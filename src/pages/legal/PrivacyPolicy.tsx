import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Clock, Mail, Users, Globe, FileText, UserCheck } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction and Purpose",
    content: `This Privacy Policy sets out how personal data is collected, used, stored, shared, and protected when individuals access or use the InstaCrew platform, including any associated mobile applications, websites, software, and related services (together, the "Platform").

InstaCrew is a software product owned and operated by  JNX Technology Ltd , a company registered in England and Wales ("JNX Technology Ltd", "we", "us", or "our"), trading as  InstaCrew .

JNX Technology Ltd is committed to protecting personal data and complying with all applicable data protection legislation, including the  UK General Data Protection Regulation ("UK GDPR")  and the  Data Protection Act 2018 .`
  },
  {
    icon: Shield,
    title: "2. Data Controller Details",
    content: `For the purposes of UK data protection law,  JNX Technology Ltd trading as InstaCrew  is the  data controller  in respect of personal data processed through the Platform, unless expressly stated otherwise.

 Registered Office:  71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
 Company Number:  JNX Technology LTD
 Contact Email:  info@jnxtechnology.co.uk`
  },
  {
    icon: Users,
    title: "3. Scope of This Privacy Policy",
    content: `This Privacy Policy applies to:

• individuals registering as workers ("Workers");
• businesses registering to post work opportunities ("Businesses");
• visitors to the InstaCrew website.

This Privacy Policy does not apply to personal data processed independently by Businesses outside the Platform, for which such Businesses act as separate data controllers.`
  },
  {
    icon: Database,
    title: "4. Categories of Personal Data",
    content: `We may collect and process the following categories of personal data:

•  Identity Data  – including name, date of birth, profile photo, and identification details where provided
•  Contact Data  – including email address, telephone number, and postal address
•  Account Data  – including usernames, passwords (encrypted), preferences, and account settings
•  Work and Platform Data  – including availability, shift history, ratings, reviews, and communications
•  Technical Data  – including IP address, device identifiers, operating system, and browser type
•  Usage Data  – including interaction logs, access times, and feature usage
•  Communications Data  – including messages exchanged via the Platform and support enquiries

We do not intentionally collect special category data unless required by law or expressly provided by the user.`
  },
  {
    icon: Eye,
    title: "5. How Personal Data Is Collected",
    content: `Personal data is collected:

• directly from users during registration and profile completion;
• through use of the Platform and its features;
• through communications with customer support;
• automatically via cookies, log files, and analytics technologies.`
  },
  {
    icon: FileText,
    title: "6. Lawful Bases for Processing",
    content: `JNX Technology Ltd processes personal data only where a lawful basis exists under UK GDPR, including:

•  Performance of a contract , where processing is necessary to provide access to and operate the Platform
•  Legal obligation , where processing is required to comply with applicable laws or regulatory requirements
•  Legitimate interests , where processing is necessary to operate, secure, and improve the Platform, provided such interests are not overridden by individual rights
•  Consent , where explicitly obtained (for example, in relation to optional marketing communications)`
  },
  {
    icon: UserCheck,
    title: "7. Purposes of Processing",
    content: `Personal data is processed for the following purposes:

• creating and administering user accounts;
• facilitating introductions and communications between Workers and Businesses;
• enabling the booking, management, and administration of shifts;
• maintaining Platform security and preventing fraud or misuse;
• improving Platform functionality and user experience;
• complying with legal, regulatory, and contractual obligations.`
  },
  {
    icon: Globe,
    title: "8. Data Sharing and Disclosure",
    content: `Personal data may be shared with:

• other users where necessary to facilitate an engagement through the Platform;
• third-party service providers acting on our behalf (including hosting, payment processing, analytics, and customer support);
• professional advisers such as solicitors and accountants;
• public authorities, regulators, or law enforcement agencies where legally required.

All third-party recipients are subject to appropriate contractual and security obligations.`
  },
  {
    icon: FileText,
    title: "9. Data Processor Arrangements",
    content: `In certain circumstances, JNX Technology Ltd may act as a  data processor  on behalf of Businesses, particularly in relation to shift management and communications functionality.

Where acting as a processor, processing is governed by written data processing terms in accordance with Article 28 UK GDPR.`
  },
  {
    icon: Globe,
    title: "10. International Data Transfers",
    content: `Where personal data is transferred outside the United Kingdom, JNX Technology Ltd ensures that appropriate safeguards are in place, including adequacy regulations or approved contractual protections.`
  },
  {
    icon: Lock,
    title: "11. Data Security",
    content: `We implement appropriate technical and organisational measures designed to protect personal data against unauthorised access, accidental loss, destruction, or disclosure.

Access to personal data is limited to authorised personnel who require such access for legitimate business purposes.`
  },
  {
    icon: Clock,
    title: "12. Data Retention",
    content: `Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, including compliance with legal, accounting, and regulatory obligations.

Retention periods are reviewed periodically to ensure ongoing compliance.`
  },
  {
    icon: Shield,
    title: "13. Individual Rights",
    content: `Individuals have rights under UK GDPR, including the right to:

• access their personal data;
• request rectification of inaccurate or incomplete data;
• request erasure of personal data where applicable;
• restrict or object to processing;
• request data portability.

Requests may be made by contacting us using the details set out above.`
  },
  {
    icon: Mail,
    title: "14. Marketing Communications",
    content: `Marketing communications will only be sent where permitted by law. Individuals may opt out of marketing at any time without affecting service-related communications.`
  },
  {
    icon: Eye,
    title: "15. Cookies",
    content: `The Platform uses cookies and similar technologies. Further details are provided in the InstaCrew Cookie Policy.`
  },
  {
    icon: Users,
    title: "16. Children's Data",
    content: `The Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.`
  },
];

export default function PrivacyPolicy() {
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
                <div className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Changes to Policy */}
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
                <h2 className="text-xl font-semibold text-foreground m-0">17. Changes to This Policy</h2>
              </div>
              <p className="text-muted-foreground">
                This Privacy Policy may be updated from time to time. The most current version will always be available on the Platform.
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
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2 list-none pl-0">
                <li><strong>Email:</strong> info@jnxtechnology.co.uk</li>
                <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
                <li><strong>Company:</strong> JNX Technology Ltd (trading as InstaCrew)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
