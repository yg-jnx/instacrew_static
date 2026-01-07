// Mock data for InstaCrew website

export const heroContent = {
  headlines: [
    "Fill open shifts fast with verified local crew.",
    "Post shifts, screen applicants, hire in hours—not days.",
    "One platform for shifts, verification, and time tracking.",
  ],
  taglines: [
    "Staffing that moves at shift speed.",
    "Verified people. Clear shifts. Faster hiring.",
    "Real-time hiring for real-world teams.",
  ],
  ctas: [
    { text: "Start 14-day free trial", href: "/signup", variant: "primary" as const },
    { text: "Create a verified crew profile", href: "/signup/crew", variant: "secondary" as const },
    { text: "See how InstaCrew works", href: "#how-it-works", variant: "outline" as const },
  ],
};

export const features = [
  {
    icon: "Zap",
    title: "Instant Shift Posting",
    description: "Create and publish shifts in under 2 minutes. Set requirements, pay rates, and location—done.",
  },
  {
    icon: "Shield",
    title: "Verified Crew Profiles",
    description: "Every crew member submits ID, right-to-work docs, and qualifications for your peace of mind.",
  },
  {
    icon: "Clock",
    title: "Real-Time Clock In/Out",
    description: "GPS-verified time tracking with automatic timesheets. No more guesswork or manual entry.",
  },
  {
    icon: "Users",
    title: "Smart Applicant Matching",
    description: "Filter by skills, ratings, and availability. Review profiles and hire the right person fast.",
  },
  {
    icon: "Bell",
    title: "Push Notifications",
    description: "Instant alerts for applications, assignments, and shift changes. Never miss an update.",
  },
  {
    icon: "Star",
    title: "Two-Way Ratings",
    description: "Build trust with mutual reviews after every shift. Quality rises to the top.",
  },
];

export const howItWorks = {
  business: [
    {
      step: 1,
      title: "Post Your Shift",
      description: "Describe the role, set the time, location, and pay rate. Add any special requirements.",
    },
    {
      step: 2,
      title: "Review Applicants",
      description: "Browse verified profiles, check ratings and experience. Assign the best fit in seconds.",
    },
    {
      step: 3,
      title: "Track & Pay",
      description: "Monitor clock-ins, approve hours, and manage payments—all from one dashboard.",
    },
  ],
  crew: [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Upload your ID, qualifications, and work history. Get verified once, apply everywhere.",
    },
    {
      step: 2,
      title: "Browse & Apply",
      description: "Find shifts that match your schedule and skills. One-tap applications with instant status.",
    },
    {
      step: 3,
      title: "Work & Get Paid",
      description: "Clock in/out with GPS verification. Track your earnings and build your reputation.",
    },
  ],
};

export const testimonials = [
  {
    quote: "InstaCrew cut our time-to-hire from 3 days to 3 hours. We filled 15 weekend shifts in one afternoon.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "The Grand Hotel",
    avatar: "SC",
  },
  {
    quote: "Finally, an app that treats crew with respect. Verification was quick, and I always know what I'm walking into.",
    author: "Marcus Johnson",
    role: "Event Staff",
    company: "Freelance Crew",
    avatar: "MJ",
  },
  {
    quote: "The clock in/out feature alone saves us 5+ hours of admin work every week. No more timesheet disputes.",
    author: "Elena Rodriguez",
    role: "Restaurant Owner",
    company: "Cocina Fresca",
    avatar: "ER",
  },
  {
    quote: "I picked up 12 shifts last month—all flexible, all paid on time. Best side gig platform I've used.",
    author: "James Okonkwo",
    role: "Hospitality Professional",
    company: "Verified Crew Member",
    avatar: "JO",
  },
];

export const stats = [
  { value: "50K+", label: "Verified Crew Members" },
  { value: "12K+", label: "Active Businesses" },
  { value: "98%", label: "Shift Fill Rate" },
  { value: "<3hrs", label: "Avg. Time to Hire" },
];

export const trustBadges = [
  "256-bit SSL Encryption",
  "GDPR Compliant",
  "PCI DSS via Stripe",
  "SOC 2 Type II",
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small businesses getting started",
    monthlyPrice: 49,
    sixMonthPrice: 39,
    features: [
      "Up to 20 shifts/month",
      "5 team members",
      "Basic applicant filtering",
      "Clock in/out tracking",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing teams with regular shifts",
    monthlyPrice: 129,
    sixMonthPrice: 99,
    features: [
      "Unlimited shifts",
      "25 team members",
      "Advanced filtering & matching",
      "Priority applicant access",
      "Multi-location support",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: null,
    sixMonthPrice: null,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Custom reporting",
      "On-site training",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export const faqCategories = {
  account: [
    {
      q: "How do I create a business owner account?",
      a: "Click 'Start free trial' and select 'Business Owner'. You'll need your business details and a valid email. Verification typically takes 24-48 hours.",
    },
    {
      q: "How do I create a crew member account?",
      a: "Select 'Create a verified crew profile' and follow the steps to upload your ID, right-to-work documents, and any relevant qualifications.",
    },
    {
      q: "Can I use InstaCrew on multiple devices?",
      a: "Yes! Your account syncs across all devices. Log in on web, iOS, or Android and pick up where you left off.",
    },
    {
      q: "How do I reset my password?",
      a: "Click 'Forgot password' on the login page. We'll send a secure reset link to your registered email address.",
    },
    {
      q: "How do I update my profile information?",
      a: "Go to Settings > Profile to update your details. Some changes (like legal documents) may require re-verification.",
    },
    {
      q: "Can I switch between business and crew accounts?",
      a: "You'll need separate accounts for each role to maintain verification integrity. Use different email addresses.",
    },
  ],
  postingShifts: [
    {
      q: "How do I post a new shift?",
      a: "From your dashboard, click 'Post Shift'. Fill in the role, date/time, location, pay rate, and any requirements. Preview and publish.",
    },
    {
      q: "Can I edit a shift after posting?",
      a: "Yes, you can edit shift details until someone is assigned. After assignment, only certain fields can be modified.",
    },
    {
      q: "How do I cancel a shift?",
      a: "Open the shift and click 'Cancel Shift'. If crew are already assigned, they'll be notified automatically.",
    },
    {
      q: "What information should I include in a shift posting?",
      a: "Include role title, detailed description, required skills/certifications, dress code, location (with parking info), and accurate pay rate.",
    },
    {
      q: "How far in advance can I post shifts?",
      a: "You can post shifts up to 90 days in advance. For recurring shifts, use our repeat scheduling feature.",
    },
    {
      q: "Can I require specific qualifications for a shift?",
      a: "Yes! Set required certifications, experience levels, or ratings when posting. Only qualified crew can apply.",
    },
  ],
  applying: [
    {
      q: "How do I find and apply for shifts?",
      a: "Browse available shifts in the 'Find Work' tab. Filter by location, pay, and type. Tap 'Apply' on any shift you want.",
    },
    {
      q: "Can I withdraw my application?",
      a: "Yes, you can withdraw applications before being assigned. Once assigned, withdrawals follow our 5-hour rule.",
    },
    {
      q: "What happens after I apply?",
      a: "The business reviews your profile and either accepts or declines. You'll receive push notifications for all updates.",
    },
    {
      q: "Why was my application declined?",
      a: "Common reasons include: another applicant was selected, missing qualifications, or schedule conflicts. Keep applying!",
    },
    {
      q: "How can I improve my chances of getting hired?",
      a: "Complete your profile, maintain high ratings, respond quickly to assignments, and build experience across shift types.",
    },
    {
      q: "Can I apply for multiple shifts at once?",
      a: "Yes, but be mindful of scheduling conflicts. The app warns you about overlapping applications.",
    },
  ],
  payments: [
    {
      q: "How do payments work?",
      a: "Businesses pay through Stripe. Crew members receive payments to their linked bank account after shift completion and approval.",
    },
    {
      q: "When will I get paid for a shift?",
      a: "Payments are processed within 2-3 business days after the business approves your timesheet.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards, bank transfers, and digital wallets through our secure Stripe integration.",
    },
    {
      q: "How do I view my payment history?",
      a: "Go to 'Earnings' in your dashboard to see all past payments, pending amounts, and download statements.",
    },
    {
      q: "Are there any fees for crew members?",
      a: "InstaCrew is free for crew members. You receive 100% of your agreed shift rate.",
    },
    {
      q: "How do I dispute a payment issue?",
      a: "Open the shift in your history and click 'Raise Dispute'. Our team reviews within 48 hours.",
    },
  ],
  verification: [
    {
      q: "What documents do I need for verification?",
      a: "Crew: Government ID, right-to-work proof, and any role-specific certifications. Business: Business registration and ownership verification.",
    },
    {
      q: "How long does verification take?",
      a: "Most verifications complete within 24-48 hours. Complex cases may take up to 5 business days.",
    },
    {
      q: "Why was my verification rejected?",
      a: "Common reasons: blurry documents, expired IDs, or mismatched information. You can resubmit with correct documents.",
    },
    {
      q: "Do I need to re-verify my documents?",
      a: "Yes, when documents expire (e.g., ID, certifications) you'll be prompted to upload current versions.",
    },
    {
      q: "Is my personal data secure?",
      a: "Absolutely. Documents are encrypted, stored securely, and only accessed for verification. See our Privacy Policy.",
    },
    {
      q: "Can I work while my verification is pending?",
      a: "No, you must be fully verified before applying to shifts. This protects both you and businesses.",
    },
  ],
  disputes: [
    {
      q: "How do I raise a dispute?",
      a: "Open the relevant shift and click 'Raise Dispute'. Describe the issue clearly and attach any evidence.",
    },
    {
      q: "What can I dispute?",
      a: "Payment discrepancies, unfair ratings, no-shows, workplace issues, or any violation of our terms.",
    },
    {
      q: "How long do dispute resolutions take?",
      a: "We aim to resolve disputes within 48-72 hours. Complex cases may require additional investigation.",
    },
    {
      q: "What happens during a dispute investigation?",
      a: "Both parties submit their account. Our team reviews evidence and may contact either party for clarification.",
    },
    {
      q: "Can I appeal a dispute decision?",
      a: "Yes, you have 7 days to appeal with new evidence. Final decisions are binding.",
    },
    {
      q: "Will disputes affect my account standing?",
      a: "Frivolous disputes may impact your reputation. Legitimate concerns are encouraged and won't harm you.",
    },
  ],
  troubleshooting: [
    {
      q: "I can't log into my account. What should I do?",
      a: "Try resetting your password. If issues persist, clear your browser cache or reinstall the app. Contact support if needed.",
    },
    {
      q: "Push notifications aren't working.",
      a: "Check your device settings to ensure InstaCrew notifications are enabled. Also check in-app notification preferences.",
    },
    {
      q: "GPS clock-in isn't working.",
      a: "Ensure location permissions are enabled for InstaCrew. Stand in an open area for better GPS signal.",
    },
    {
      q: "The app is running slowly.",
      a: "Update to the latest version, clear cache, or restart your device. Ensure stable internet connection.",
    },
    {
      q: "I can't upload documents.",
      a: "Ensure files are under 10MB and in supported formats (PDF, JPG, PNG). Try a different browser if on web.",
    },
    {
      q: "My shift isn't appearing on the dashboard.",
      a: "Refresh the page or pull down to refresh on mobile. Check your filters aren't hiding the shift.",
    },
  ],
};
