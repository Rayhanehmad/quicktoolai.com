export function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Free Online Clock
          </span><br />
          <span className="text-foreground">& Productivity Tools</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          World clock with multiple timezones, Pomodoro timer online, bedtime calculator for optimal sleep cycles, and website uptime checker. Fast, free, and mobile-friendly.
        </p>
      </div>
    </section>
  );
}
