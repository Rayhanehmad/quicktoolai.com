import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { FileText, AlertTriangle, Scale, ShieldCheck } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Time & Tools Hub</title>
        <meta name="description" content="Terms of Service for Time & Tools Hub. Review the terms and conditions for using our calculators and tools." />
        <link rel="canonical" href={`${window.location.origin}/terms-of-service`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Top Ad */}
          <AdSensePlaceholder slot="terms-top" format="rectangle" />
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-muted-foreground">
              Last Updated: October 6, 2025
            </p>
          </div>

          <div className="space-y-8">
            {/* Agreement to Terms */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Time & Tools Hub ("the Website"), you accept and agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Website. These Terms apply to all visitors, users, and others who access or use the Website.
              </p>
            </section>

            {/* Use License */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Use License</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                Permission is granted to use our calculators and tools for personal and commercial purposes, subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You may not copy, modify, or create derivative works of our website content</li>
                <li>You may not use the Website for any illegal or unauthorized purpose</li>
                <li>You may not attempt to gain unauthorized access to any portion of the Website</li>
                <li>You may not remove any copyright or proprietary notices</li>
                <li>You may not use automated tools to access the Website in a manner that sends more requests than a human can reasonably produce</li>
              </ul>
            </section>

            {/* Tools and Calculators */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Use of Calculators and Tools</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accuracy Disclaimer</h3>
                  <p className="text-muted-foreground">
                    While we strive to provide accurate calculations, we do not guarantee the accuracy, completeness, or usefulness of any information provided by our calculators and tools. All tools are provided "as is" without warranty of any kind.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Advice</h3>
                  <p className="text-muted-foreground">
                    Our calculators and tools are for informational and educational purposes only. They should not be used as a substitute for professional financial, medical, legal, or other professional advice. Always consult with qualified professionals for important decisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">User Responsibility</h3>
                  <p className="text-muted-foreground">
                    You are solely responsible for verifying any calculations and for any decisions made based on the results from our tools. We recommend cross-checking important calculations with other sources.
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-semibold">Prohibited Activities</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                You may not access or use the Website for any purpose other than that for which we make it available. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Attempting to bypass any security features</li>
                <li>Engaging in unauthorized framing or linking to the Website</li>
                <li>Uploading or transmitting viruses, malware, or other malicious code</li>
                <li>Collecting or tracking personal information of other users</li>
                <li>Impersonating another person or entity</li>
                <li>Interfering with or disrupting the Website or servers</li>
                <li>Using the Website to violate any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Intellectual Property</h2>
              </div>
              
              <p className="text-muted-foreground mb-3">
                The Website and its original content, features, and functionality are owned by Time & Tools Hub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            {/* User Content */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">User Content</h2>
              
              <p className="text-muted-foreground mb-3">
                Some features of the Website may allow you to store content locally (such as notepad text or favorite tools). You retain all rights to any content you create. However:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You are responsible for maintaining backups of your content</li>
                <li>We are not responsible for any loss or corruption of your locally stored content</li>
                <li>You represent that you have all necessary rights to any content you create</li>
              </ul>
            </section>

            {/* Third-Party Links */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Services</h2>
              
              <p className="text-muted-foreground mb-3">
                Our Website may contain links to third-party websites or services that are not owned or controlled by Time & Tools Hub. We have no control over, and assume no responsibility for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The content, privacy policies, or practices of any third-party websites or services</li>
                <li>The accuracy of data provided by third-party APIs (such as currency exchange rates)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="glass-card p-6 border-destructive/20">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              
              <p className="text-muted-foreground mb-3">
                In no event shall Time & Tools Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Any loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
                <li>Any damages resulting from your use or inability to use the Website</li>
                <li>Any damages resulting from any reliance on calculation results</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              
              <p className="text-muted-foreground mb-3">
                Your use of the Website is at your sole risk. The Website is provided on an "AS IS" and "AS AVAILABLE" basis. The Website is provided without warranties of any kind, whether express or implied, including, but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy of calculations and results</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Time & Tools Hub operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website after revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            {/* Severability */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Severability</h2>
              
              <p className="text-muted-foreground">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            {/* Contact */}
            <section className="glass-card p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              
              <p className="text-muted-foreground mb-3">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• By visiting our Contact page</li>
                <li>• By email: legal@timeandtools.com</li>
              </ul>
            </section>
          </div>
          
          {/* Bottom Ad */}
          <AdSensePlaceholder slot="terms-bottom" format="responsive" />
        </main>

        <Footer />
      </div>
    </>
  );
}
