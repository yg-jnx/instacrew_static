import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Trash2, Shield, AlertTriangle, Clock, Mail, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function AccountDeletion() {
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');
  setErrorMessage("");

  try {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Format the timestamp
    const submissionTime = new Date().toLocaleString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    // Concatenate all account deletion information into the message field
    const fullMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTACREW - ACCOUNT DELETION REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 User Email: ${formData.email}

📅 Request Date: ${submissionTime}

❌ Reason for Deletion: ${formData.reason}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.additionalInfo || 'No additional information provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a GDPR account deletion request that MUST be processed within 30 days.

Required Actions:
1. Verify user identity for ${formData.email}
2. Delete all personal data and account information
3. Cancel any active bookings or pending shifts
4. Send confirmation email to user
5. Document deletion in compliance records

Company: JNX Technology Ltd (trading as InstaCrew)
Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from the InstaCrew platform.
For questions, contact: support@instacrew.co.uk
    `.trim();

    // Map to EmailJS template parameters (matching your template structure)
    const templateParams = {
      user_email: formData.email,
      name: 'InstaCrew System',  // Static name since it's automated
      time: submissionTime,
      message: fullMessage,      // All data concatenated here
    };

    console.log('Sending email with params:', templateParams); // For debugging

    // Send email using EmailJS
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS Response:', response);

    if (response.status === 200) {
      setSubmitStatus('success');
      
      // Store email for success message
      const userEmail = formData.email;
      
      // Reset form
      setFormData({
        email: "",
        reason: "",
        additionalInfo: ""
      });
      
      // Store email in errorMessage state for display in success message
      setErrorMessage(userEmail);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  } catch (error: any) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
    
    if (error.text) {
      setErrorMessage(`Error: ${error.text}`);
    } else if (error.message) {
      setErrorMessage(`Error: ${error.message}`);
    } else {
      setErrorMessage('An unexpected error occurred. Please try again or contact support directly.');
    }
  } finally {
    setIsSubmitting(false);
  }
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
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-2xl p-8 mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  <h2 className="text-xl font-semibold text-foreground m-0">Request Submitted Successfully! ✅</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="mb-4">
                    Your account deletion request has been successfully sent to our team at{' '}
                    <strong>support@instacrew.co.uk</strong>
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <p className="font-semibold text-foreground mb-2">📧 Confirmation sent to:</p>
                    <p className="text-green-600 dark:text-green-400 font-mono">{errorMessage}</p>
                  </div>
                  <p className="mt-4">
                    ⏱️ We will review and process your request within <strong>30 days</strong> in 
                    accordance with UK GDPR regulations.
                  </p>
                  <p className="text-sm">
                    You will receive a final confirmation email once your account has been permanently deleted.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-950 border-2 border-red-500 rounded-2xl p-8 mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
                  <h2 className="text-xl font-semibold text-foreground m-0">Submission Failed ❌</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    {errorMessage}
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Alternative:</strong> Send your deletion request directly via email:
                    </p>
                    <a 
                      href="mailto:support@instacrew.co.uk?subject=Account Deletion Request&body=Email: [Your Email]%0D%0AReason: [Your Reason]%0D%0AAdditional Info: [Optional Details]"
                      className="text-primary hover:underline font-medium"
                    >
                      📧 support@instacrew.co.uk
                    </a>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4"
                  >
                    Try Again
                  </Button>
                </div>
              </motion.div>
            )}

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
                accordance with UK GDPR. You will receive a confirmation email once your account has been deleted.
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
            {submitStatus !== 'success' && (
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
                      disabled={isSubmitting}
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
                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a reason...</option>
                      <option value="No longer need the service">No longer need the service</option>
                      <option value="Privacy concerns">Privacy concerns</option>
                      <option value="Found alternative solution">Found alternative solution</option>
                      <option value="Technical issues">Technical issues</option>
                      <option value="Other">Other</option>
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you confirm that you understand this action is permanent 
                      and cannot be reversed. Your account and data will be deleted in accordance with 
                      our Privacy Policy and UK GDPR requirements.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="destructive" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      "Submit Deletion Request"
                    )}
                  </Button>
                </form>
              </motion.div>
            )}

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
                <li>📧 <strong>Email:</strong>{' '}
                  <a href="mailto:support@instacrew.co.uk" className="text-primary hover:underline">
                    support@instacrew.co.uk
                  </a>
                </li>
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
