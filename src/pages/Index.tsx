import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ValueProps } from "@/components/home/ValueProps";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Stats, TrustBadges } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <ValueProps />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
