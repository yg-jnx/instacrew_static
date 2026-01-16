import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Shield, FileCheck, Globe } from "lucide-react";

const cookieTypes = [
  {
    icon: Shield,
    title: "3.1 Strictly Necessary Cookies",
    required: true,
    description: `These cookies are essential for the operation of the Platform and enable core functionality such as:
    
• user authentication and account login;
• security and fraud prevention;
• load balancing and system stability.

These cookies do not require user consent under UK law.`
  },
  {
    icon: Settings,
    title: "3.2 Functional Cookies",
    required: false,
    description: `Functional cookies allow the Platform to remember choices you make, such as language preferences or region, and provide enhanced, personalised features.

Where required by law, these cookies are used only with your consent.`
  },
  {
    icon: BarChart3,
    title: "3.3 Analytics and Performance Cookies",
    required: false,
    description: `Analytics cookies help us understand how users interact with the Platform by collecting aggregated and anonymised information about usage patterns, page visits, and feature engagement.

This information is used solely to improve the performance, usability, and reliability of the Platform.

Analytics cookies are used only where consent has been provided.`
  },
  {
    icon: Globe,
    title: "3.4 Firebase and Application Technologies",
    required: false,
    description: `The Platform uses **Google Firebase** services to support application functionality, including authentication, messaging, performance monitoring, and error reporting.

Firebase may use cookies or similar technologies to:
• maintain secure user sessions;
• detect misuse or technical issues;
• improve application stability.

These technologies are configured in accordance with applicable data protection requirements.`
  },
];

export default function CookiePolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
              <Cookie className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              This policy explains how InstaCrew uses cookies and similar 
              technologies to recognize you when you visit our platform.
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
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This Cookie Policy explains how cookies and similar technologies are used when you access or use the InstaCrew platform, including our website and mobile applications (together, the "Platform").
              </p>
              <p className="text-muted-foreground mb-4">
                InstaCrew is a product owned and operated by <strong>JNX Technology Ltd</strong>, a company registered in England and Wales ("JNX Technology Ltd", "we", "us", or "our"), trading as <strong>InstaCrew</strong>.
              </p>
              <p className="text-muted-foreground">
                This Policy should be read together with our <strong>Privacy Policy</strong> and forms part of our compliance with the <strong>UK General Data Protection Regulation ("UK GDPR")</strong>, the <strong>Data Protection Act 2018</strong>, and <strong>ICO guidance on cookies and similar technologies</strong>.
              </p>
            </motion.div>

            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">2. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use an application. Cookies enable the Platform to recognise your device, store preferences, and improve functionality and performance.
              </p>
              <p className="text-muted-foreground">
                Cookies may be <strong>session cookies</strong>, which expire when you close your browser, or <strong>persistent cookies</strong>, which remain on your device until deleted or expire.
              </p>
            </motion.div>

            {/* Types of Cookies Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <p className="text-muted-foreground">
                InstaCrew uses the following categories of cookies and similar technologies:
              </p>
            </motion.div>

            {/* Cookie Types */}
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground m-0">{type.title}</h3>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${
                    type.required 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {type.required ? "Required" : "Optional"}
                  </span>
                </div>
                <div className="text-muted-foreground whitespace-pre-line">
                  {type.description}
                </div>
              </motion.div>
            ))}

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies may be placed by third-party service providers that support the Platform, such as analytics or infrastructure providers.
              </p>
              <p className="text-muted-foreground mb-4">
                Where third-party cookies are used:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• they are subject to appropriate contractual safeguards;</li>
                <li>• they are used only for legitimate Platform purposes;</li>
                <li>• they are governed by the third party's own privacy and cookie policies.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                InstaCrew does not permit third-party cookies for advertising or behavioural profiling purposes without appropriate consent.
              </p>
            </motion.div>

            {/* Consent and Cookie Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Consent and Cookie Control</h2>
              <p className="text-muted-foreground mb-4">
                When you first access the Platform, you will be presented with a cookie notice or banner that allows you to:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• accept non-essential cookies;</li>
                <li>• reject non-essential cookies; or</li>
                <li>• manage your cookie preferences.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Non-essential cookies are not placed unless and until valid consent is obtained, in accordance with ICO guidance.
              </p>
              <p className="text-muted-foreground mt-4">
                You may withdraw or amend your consent at any time through the Platform's cookie settings or your browser settings.
              </p>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Managing Cookies via Browser Settings</h2>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings, including blocking or deleting cookies.
              </p>
              <p className="text-muted-foreground">
                Please note that disabling certain cookies may affect the functionality or availability of parts of the Platform.
              </p>
            </motion.div>

            {/* Lawful Basis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Lawful Basis for Cookie Use</h2>
              <p className="text-muted-foreground mb-4">
                Where cookies involve the processing of personal data, such processing is carried out on the following lawful bases:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Legitimate interests</strong> – for strictly necessary cookies essential to Platform operation;</li>
                <li>• <strong>Consent</strong> – for functional, analytics, or non-essential cookies.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Lawful basis assessments are documented internally by JNX Technology Ltd.
              </p>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground">
                Cookies are retained for varying durations depending on their purpose. Retention periods are limited to what is necessary for the intended function and are reviewed periodically.
              </p>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Changes to This Cookie Policy</h2>
              <p className="text-muted-foreground">
                This Cookie Policy may be updated from time to time to reflect changes in law, technology, or Platform functionality. The latest version will always be available on the Platform.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Cookie Policy or how cookies are used, you may contact us at:
              </p>
              <ul className="text-muted-foreground space-y-2 list-none pl-0">
                <li>📧 <strong>Email:</strong> info@jnxtechnology.co.uk</li>
                <li><strong>Company:</strong> JNX Technology Ltd (trading as InstaCrew)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
