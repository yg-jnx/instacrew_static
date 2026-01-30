import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Trash2, Shield, AlertTriangle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function AccountDeletion() {
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log("Account deletion request:", formData);
    alert("Your account deletion request has been submitted. We will process it within 30 days.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/3 w-64 h-64 bg-destructive/10 rounded-full blur-3xl"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <Trash2 className="w-4 h-4" />
              Account Management
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request Account Deletion
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              We're sorry to see you go. You can request deletion of your InstaCrew 
              account and associated personal data below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Important Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">Before You Delete</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>Please note the following before submitting your deletion request:</p>
                <ul className="space-y-2 ml-4">
                  <li>• This action is <strong>permanent</strong> and cannot be undone</li>
                  <li>• All your shift history, ratings, and reviews will be removed</li>
                  <li>• Active bookings or pending shifts will be cancelled</li>
                  <li>• You will lose access to your account immediately upon approval</li>
                  <li>• Certain information may be retained for legal or regulatory purposes</li>
                </ul>
              </div>
            </motion.div>

            {/* Processing Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">Processing Timeline</h2>
              </div>
              <p className="text-muted-foreground">
                Once submitted, your request will be reviewed and processed within <strong>30 days</strong> in 
                accordance with GDPR. You will receive a confirmation email once your account has been deleted.
              </p>
            </motion.div>

            {/* Data Retention Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">Data Retention</h2>
              </div>
              <p className="text-muted-foreground">
                Please note that certain information (such as invoices or records required for legal 
                or regulatory purposes) may be retained where required by law. This includes:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4 mt-3">
                <li>• Financial transaction records (7 years for tax compliance)</li>
                <li>• Identity verification documents (as required by law)</li>
                <li>• Dispute resolution records</li>
                <li>• Legal correspondence</li>
              </ul>
            </motion.div>

            {/* Deletion Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">Submit Deletion Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Account Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the email address associated with your InstaCrew account
                  </p>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                    Reason for Deletion <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="reason"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a reason...</option>
                    <option value="no-longer-needed">No longer need the service</option>
                    <option value="privacy-concerns">Privacy concerns</option>
                    <option value="found-alternative">Found alternative solution</option>
                    <option value="technical-issues">Technical issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                    Additional Information (Optional)
                  </label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Please provide any additional details..."
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you confirm that you understand this action is permanent 
                    and cannot be reversed. Your account and data will be deleted in accordance with 
                    our Privacy Policy and GDPR requirements.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="destructive" 
                  size="lg" 
                  className="w-full"
                >
                  Submit Deletion Request
                </Button>
              </form>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground m-0">Need Help?</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have questions about account deletion or need assistance, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2 list-none pl-0">
                <li>📧 <strong>Email:</strong> support@instacrew.co.uk</li>
                </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
