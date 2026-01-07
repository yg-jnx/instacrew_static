import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center shadow-glow md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Ready to transform your staffing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Join thousands of businesses and crew members already using InstaCrew. 
            Start your 14-day free trial today—no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="min-w-[200px] gap-2 bg-white text-primary hover:bg-white/90"
            >
              <Link to="/signup">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[200px] border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/business">Learn more for business</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
