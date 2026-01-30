import { lazy } from "react";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

// Lazy imports - Main pages
const BusinessOwners = lazy(() => import("@/pages/BusinessOwners"));
const CrewMembers = lazy(() => import("@/pages/CrewMembers"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const OnboardingBusiness = lazy(() => import("@/pages/OnboardingBusiness"));
const OnboardingCrew = lazy(() => import("@/pages/OnboardingCrew"));
const HelpCenter = lazy(() => import("@/pages/HelpCenter"));

// Lazy imports - Legal pages (NEW LOCATION)
const PrivacyPolicy = lazy(() => import("@/pages/legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/legal/TermsAndConditions"));
const CookiePolicy = lazy(() => import("@/pages/legal/CookiePolicy"));
const GDPR = lazy(() => import("@/pages/legal/GDPR"));
const AccountDeletion = lazy(() => import("@/pages/legal/AccountDeletion"));

export const routes = [
  {
    path: "/",
    element: <Index />,
    title: "Home",
  },
  {
    path: "/business",
    element: <BusinessOwners />,
    title: "For Business Owners",
  },
  {
    path: "/crew",
    element: <CrewMembers />,
    title: "For Crew Members",
  },
  {
    path: "/pricing",
    element: <Pricing />,
    title: "Pricing",
  },
  {
    path: "/onboarding/business",
    element: <OnboardingBusiness />,
    title: "Business Onboarding",
  },
  {
    path: "/onboarding/crew",
    element: <OnboardingCrew />,
    title: "Crew Onboarding",
  },
  // Legal pages - now pointing to new legal/ folder
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
    title: "Privacy Policy",
  },
  {
    path: "/terms",
    element: <TermsAndConditions />,
    title: "Terms & Conditions",
  },
  {
    path: "/cookies",
    element: <CookiePolicy />,
    title: "Cookie Policy",
  },
  {
    path: "/gdpr",
    element: <GDPR />,
    title: "GDPR & Data Protection",
  },
  {
    path: "/account-deletion", // ✨ NEW
    element: <AccountDeletion />,
    title: "Account Deletion Request",
  },
  // Support & Resources
  {
    path: "/help",
    element: <HelpCenter />,
    title: "Help Center",
  },
  // 404 - Must be last
  {
    path: "*",
    element: <NotFound />,
    title: "Page Not Found",
  },
];
