import { stats, trustBadges } from "@/data/mockData";
import { Shield, Lock, CheckCircle } from "lucide-react";

export function Stats() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-foreground md:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-secondary/20 py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
