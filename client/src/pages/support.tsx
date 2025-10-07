import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { LifeBuoy, HelpCircle, BookOpen, Video, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I use the calculators?",
      answer: "Simply enter your values in the input fields and the calculator will automatically compute the results. Most calculators provide step-by-step explanations and formulas."
    },
    {
      question: "Are the calculations accurate?",
      answer: "We use industry-standard formulas and regularly test our calculators for accuracy. However, for critical decisions, we recommend verifying results with professionals in the relevant field."
    },
    {
      question: "Do you store my data?",
      answer: "Most calculations are performed locally in your browser and are not transmitted to our servers. Some features like favorites and notepad use browser local storage and remain on your device."
    },
    {
      question: "Can I use these tools for free?",
      answer: "Yes! All our calculators and tools are completely free to use. There are no hidden fees or premium features."
    },
    {
      question: "How do I save my favorite tools?",
      answer: "Click the star icon next to any tool to add it to your favorites. Your favorites are saved in your browser and accessible from the favorites panel."
    },
    {
      question: "Can I use these tools offline?",
      answer: "Our website supports Progressive Web App (PWA) features. Once loaded, many tools will work offline. You can also install the app on your device for quick access."
    },
    {
      question: "Are these tools mobile-friendly?",
      answer: "Yes! All our calculators and tools are fully responsive and optimized for mobile devices, tablets, and desktop computers."
    },
    {
      question: "How often are currency rates updated?",
      answer: "Currency exchange rates are updated daily from reliable sources. The last update time is displayed on the currency converter."
    },
  ];

  const guides = [
    {
      title: "Getting Started Guide",
      description: "Learn how to navigate and use QuickToolAI effectively",
      icon: BookOpen,
      link: "#"
    },
    {
      title: "Calculator Tutorials",
      description: "Step-by-step guides for each calculator and tool",
      icon: Video,
      link: "#"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      icon: HelpCircle,
      link: "#"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Support - QuickToolAI</title>
        <meta name="description" content="Get help with QuickToolAI calculators and tools. Browse FAQs, guides, and get support for our AI-powered financial and health tools." />
        <link rel="canonical" href={`${window.location.origin}/support`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Top Ad */}
          <AdSensePlaceholder slot="support-top" format="rectangle" />
          
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LifeBuoy className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold">Support Center</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Find answers, guides, and get the help you need
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {guide.description}
                  </p>
                  <a 
                    href={guide.link} 
                    className="text-primary hover:underline text-sm font-medium"
                    data-testid={`link-guide-${index}`}
                  >
                    Read More →
                  </a>
                </div>
              );
            })}
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Tools</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: 'Percentage Calculator', path: '/percentage' },
                { name: 'BMI Calculator', path: '/bmi-calc' },
                { name: 'Loan Calculator', path: '/loan' },
                { name: 'Currency Converter', path: '/currency' },
                { name: 'Unit Converter', path: '/unit' },
                { name: 'Age Calculator', path: '/age-calc' },
                { name: 'Date Calculator', path: '/date' },
                { name: 'GPA Calculator', path: '/gpa' },
              ].map((tool, index) => (
                <Link 
                  key={index} 
                  href={tool.path}
                  className="glass-card p-4 text-center hover:bg-primary/5 transition-colors cursor-pointer block" 
                  data-testid={`link-tool-${index}`}
                >
                  <p className="font-medium text-sm">{tool.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="glass-card p-8 bg-primary/5 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help. 
              Send us a message and we'll get back to you as soon as possible.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              data-testid="button-contact-support"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Support
            </Link>
          </div>

          {/* Tips Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-3">💡 Pro Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use the search bar to quickly find any tool</li>
                  <li>• Add frequently used tools to favorites for quick access</li>
                  <li>• Enable dark mode for comfortable nighttime use</li>
                  <li>• Share calculation results directly to social media</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-3">🔧 Troubleshooting</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear browser cache if tools aren't loading properly</li>
                  <li>• Ensure JavaScript is enabled in your browser</li>
                  <li>• Try a different browser if issues persist</li>
                  <li>• Check your internet connection for live data tools</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Ad */}
          <AdSensePlaceholder slot="support-bottom" format="responsive" />
        </main>

        <Footer />
      </div>
    </>
  );
}
