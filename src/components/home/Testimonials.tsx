import { useState } from "react";
import { testimonials } from "@/data/mockData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by businesses and crew
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our community has to say about InstaCrew.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Desktop: Grid view */}
          <div className="hidden gap-6 md:grid md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="text-foreground">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel view */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <Quote className="mb-4 h-8 w-8 text-primary/20" />
                      <p className="text-foreground">{testimonial.quote}</p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
