import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { Target, Users, Shield, TrendingUp, Lightbulb, Heart } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Lightbulb,
      title: "AI-Powered Intelligence",
      description: "Smart calculators that provide automated insights and personalized recommendations for better decision-making."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays in your browser. We don't collect, store, or share your personal calculations or information."
    },
    {
      icon: TrendingUp,
      title: "Financial & Health Focus",
      description: "Specialized tools for financial planning, health tracking, and wellness optimization backed by proven formulas."
    },
    {
      icon: Heart,
      title: "Always Free",
      description: "All 35+ calculators and tools are completely free to use. No hidden fees, no premium tiers, no restrictions."
    }
  ];

  const team = [
    {
      role: "Mission",
      description: "Empower individuals with AI-powered tools for smarter financial planning and health tracking. We believe everyone deserves access to intelligent decision-making resources."
    },
    {
      role: "Vision",
      description: "Become the leading platform for AI-assisted financial and health calculations, making complex data analysis accessible to everyone worldwide."
    },
    {
      role: "Values",
      description: "Accuracy, accessibility, privacy, and user empowerment guide everything we build. We're committed to maintaining free access while delivering professional-grade tools."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - QuickToolAI | Our Mission & Story</title>
        <meta name="description" content="Learn about QuickToolAI's mission to provide free AI-powered financial and health calculators. Discover our commitment to privacy, accuracy, and accessible intelligent tools for everyone." />
        <meta name="keywords" content="QuickToolAI, about us, mission, financial calculators, health tools, AI-powered, free tools, privacy-first" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/about`} />
        <meta property="og:title" content="About Us - QuickToolAI" />
        <meta property="og:description" content="Empowering individuals with free AI-powered financial and health tools. Learn about our mission and commitment to intelligent decision-making." />
        <meta property="og:site_name" content="QuickToolAI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - QuickToolAI" />
        <meta name="twitter:description" content="Empowering individuals with free AI-powered financial and health tools." />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${window.location.origin}/about`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Top Ad */}
          <AdSensePlaceholder slot="about-top" format="rectangle" />
          
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empowering Smarter Decisions with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              QuickToolAI is your trusted platform for intelligent financial planning and health tracking. 
              We combine cutting-edge AI technology with proven formulas to deliver powerful, free tools that help you make better decisions.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-16 glass-card neomorphic rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-4">
                QuickToolAI was founded on a simple belief: everyone deserves access to intelligent tools that make complex calculations easy. 
                In today's fast-paced world, making informed decisions about finances and health shouldn't require expensive software or professional consultants.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've built a comprehensive suite of 35+ AI-powered calculators spanning financial planning, health metrics, unit conversions, 
                time management, and productivity tools. Each calculator is designed with user experience in mind—simple to use, yet powerful enough 
                to provide professional-grade results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform serves students planning their budgets, professionals optimizing their health, families calculating mortgages, 
                and anyone seeking quick, accurate calculations. We're proud to have helped millions make smarter decisions with our free, 
                privacy-focused tools.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((item, index) => (
                <div key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.role}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose QuickToolAI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="glass-card p-6 flex gap-4 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platform Overview */}
          <div className="mb-16 glass-card neomorphic rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Platform</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Financial Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Loan & Mortgage Calculators with EMI analysis</li>
                  <li>• Interest & Profit Calculators for investments</li>
                  <li>• Percentage, Discount & Tip Calculators</li>
                  <li>• Currency Converter with live exchange rates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Health & Fitness</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• BMI, BMR & Body Fat Calculators</li>
                  <li>• Calorie & Nutrition Planning Tools</li>
                  <li>• Pregnancy & Sleep Cycle Calculators</li>
                  <li>• Personalized health recommendations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Conversion & Math</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unit Converter (9 categories, 60+ units)</li>
                  <li>• Scientific & Fraction Calculators</li>
                  <li>• Area, Volume & Speed Calculators</li>
                  <li>• Ratio, Average & Random Number Tools</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Productivity Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• World Clock & Time Zone Converter</li>
                  <li>• Age, Date & Countdown Calculators</li>
                  <li>• Website Status Checker & IP Lookup</li>
                  <li>• QR Generator & Online Notepad</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commitment to Users */}
          <div className="mb-16 glass-card neomorphic rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Accuracy & Reliability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every calculator uses industry-standard formulas and is rigorously tested for accuracy. We regularly update our tools 
                  to reflect the latest methodologies and best practices in finance, health, and mathematics.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Privacy & Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your calculations are processed locally in your browser. We don't collect, store, or share your personal data. 
                  Your financial and health information remains completely private and secure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're constantly adding new features, tools, and AI-powered insights based on user feedback. Our platform evolves 
                  to meet your changing needs while maintaining simplicity and ease of use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Free Forever</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe financial planning and health tracking tools should be accessible to everyone. That's why all our 
                  calculators are free to use with no limitations, premium tiers, or hidden costs.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center glass-card neomorphic rounded-2xl p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <h2 className="text-2xl font-bold mb-4">Ready to Make Smarter Decisions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join millions of users who trust QuickToolAI for their daily calculations. 
              Explore our comprehensive suite of AI-powered tools and start making better financial and health decisions today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                data-testid="button-explore-tools"
              >
                Explore All Tools
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                data-testid="button-contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Bottom Ad */}
          <AdSensePlaceholder slot="about-bottom" format="responsive" />
        </main>

        <Footer />
      </div>
    </>
  );
}
