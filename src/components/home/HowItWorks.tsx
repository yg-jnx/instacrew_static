import { useState } from "react";
import { howItWorks } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, User } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary/30 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How InstaCrew works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're hiring or looking for work, getting started is simple.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="business" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Business Owners
              </TabsTrigger>
              <TabsTrigger value="crew" className="gap-2">
                <User className="h-4 w-4" />
                Crew Members
              </TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="mt-12">
              <div className="grid gap-8 md:grid-cols-3">
                {howItWorks.business.map((step, index) => (
                  <div key={index} className="relative text-center">
                    {/* Connector line */}
                    {index < howItWorks.business.length - 1 && (
                      <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-border md:block" />
                    )}
                    
                    <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-glow">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="crew" className="mt-12">
              <div className="grid gap-8 md:grid-cols-3">
                {howItWorks.crew.map((step, index) => (
                  <div key={index} className="relative text-center">
                    {/* Connector line */}
                    {index < howItWorks.crew.length - 1 && (
                      <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-border md:block" />
                    )}
                    
                    <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-accent-foreground shadow-accent-glow">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
