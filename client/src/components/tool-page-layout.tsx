import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolPageLayoutProps {
  toolId: string;
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
}

export function ToolPageLayout({ toolId, title, description, category, children }: ToolPageLayoutProps) {
  const pageUrl = `${window.location.origin}/${toolId}`;
  
  return (
    <>
      <Helmet>
        <title>{title} - Free Online Calculator | Time & Tools Hub</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${title} - Free Online Calculator`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Time & Tools Hub" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={`${title} - Free Online Calculator`} />
        <meta name="twitter:description" content={description} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
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
              {description}
            </p>
          </div>

          {/* Tool Content */}
          <div className="max-w-4xl mx-auto">
            {children}
          </div>

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
