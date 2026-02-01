// Approved data for InstaCrew website

export const heroContent = {
  headlines: [
    "Fill open shifts fast with verified local crew.",
    "Post shifts, screen applicants, hire in hours, not days.",
    "One platform for shifts, verification, and scheduling.",
  ],
  taglines: [
    "Staffing that moves at shift speed.",
    "Verified people. Clear shifts. Faster hiring.",
    "Real-time hiring for real-world teams.",
  ],
  ctas: [
    { text: "Start 30-day free trial", href: "/signup", variant: "primary" as const },
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
  {
    icon: "MapPin",
    title: "Location-Based Search",
    description: "Find crew near your business or discover shifts in your area. Distance matters.",
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
      title: "Manage & Communicate",
      description: "Coordinate with crew, handle changes, and leave ratings after shift completion.",
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
      title: "Work & Build Reputation",
      description: "Complete shifts, earn ratings, and grow your profile. Build your reputation over time.",
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
    quote: "The platform is intuitive and the verification process gives me confidence in who I'm hiring.",
    author: "Elena Rodriguez",
    role: "Restaurant Owner",
    company: "Cocina Fresca",
    avatar: "ER",
  },
  {
    quote: "I picked up 12 shifts last month—all flexible, all clearly described. Best platform I've used.",
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
  "Right-to-Work Verified",
  "Secure Document Storage",
];

export const pricingPlans = [
  {
    name: "Free Trial",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    sixMonthPrice: 0,
    duration: "30 days",
    features: [
      "Unlimited shifts",
      "Full crew management",
      "Complete platform access",
      "Profile verification",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Monthly",
    description: "Pay month-to-month with flexibility",
    monthlyPrice: 19.99,
    sixMonthPrice: null,
    duration: "per month",
    features: [
      "Unlimited shift posts",
      "Unlimited crew applications",
      "Advanced filtering & search",
      "Two-way ratings system",
      "Push notifications",
      "Priority support",
      "Cancel anytime",
    ],
    cta: "Subscribe monthly",
    popular: false,
  },
  {
    name: "6-Month Plan",
    description: "Best value for committed businesses",
    monthlyPrice: 19.99,
    sixMonthPrice: 99.99,
    duration: "billed every 6 months",
    features: [
      "Everything in Monthly",
      "17% cost savings",
      "Priority customer support",
      "Early access to new features",
      "Shift analytics dashboard",
      "Bulk shift posting",
    ],
    cta: "Subscribe 6-month",
    popular: true,
  },
];

// FAQ Data Structure
interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'business' | 'crew' | 'subscription' | 'account';
}

export const FAQ_DATA: FAQItem[] = [
  // General
  {
    question: 'What is InstaCrew?',
    answer: 'InstaCrew is a platform that connects businesses with skilled crew members for temporary shifts in hospitality, retail, and service industries. Businesses can post shifts and crew members can browse and apply for work that matches their skills.',
    category: 'general',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can email us at support@instacrew.co.uk and our team will get back to you within 24 hours. For urgent issues, please mention "URGENT" in your subject line.',
    category: 'general',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security seriously. All sensitive information is encrypted, and we comply with UK GDPR regulations. We never store sensitive personal information beyond what\'s necessary for verification.',
    category: 'general',
  },

  // Business Owner FAQs
  {
    question: 'How does the free trial work?',
    answer: 'New business accounts get 30 days of free access to all premium features. You can post unlimited shifts, manage crew, and access all platform features. No credit card required to start the trial.',
    category: 'business',
  },
  {
    question: 'How do I post a shift?',
    answer: 'After completing your business profile, tap the "+" button on the dashboard or go to "Shifts" tab. Fill in shift details including role, date, time, location, and pay rate. Once posted, crew members can browse and apply.',
    category: 'business',
  },
  {
    question: 'How do I pay crew members?',
    answer: 'InstaCrew does not process payments between businesses and crew. You arrange payment directly with crew members (bank transfer, cash, etc.). The pay rate shown on shifts is for crew information only.',
    category: 'business',
  },
  {
    question: 'Can I cancel a shift after posting?',
    answer: 'Yes, you can cancel shifts from the shift details page. If crew members have already applied or been accepted, they will be notified of the cancellation. Please cancel as early as possible to respect crew members\' time.',
    category: 'business',
  },
  {
    question: 'How do I manage my crew applications?',
    answer: 'Go to your shift details to see all applicants. You can view their profiles, ratings, experience, and documents. Accept or reject applications with one tap.',
    category: 'business',
  },

  // Crew Member FAQs
  {
    question: 'How do I find shifts?',
    answer: 'After completing your crew profile and verification, go to the "Browse" tab to see available shifts near you. Use filters to search by role, location, pay rate, and date.',
    category: 'crew',
  },
  {
    question: 'How do I apply for a shift?',
    answer: 'Open any shift from the browse page, review the details, and tap "Apply Now". The business will review your profile and either accept or decline your application. You\'ll receive a notification either way.',
    category: 'crew',
  },
  {
    question: 'What documents do I need to work?',
    answer: 'UK crew members need proof of Right to Work (passport, BRP, or share code). You may also need to upload a profile photo and other documents depending on the role. All documents are verified before you can apply for shifts.',
    category: 'crew',
  },
  {
    question: 'How do I get paid for shifts?',
    answer: 'Payment is arranged directly between you and the business. InstaCrew does not process payments. Discuss payment method (bank transfer, cash, etc.) with the business before starting the shift.',
    category: 'crew',
  },
  {
    question: 'Can I cancel a shift after being accepted?',
    answer: 'Yes, but please cancel as early as possible from "My Shifts" tab. Frequent cancellations may affect your reliability rating and future applications.',
    category: 'crew',
  },
  {
    question: 'How do ratings work?',
    answer: 'After completing a shift, businesses can rate your performance. Your overall rating is visible to other businesses and helps build your reputation. Similarly, you can rate businesses on reliability, communication, and payment accuracy.',
    category: 'crew',
  },

  // Subscription FAQs
  {
    question: 'What subscription plans are available?',
    answer: 'We offer Monthly (£29.99/month) and 6-Month (£149.99/6 months) plans for businesses. Both include unlimited shift posts, crew management, and full platform access. Crew accounts are always free.',
    category: 'subscription',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel anytime from Manage Subscription. You\'ll keep access until the end of your current billing period. No refunds for partial months.',
    category: 'subscription',
  },
  {
    question: 'What happens after my trial ends?',
    answer: 'After your 30-day trial, you\'ll need to subscribe to continue posting shifts. Your existing shifts and crew data will be saved. You can choose Monthly or 6-Month plans.',
    category: 'subscription',
  },
  {
    question: 'How do I update my payment method?',
    answer: 'Go to Profile > Manage Subscription > Payment Method. You\'ll be redirected to our secure payment portal where you can update your card details.',
    category: 'subscription',
  },

  // Account FAQs
  {
    question: 'How do I verify my account?',
    answer: 'After signup, complete your profile with required information and documents. For crew accounts, upload Right to Work documents. Verification usually takes 24-48 hours.',
    category: 'account',
  },
  {
    question: 'I forgot my password. What do I do?',
    answer: 'On the login page, tap "Forgot Password?". Enter your email and we\'ll send you a reset link. Check your spam folder if you don\'t see it within a few minutes.',
    category: 'account',
  },
  {
    question: 'Can I have both Business and Crew accounts?',
    answer: 'No, each email can only be registered as either a Business or Crew account. If you need both, please use different email addresses.',
    category: 'account',
  },
  {
    question: 'How do I delete my account?',
    answer: 'Please email support@instacrew.co.uk with "Delete Account" in the subject line. We\'ll process your request within 7 days. Note: This action is permanent and cannot be undone.',
    category: 'account',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All', icon: 'Grid' },
  { id: 'general', label: 'General', icon: 'HelpCircle' },
  { id: 'business', label: 'Business', icon: 'Briefcase' },
  { id: 'crew', label: 'Crew', icon: 'Users' },
  { id: 'subscription', label: 'Subscription', icon: 'CreditCard' },
  { id: 'account', label: 'Account', icon: 'User' },
];

// Legacy FAQ structure for backwards compatibility (if needed)
export const faqCategories = {
  general: FAQ_DATA.filter(faq => faq.category === 'general').map(faq => ({ q: faq.question, a: faq.answer })),
  business: FAQ_DATA.filter(faq => faq.category === 'business').map(faq => ({ q: faq.question, a: faq.answer })),
  crew: FAQ_DATA.filter(faq => faq.category === 'crew').map(faq => ({ q: faq.question, a: faq.answer })),
  subscription: FAQ_DATA.filter(faq => faq.category === 'subscription').map(faq => ({ q: faq.question, a: faq.answer })),
  account: FAQ_DATA.filter(faq => faq.category === 'account').map(faq => ({ q: faq.question, a: faq.answer })),
};
