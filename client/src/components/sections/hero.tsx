import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Free Online Tools & Calculators
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Professional productivity tools, calculators, and utilities - all completely free. 
          World clock with 70+ timezones, Pomodoro timer, sleep calculator, and more.
        </p>
        
        {/* Quick Stats */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Free Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">70+</div>
            <div className="text-sm text-muted-foreground">Timezones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search for a tool or calculator..." 
              className="pl-10 h-12 text-base"
              data-testid="input-search-tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
