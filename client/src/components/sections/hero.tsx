export function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Productivity Tools
          </span><br />
          <span className="text-foreground">Made Simple</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Essential online tools for time management, sleep optimization, and website monitoring. Fast, free, and mobile-friendly.
        </p>
      </div>
    </section>
  );
}
