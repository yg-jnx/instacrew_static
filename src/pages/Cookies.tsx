import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Target, Shield } from "lucide-react";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    required: true,
    description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as logging in or filling in forms.",
    examples: [
      { name: "session_id", purpose: "Maintains your login session", duration: "Session" },
      { name: "csrf_token", purpose: "Security token to prevent cross-site attacks", duration: "Session" },
      { name: "cookie_consent", purpose: "Remembers your cookie preferences", duration: "1 year" },
    ]
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    required: false,
    description: "These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: [
      { name: "language", purpose: "Remembers your language preference", duration: "1 year" },
      { name: "timezone", purpose: "Stores your timezone for shift times", duration: "1 year" },
      { name: "theme", purpose: "Remembers light/dark mode preference", duration: "1 year" },
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    required: false,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.",
    examples: [
      { name: "_ga", purpose: "Google Analytics - tracks unique visitors", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics - session identification", duration: "24 hours" },
      { name: "amplitude_id", purpose: "Product analytics and user behavior", duration: "1 year" },
    ]
  },
  {
    icon: Target,
    title: "Marketing Cookies",
    required: false,
    description: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.",
    examples: [
      { name: "_fbp", purpose: "Facebook advertising tracking", duration: "3 months" },
      { name: "li_sugr", purpose: "LinkedIn advertising insights", duration: "3 months" },
      { name: "_gcl_au", purpose: "Google Ads conversion tracking", duration: "3 months" },
    ]
  },
];

export default function Cookies() {
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
              Last updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your computer or mobile device 
                when you visit a website. They are widely used to make websites work more 
                efficiently and to provide information to website owners.
              </p>
              <p className="text-muted-foreground">
                We use cookies and similar technologies (like local storage and pixels) to:
              </p>
              <ul className="text-muted-foreground mt-4 space-y-2">
                <li>• Keep you signed in to your account</li>
                <li>• Remember your preferences and settings</li>
                <li>• Understand how you use our platform</li>
                <li>• Improve our services based on your behavior</li>
                <li>• Show you relevant content and advertisements</li>
              </ul>
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
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{type.title}</h2>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    type.required 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {type.required ? "Required" : "Optional"}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground font-medium">Cookie Name</th>
                        <th className="text-left py-2 text-foreground font-medium">Purpose</th>
                        <th className="text-left py-2 text-foreground font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.examples.map((cookie, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3 text-muted-foreground font-mono text-xs">{cookie.name}</td>
                          <td className="py-3 text-muted-foreground">{cookie.purpose}</td>
                          <td className="py-3 text-muted-foreground">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences at any time:
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li>
                  <strong>Cookie Banner:</strong> Use our cookie consent banner when you first 
                  visit to select your preferences.
                </li>
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to block or delete 
                  cookies through their settings. Note that blocking essential cookies may 
                  prevent the website from functioning properly.
                </li>
                <li>
                  <strong>Account Settings:</strong> If you have an account, you can manage 
                  certain cookie preferences in your account settings.
                </li>
                <li>
                  <strong>Opt-Out Tools:</strong> You can opt out of analytics and advertising 
                  cookies using industry tools like the Digital Advertising Alliance's opt-out page.
                </li>
              </ul>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies are placed by third-party services that appear on our pages. 
                We do not control these cookies. The third-party providers include:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Google Analytics</strong> - Website analytics</li>
                <li>• <strong>Stripe</strong> - Payment processing</li>
                <li>• <strong>Intercom</strong> - Customer support chat</li>
                <li>• <strong>Facebook</strong> - Social media integration and advertising</li>
                <li>• <strong>LinkedIn</strong> - Professional networking and advertising</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please refer to these providers' privacy policies for information about their 
                cookies and how to opt out.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> privacy@instacrew.com</li>
                <li><strong>Address:</strong> InstaCrew Ltd, 123 Tech Street, London, EC1A 1BB, UK</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
