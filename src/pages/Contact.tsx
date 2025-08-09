import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { 
  CheckCircle, 
  Calendar, 
  MessageSquare, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 2-4 weeks, depending on complexity. E-commerce sites and advanced AI integrations may take 4-6 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive support packages including maintenance, updates, hosting, and AI agent optimization to ensure your systems run smoothly."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our packages include design, development, basic SEO setup, mobile optimization, and 3 months of support. AI automation and advanced features are priced separately."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We can integrate with most CRM systems, payment processors, scheduling tools, and other business software you're already using."
    },
    {
      question: "Do I need technical knowledge to manage my website?",
      answer: "Not at all! We build user-friendly admin panels and provide training. Our AI systems are designed to work automatically with minimal oversight."
    },
    {
      question: "What if I need changes after launch?",
      answer: "We offer revision packages and can implement changes as your business evolves. Our systems are built to be scalable and adaptable."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ready to transform your business with a modern website and intelligent AI automation? 
            Let's discuss your project and create a solution that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="gradient-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Start Your Project</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="ai-automation">AI Automation</SelectItem>
                          <SelectItem value="both">Website + AI Automation</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                          <SelectItem value="design">Design & Branding</SelectItem>
                          <SelectItem value="career">Career Accelerator</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-plus-months">6+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Consultation Info & Contact Details */}
            <div className="space-y-8">
              
              {/* Free Consultation */}
              <Card className="bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-primary" />
                    Free 30-Minute Consultation
                  </CardTitle>
                  <CardDescription>
                    Schedule a free video call to discuss your project in detail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">What's Included:</h4>
                    <div className="space-y-3">
                      {[
                        "Project scope discussion and requirements analysis",
                        "Custom solution recommendations tailored to your business",
                        "Timeline and budget planning with transparent pricing",
                        "Technical strategy and implementation roadmap",
                        "Q&A session to address all your concerns"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Free Call
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach us - we're here to help
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@isrcodecraft.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Remote & Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Overview */}
              <Card className="gradient-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Our Process</CardTitle>
                  <CardDescription>
                    How we work together to bring your vision to life
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Discovery Call",
                        description: "We discuss your goals, requirements, and vision"
                      },
                      {
                        step: "2",
                        title: "Proposal & Agreement",
                        description: "Custom proposal with timeline, features, and pricing"
                      },
                      {
                        step: "3",
                        title: "Design & Development",
                        description: "We build your solution with regular updates and feedback"
                      },
                      {
                        step: "4",
                        title: "Testing & Launch",
                        description: "Thorough testing, training, and successful launch"
                      },
                      {
                        step: "5",
                        title: "Support & Growth",
                        description: "Ongoing support and optimization for continued success"
                      }
                    ].map((phase, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full gradient-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {phase.step}
                        </div>
                        <div>
                          <p className="font-medium">{phase.title}</p>
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that have already revolutionized their operations with our websites and AI automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <a href="#contact-form">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+15551234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;