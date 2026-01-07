import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, User, ArrowRight } from "lucide-react";

export function ValueProps() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Business Owners */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-soft-lg md:p-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Briefcase className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">For Business Owners</h3>
              
              <p className="mt-4 text-muted-foreground">
                InstaCrew helps business owners post shifts in minutes, review applicants, assign the right people, 
                and manage the full shift lifecycle—from clock-in/out to disputes—without juggling spreadsheets, 
                calls, and no-shows. Business accounts start with a 14-day free trial, with Stripe checkout, 
                invoices, and a customer portal for simple subscription management.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Post shifts in under 2 minutes",
                  "Screen verified applicants instantly",
                  "GPS-verified time tracking",
                  "Automatic invoicing and payments",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 gap-2">
                <Link to="/business">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Crew Members */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-soft-lg md:p-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <User className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">For Crew Members</h3>
              
              <p className="mt-4 text-muted-foreground">
                InstaCrew helps crew members find shifts that fit their schedule, apply quickly, and show up with 
                confidence through profile and document verification. Real-time push notifications keep crew updated 
                on applications, assignments, and shift changes so they don't miss work opportunities.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Find shifts near you instantly",
                  "One-tap applications",
                  "Build your verified reputation",
                  "Track earnings and get paid on time",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="mt-8 gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/crew">
                  Create your profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
