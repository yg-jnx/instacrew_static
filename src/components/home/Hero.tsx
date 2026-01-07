import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/mockData";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-28 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Rotating headline */}
          <div className="relative h-[120px] md:h-[100px]">
            {heroContent.headlines.map((headline, index) => (
              <h1
                key={index}
                className={`absolute inset-0 text-4xl font-bold tracking-tight text-foreground transition-all duration-500 md:text-5xl lg:text-6xl ${
                  index === currentIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {headline}
              </h1>
            ))}
          </div>

          {/* Rotating tagline */}
          <div className="relative mt-6 h-[60px] md:h-[40px]">
            {heroContent.taglines.map((tagline, index) => (
              <p
                key={index}
                className={`absolute inset-0 text-lg text-muted-foreground transition-all duration-500 md:text-xl ${
                  index === currentIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {tagline}
              </p>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {heroContent.headlines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Show headline ${index + 1}`}
              />
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="min-w-[200px] gap-2 shadow-glow">
              <Link to="/signup">
                Start 14-day free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[200px] gap-2">
              <Link to="#how-it-works">
                <Play className="h-4 w-4" />
                See how it works
              </Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        {/* Hero visual placeholder */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg">
            <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-muted">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Platform Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
