import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { Shield, Lock, Eye, Database, Cookie, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Time & Tools Hub</title>
        <meta name="description" content="Privacy Policy for Time & Tools Hub. Learn how we collect, use, and protect your data." />
        <link rel="canonical" href={`${window.location.origin}/privacy-policy`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Top Ad */}
          <AdSensePlaceholder slot="privacy-top" format="rectangle" />
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground">
              Last Updated: October 6, 2025
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Time & Tools Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our online calculators and tools. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-2">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device identifiers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Calculator Input Data</h3>
                  <p className="text-muted-foreground">
                    Our calculators and tools process data you enter (such as numbers, dates, measurements). This data is processed locally in your browser and is not transmitted to our servers or stored permanently unless you explicitly save it using browser features like favorites or local storage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Local Storage</h3>
                  <p className="text-muted-foreground">
                    We use browser local storage to save your preferences, favorite tools, and notepad content. This data remains on your device and is not accessible to our servers.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, operate, and maintain our website and tools</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can control cookie preferences through our cookie consent banner.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics)</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and choices (theme, favorites)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Google Analytics */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Google Analytics</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                We use Google Analytics to collect information about your use of our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site.
              </p>
              <p className="text-muted-foreground">
                Google's ability to use and share information collected by Google Analytics is restricted by the Google Analytics Terms of Service and Google's Privacy Policy. You can opt-out of Google Analytics by adjusting your cookie preferences in our cookie consent banner.
              </p>
            </section>

            {/* Data Security */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Data Security</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
              </p>
              <p className="text-muted-foreground">
                Most calculator data is processed locally in your browser and never transmitted to our servers, providing an additional layer of privacy and security.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              
              <p className="text-muted-foreground mb-3">
                We may use third-party services for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Analytics (Google Analytics)</li>
                <li>Currency exchange rates (Fawazahmed0 Currency API)</li>
                <li>QR Code generation (external API services)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                These third parties have their own privacy policies addressing how they use such information.
              </p>
            </section>

            {/* Your Rights */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              
              <p className="text-muted-foreground mb-3">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              
              <p className="text-muted-foreground">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="glass-card p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              
              <p className="text-muted-foreground mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• By visiting our Contact page</li>
                <li>• By email: privacy@timeandtools.com</li>
              </ul>
            </section>
          </div>
          
          {/* Bottom Ad */}
          <AdSensePlaceholder slot="privacy-bottom" format="responsive" />
        </main>

        <Footer />
      </div>
    </>
  );
}
