import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Users, Building2, AlertTriangle, Scale, Shield, FileCheck } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. About These Terms",
    content: `These Terms & Conditions ("Terms") set out the legally binding agreement between you and InstaCrew regarding your access to and use of the InstaCrew platform, including any mobile applications, websites, software, and related services (together, the "Platform").

By registering for an account, accessing, or using the Platform in any manner, you confirm that you have read, understood, and agree to be bound by these Terms.

Nothing in these Terms shall be construed as creating a partnership, joint venture, agency, or employment relationship between JNX Technology Ltd and any User.`
  },
  {
    icon: Building2,
    title: "2. About InstaCrew",
    content: `InstaCrew is a software platform and product owned and operated by **JNX Technology Ltd**, a company registered in England and Wales, trading as **InstaCrew**.

References in these Terms to "InstaCrew", "we", "us", or "our" mean **JNX Technology Ltd trading as InstaCrew**.

JNX Technology Ltd provides InstaCrew solely as a **technology marketplace platform**. It does not supply labour, does not employ Workers, and does not act as an employment agency, employer, agent, or representative of any Worker or Business.`
  },
  {
    icon: FileCheck,
    title: "3. Definitions",
    content: `In these Terms, unless the context otherwise requires:

**"Business"** means any individual, sole trader, partnership, or company that posts Shifts on the Platform.

**"Worker"** means any individual who registers on the Platform to seek or accept Shifts.

**"Shift"** means a work opportunity posted by a Business through the Platform.

**"Engagement"** means any agreement or arrangement formed directly between a Worker and a Business following acceptance of a Shift.

**"User"** means any Business or Worker using the Platform.`
  },
  {
    icon: Scale,
    title: "4. Scope of the Platform",
    content: `InstaCrew operates solely as an **online intermediary marketplace**, facilitating introductions between Businesses and Workers.

InstaCrew:
- does not control how work is performed;
- does not supervise or manage Workers;
- is not a party to any Engagement.

All rights, obligations, and liabilities arising from an Engagement exist **exclusively between the Business and the Worker**.`
  },
  {
    icon: Users,
    title: "5. Account Registration",
    content: `To use the Platform, Users must create an account and provide accurate, complete, and up-to-date information.

Users are responsible for maintaining the confidentiality of their login credentials and for all activity conducted through their account. InstaCrew reserves the right to suspend or terminate accounts where information is false, misleading, or incomplete.`
  },
  {
    icon: AlertTriangle,
    title: "6. Worker Status & Employment Disclaimer",
    content: `Workers acknowledge and agree that:
- they are not employees, workers, agents, or representatives of InstaCrew;
- no employment relationship is created by use of the Platform;
- InstaCrew does not guarantee minimum work, hours, or income.

Nothing in these Terms shall be construed as creating an employment relationship under UK employment law.`
  },
  {
    icon: Building2,
    title: "7. Business Responsibilities",
    content: `Businesses are solely responsible for:
- verifying Workers' right to work in the UK;
- complying with employment, tax, health & safety, and immigration laws;
- managing working hours, rest breaks, pay, and workplace conduct.

InstaCrew accepts no responsibility for Business compliance failures.`
  },
  {
    icon: Shield,
    title: "8. Immigration & Right-to-Work Compliance",
    content: `All Workers represent and warrant that they are legally entitled to work in the United Kingdom and will not accept or perform work in breach of their immigration or visa conditions.

InstaCrew does not independently verify visa types, sponsorship conditions, or working hour limits and relies on User declarations.`
  },
  {
    icon: AlertTriangle,
    title: "9. Student & Sponsored Worker Declarations",
    content: `Workers holding restricted visas (including Student or Sponsored visas) acknowledge that:
- they are personally responsible for understanding and complying with visa working limits;
- they will not accept Shifts that cause them to breach those limits.

Any breach of visa conditions is the sole responsibility of the Worker and/or the engaging Business.`
  },
  {
    icon: FileCheck,
    title: "10. Shift Acceptance & Cancellations",
    content: `When a Worker accepts a Shift, a direct Engagement is formed between the Worker and the Business.

Cancellation terms may vary by Business. InstaCrew may impose platform-level consequences (such as reduced visibility or suspension) for repeated cancellations or misuse.`
  },
  {
    icon: Scale,
    title: "11. Payments & Fees",
    content: `InstaCrew may facilitate payments using third-party payment providers. InstaCrew does not determine wages, tax treatment, or payroll obligations.

Any disputes relating to payment must be resolved directly between the Worker and the Business.`
  },
  {
    icon: Users,
    title: "12. Ratings, Reviews & Feedback",
    content: `Users may provide ratings and reviews based on genuine experiences. InstaCrew reserves the right to remove feedback that is abusive, misleading, or unlawful.

Ratings do not constitute endorsements or guarantees by InstaCrew.`
  },
  {
    icon: Shield,
    title: "13. Acceptable Use",
    content: `Users must not:
- misrepresent identity or legal working status;
- use the Platform for unlawful purposes;
- interfere with Platform security or functionality;
- attempt to bypass fees or safeguards.

InstaCrew may investigate suspected misuse.`
  },
  {
    icon: AlertTriangle,
    title: "14. Suspension & Termination",
    content: `InstaCrew may suspend or terminate access to the Platform at any time if:
- these Terms are breached;
- legal or regulatory risk arises;
- fraud, abuse, or misconduct is suspected.

Termination does not affect accrued rights or liabilities.`
  },
  {
    icon: FileText,
    title: "15. Intellectual Property",
    content: `All intellectual property rights in the Platform, including software, branding, and content, belong to InstaCrew or its licensors.

Users are granted a limited, non-exclusive, non-transferable licence to use the Platform for its intended purpose.`
  },
  {
    icon: Shield,
    title: "16. Data Protection",
    content: `Personal data is processed in accordance with:
- the UK GDPR;
- the Data Protection Act 2018;
- the InstaCrew Privacy Policy.

InstaCrew may act as a data controller and/or processor depending on the context.`
  },
  {
    icon: FileCheck,
    title: "17. Confidentiality",
    content: `Users must keep confidential any non-public information obtained through the Platform and must not disclose it without lawful authority.`
  },
  {
    icon: AlertTriangle,
    title: "18. Disclaimers",
    content: `The Platform is provided on an "as is" and "as available" basis. InstaCrew makes no warranties regarding:
- availability of work;
- suitability of Workers;
- conduct of Users.`
  },
  {
    icon: Scale,
    title: "19. Limitation of Liability",
    content: `To the maximum extent permitted by law, InstaCrew shall not be liable for:
- loss of income or profit;
- immigration penalties or visa breaches;
- employment or tax disputes;
- indirect or consequential losses.`
  },
  {
    icon: Shield,
    title: "20. Indemnity",
    content: `Users agree to indemnify and hold harmless InstaCrew against all claims, losses, or liabilities arising from:
- breach of these Terms;
- violation of immigration or employment laws;
- misuse of the Platform.`
  },
];

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Please read these terms carefully before using InstaCrew. 
              By using our platform, you agree to be bound by these terms.
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

            {/* Additional Terms */}
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
                <h2 className="text-xl font-semibold text-foreground m-0">21. Changes to These Terms</h2>
              </div>
              <p className="text-muted-foreground">
                InstaCrew may update these Terms from time to time. Continued use of the Platform following changes constitutes acceptance of the updated Terms.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">22. Governing Law & Jurisdiction</h2>
              </div>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
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
              <ul className="text-muted-foreground space-y-2 list-none pl-0">
                <li><strong>Email:</strong> info@jnxtechnology.co.uk</li>
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
