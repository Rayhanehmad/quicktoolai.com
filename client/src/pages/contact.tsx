import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // In a real application, this would send to a backend API
    console.log("Contact form submitted:", data);
    
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
    
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - AI FinHealth Hub</title>
        <meta name="description" content="Get in touch with AI FinHealth Hub. We're here to help with questions about our AI-powered financial and health calculators." />
        <link rel="canonical" href={`${window.location.origin}/contact`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Top Ad */}
          <AdSensePlaceholder slot="contact-top" format="rectangle" />
          
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="h-11"
                            data-testid="input-contact-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="h-11"
                            data-testid="input-contact-email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this about?" 
                            className="h-11"
                            data-testid="input-contact-subject"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more..." 
                            className="min-h-[150px] resize-none"
                            data-testid="input-contact-message"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 gradient-bg"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      For general inquiries and support
                    </p>
                    <a href="mailto:support@timeandtools.com" className="text-primary hover:underline">
                      support@timeandtools.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                    <p className="text-muted-foreground mb-2">
                      Available Monday - Friday, 9 AM - 5 PM EST
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Click the chat icon in the bottom right to start a conversation
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office</h3>
                    <p className="text-muted-foreground">
                      AI FinHealth Hub<br />
                      123 Calculator Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">Quick Response Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Include specific details about your issue</li>
                  <li>✓ Mention which calculator or tool you're using</li>
                  <li>✓ Attach screenshots if relevant</li>
                  <li>✓ Check your spam folder for our reply</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Before You Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Check Our Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Most questions are answered in our tool descriptions and FAQ sections
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Visit Support</h3>
                <p className="text-sm text-muted-foreground">
                  Browse our support documentation for common issues and guides
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours on business days
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Ad */}
          <AdSensePlaceholder slot="contact-bottom" format="responsive" />
        </main>

        <Footer />
      </div>
    </>
  );
}
