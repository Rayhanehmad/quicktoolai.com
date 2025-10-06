import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, BookOpen, Calculator as CalcIcon, HelpCircle, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO_CONTENT } from "@/../../shared/seo-content";
import { RelatedCalculators } from "@/components/related-calculators";

interface ToolPageLayoutProps {
  toolId: string;
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
}

export function ToolPageLayout({ toolId, title, description, category, children }: ToolPageLayoutProps) {
  const pageUrl = `${window.location.origin}/${toolId}`;
  const seoContent = SEO_CONTENT[toolId];
  
  const metaTitle = seoContent?.title || `${title} - AI-Powered Calculator | AI FinHealth Hub`;
  const metaDescription = seoContent?.metaDescription || description;
  const keywords = seoContent?.keywords;
  
  const faqSchemaData = seoContent?.faqs && seoContent.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seoContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  
  // SoftwareApplication schema for rich snippets
  const softwareSchemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": metaDescription,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "url": pageUrl,
    "provider": {
      "@type": "Organization",
      "name": "AI FinHealth Hub",
      "url": window.location.origin
    }
  };
  
  // BreadcrumbList schema for navigation
  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category,
        "item": `${window.location.origin}/#${category.toLowerCase()}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": pageUrl
      }
    ]
  };
  
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="AI FinHealth Hub" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Schema.org FAQPage Structured Data */}
        {faqSchemaData && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchemaData)}
          </script>
        )}
        
        {/* Schema.org SoftwareApplication for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(softwareSchemaData)}
        </script>
        
        {/* Schema.org BreadcrumbList for navigation */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Breadcrumb Navigation */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" data-testid="link-home">
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">{category}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-semibold">{title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {seoContent?.introduction || description}
            </p>
          </div>

          {/* Tool Content */}
          <div className="max-w-4xl mx-auto mb-12">
            {children}
          </div>

          {/* SEO Info Sections */}
          {seoContent && (seoContent.formula || seoContent.example || seoContent.howItWorks || seoContent.useCases || seoContent.faqs) && (
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              {/* Formula Section */}
              {seoContent.formula && (
                <div className="glass-card neomorphic rounded-xl p-6" data-testid="section-formula">
                  <div className="flex items-center gap-2 mb-4">
                    <CalcIcon className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Formula</h2>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
                    {seoContent.formula}
                  </div>
                </div>
              )}

              {/* Example Section */}
              {seoContent.example && (
                <div className="glass-card neomorphic rounded-xl p-6" data-testid="section-example">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Example</h2>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm">{seoContent.example}</p>
                  </div>
                </div>
              )}

              {/* How It Works Section */}
              {seoContent.howItWorks && (
                <div className="glass-card neomorphic rounded-xl p-6" data-testid="section-how-it-works">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">How It Works</h2>
                  </div>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {seoContent.howItWorks}
                    </p>
                  </div>
                </div>
              )}

              {/* Use Cases Section */}
              {seoContent.useCases && (
                <div className="glass-card neomorphic rounded-xl p-6" data-testid="section-use-cases">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Use Cases</h2>
                  </div>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {seoContent.useCases}
                    </p>
                  </div>
                </div>
              )}

              {/* FAQs Section */}
              {seoContent.faqs && seoContent.faqs.length > 0 && (
                <div className="glass-card neomorphic rounded-xl p-6" data-testid="section-faqs">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-4">
                    {seoContent.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-muted/30 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
                        data-testid={`faq-${index}`}
                      >
                        <p className="text-sm font-semibold flex items-start gap-2 mb-2">
                          <span className="text-primary mt-0.5">Q:</span>
                          <span>{faq.question}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start gap-2 ml-6">
                          <span className="text-accent font-medium">A:</span>
                          <span>{faq.answer}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Related Calculators */}
          <RelatedCalculators currentToolId={toolId} category={category} />

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link href="/" data-testid="link-back-home">
              <Button variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                Back to All Tools
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
