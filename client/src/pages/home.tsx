import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AIChatbot } from "@/components/ai-chatbot";
import { Button } from "@/components/ui/button";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { Calculator, TrendingUp, Repeat, Heart, Ruler, Clock, Wrench, GraduationCap, ArrowRight } from "lucide-react";

const tools = [
  // Financial
  { id: 'percentage', name: 'Percentage Calculator', description: 'Calculate percentages, increase/decrease, and percent differences', category: 'Financial', icon: '💰', path: '/percentage' },
  { id: 'loan', name: 'Loan Calculator', description: 'Calculate monthly payments and total interest for loans', category: 'Financial', icon: '🏦', path: '/loan' },
  { id: 'mortgage', name: 'Mortgage Calculator', description: 'Estimate home loan payments with taxes and insurance', category: 'Financial', icon: '🏠', path: '/mortgage' },
  { id: 'interest', name: 'Interest Calculator', description: 'Calculate simple and compound interest earnings', category: 'Financial', icon: '📈', path: '/interest' },
  { id: 'discount', name: 'Discount Calculator', description: 'Find sale prices and savings on discounted items', category: 'Financial', icon: '🏷️', path: '/discount' },
  { id: 'tip', name: 'Tip Calculator', description: 'Calculate tips and split bills for dining', category: 'Financial', icon: '🍽️', path: '/tip' },
  { id: 'profit', name: 'Profit Calculator', description: 'Calculate profit margins and markup percentages', category: 'Financial', icon: '💹', path: '/profit' },
  
  // Converters
  { id: 'currency', name: 'Currency Converter', description: 'Convert 150+ world currencies with live rates', category: 'Converters', icon: '💱', path: '/currency' },
  { id: 'unit', name: 'Unit Converter', description: 'Convert units across 9 categories with 60+ units', category: 'Converters', icon: '🔄', path: '/unit' },
  
  // Health & Fitness
  { id: 'bmi-calc', name: 'BMI Calculator', description: 'Calculate Body Mass Index and healthy weight range', category: 'Health', icon: '⚖️', path: '/bmi-calc' },
  { id: 'bmr', name: 'BMR Calculator', description: 'Find your Basal Metabolic Rate and calorie needs', category: 'Health', icon: '🔥', path: '/bmr' },
  { id: 'bodyfat', name: 'Body Fat Calculator', description: 'Estimate body fat percentage from measurements', category: 'Health', icon: '💪', path: '/bodyfat' },
  { id: 'calorie', name: 'Calorie Calculator', description: 'Calculate daily calorie needs for your goals', category: 'Health', icon: '🍎', path: '/calorie' },
  { id: 'pregnancy', name: 'Pregnancy Calculator', description: 'Calculate due date and pregnancy milestones', category: 'Health', icon: '👶', path: '/pregnancy' },
  
  // Math & Science
  { id: 'scientific', name: 'Scientific Calculator', description: 'Advanced calculator with scientific functions', category: 'Math', icon: '🔬', path: '/scientific' },
  { id: 'fraction', name: 'Fraction Calculator', description: 'Add, subtract, multiply, and divide fractions', category: 'Math', icon: '🧮', path: '/fraction' },
  { id: 'ratio', name: 'Ratio Calculator', description: 'Calculate ratios and solve proportions', category: 'Math', icon: '⚖️', path: '/ratio' },
  { id: 'average', name: 'Average Calculator', description: 'Find mean, median, mode, and range', category: 'Math', icon: '📊', path: '/average' },
  { id: 'random', name: 'Random Number', description: 'Generate random numbers in any range', category: 'Math', icon: '🎲', path: '/random' },
  
  // Measurement
  { id: 'area', name: 'Area Calculator', description: 'Calculate area for various geometric shapes', category: 'Measurement', icon: '📐', path: '/area' },
  { id: 'volume', name: 'Volume Calculator', description: 'Calculate volume of 3D shapes', category: 'Measurement', icon: '📦', path: '/volume' },
  { id: 'speed', name: 'Speed Calculator', description: 'Calculate speed, distance, or time', category: 'Measurement', icon: '🚀', path: '/speed' },
  { id: 'energy', name: 'Energy Calculator', description: 'Convert and calculate energy units', category: 'Measurement', icon: '⚡', path: '/energy' },
  
  // Time & Date
  { id: 'clock', name: 'World Clock & Timer', description: 'View time in multiple world time zones', category: 'Time', icon: '🌍', path: '/clock' },
  { id: 'age-calc', name: 'Age Calculator', description: 'Calculate exact age in years, months, and days', category: 'Time', icon: '🎂', path: '/age-calc' },
  { id: 'date', name: 'Date Calculator', description: 'Add/subtract dates and find differences', category: 'Time', icon: '📅', path: '/date' },
  { id: 'time-calc', name: 'Time Calculator', description: 'Add and subtract hours, minutes, seconds', category: 'Time', icon: '⏱️', path: '/time-calc' },
  { id: 'countdown', name: 'Countdown Timer', description: 'Set countdown for events and deadlines', category: 'Time', icon: '⏳', path: '/countdown' },
  { id: 'sleep', name: 'Sleep Calculator', description: 'Optimize sleep cycles for better rest', category: 'Time', icon: '😴', path: '/sleep' },
  
  // Utilities
  { id: 'status', name: 'Website Checker', description: 'Check if websites are online or offline', category: 'Utilities', icon: '🌐', path: '/status' },
  { id: 'ip-lookup', name: 'IP Lookup', description: 'Find your IP address and location', category: 'Utilities', icon: '🔍', path: '/ip-lookup' },
  { id: 'qr-generator', name: 'QR Generator', description: 'Create QR codes for URLs and text', category: 'Utilities', icon: '📱', path: '/qr-generator' },
  { id: 'notepad', name: 'Online Notepad', description: 'Simple text editor with auto-save', category: 'Utilities', icon: '📝', path: '/notepad' },
  
  // Academic & Fun
  { id: 'gpa', name: 'GPA Calculator', description: 'Calculate Grade Point Average for school', category: 'Academic', icon: '🎓', path: '/gpa' },
  { id: 'love', name: 'Love Calculator', description: 'Fun compatibility calculator for couples', category: 'Fun', icon: '❤️', path: '/love' },
];

const categories = [
  { name: 'Financial', icon: TrendingUp, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { name: 'Converters', icon: Repeat, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { name: 'Health', icon: Heart, color: 'text-red-500', bgColor: 'bg-red-500/10' },
  { name: 'Math', icon: Calculator, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { name: 'Measurement', icon: Ruler, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  { name: 'Time', icon: Clock, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10' },
  { name: 'Utilities', icon: Wrench, color: 'text-teal-500', bgColor: 'bg-teal-500/10' },
  { name: 'Academic', icon: GraduationCap, color: 'text-yellow-600', bgColor: 'bg-yellow-600/10' },
  { name: 'Fun', icon: Heart, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const toolsSection = document.getElementById('tools-grid');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredTools = selectedCategory 
    ? tools.filter(tool => tool.category === selectedCategory)
    : tools;

  return (
    <>
      <Helmet>
        <title>AI FinHealth Hub - Smart Financial & Health Calculators | Free AI Tools</title>
        <meta name="description" content="AI-powered financial planning and health tracking tools. Smart calculators for loans, mortgages, BMI, calorie tracking, and more. Free AI-assisted calculations for better financial and health decisions." />
        <meta name="keywords" content="AI calculator, financial planning tools, health metrics calculator, smart finance tools, AI health tracker, BMI calculator, loan calculator, mortgage planner, AI financial advisor, health analytics" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:title" content="AI FinHealth Hub - Smart Financial & Health Calculators" />
        <meta property="og:description" content="AI-powered tools for financial planning and health tracking. Make smarter decisions with intelligent calculators for finance, health, and wellness." />
        <meta property="og:site_name" content="AI FinHealth Hub" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI FinHealth Hub - Smart Financial & Health Calculators" />
        <meta name="twitter:description" content="AI-powered tools for financial planning and health tracking. Make smarter decisions with intelligent calculators." />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              AI + Finance + Health
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Financial & Health Calculators
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered tools for intelligent financial planning, health tracking, and data-driven decisions. 
              Make smarter choices with automated calculations and personalized insights.
            </p>
          </div>
        </section>

        {/* Top Banner Ad */}
        <AdSensePlaceholder slot="home-top-banner" format="horizontal" />

        {/* Categories Overview */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map(({ name, icon: Icon, color, bgColor }) => {
                const count = tools.filter(t => t.category === name).length;
                const isSelected = selectedCategory === name;
                return (
                  <button
                    key={name}
                    onClick={() => handleCategoryClick(name)}
                    className={`${bgColor} ${isSelected ? 'ring-2 ring-primary' : ''} rounded-xl p-4 text-center group hover:scale-105 transition-transform cursor-pointer`}
                    data-testid={`button-category-${name.toLowerCase()}`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
                    <h3 className="font-semibold text-sm">{name}</h3>
                    <p className="text-xs text-muted-foreground">{count} tools</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rectangle Ad */}
        <AdSensePlaceholder slot="home-mid-rectangle" format="rectangle" />

        {/* All Tools Grid */}
        <section id="tools-grid" className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                {selectedCategory ? `${selectedCategory} Tools` : 'All Tools'}
              </h2>
              {selectedCategory && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                  data-testid="button-show-all"
                >
                  Show All Tools
                </Button>
              )}
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map(tool => (
                <Link key={tool.id} href={tool.path} data-testid={`link-tool-${tool.id}`}>
                  <div className="glass-card neomorphic rounded-xl p-6 h-full hover:scale-105 transition-transform cursor-pointer group">
                    <div className="text-4xl mb-3">{tool.icon}</div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Open Tool <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Responsive Ad */}
        <AdSensePlaceholder slot="home-bottom-responsive" format="responsive" />

        <Footer />
        <AIChatbot />
      </div>
    </>
  );
}
