import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Globe, 
  Bot, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  MessageSquare,
  Calendar,
  ShoppingCart,
  UserCheck,
  Zap,
  Settings,
  FileText,
  Briefcase,
  User
} from "lucide-react";

const Services = () => {
  const websiteServices = [
    {
      icon: Globe,
      title: "Portfolio Websites",
      description: "Showcase your work with stunning, professional portfolio sites that convert visitors into clients.",
      features: ["Custom design", "Mobile responsive", "SEO optimized", "Contact forms"]
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive business growth.",
      features: ["Professional design", "CMS integration", "Analytics setup", "Performance optimization"]
    },
    {
      icon: Settings,
      title: "Web Applications",
      description: "Custom web applications tailored to your specific business processes and workflows.",
      features: ["Custom functionality", "Database integration", "User authentication", "API integrations"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and order tracking.",
      features: ["Payment gateways", "Inventory management", "Order tracking", "Admin dashboard"]
    }
  ];

  const aiServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp Business Assistant",
      description: "Smart AI assistant that handles customer inquiries on WhatsApp 24/7, improving response times and customer satisfaction.",
      features: ["24/7 availability", "Natural conversations", "Lead qualification", "Order processing"]
    },
    {
      icon: Calendar,
      title: "Smart Appointment Scheduler",
      description: "Automated booking system that schedules appointments, sends reminders, and manages your calendar seamlessly.",
      features: ["Automatic scheduling", "SMS/Email reminders", "Calendar sync", "Rescheduling handling"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sales Assistant",
      description: "AI-powered sales assistant that guides customers through purchases and handles order inquiries.",
      features: ["Product recommendations", "Order assistance", "Inventory updates", "Upselling suggestions"]
    },
    {
      icon: UserCheck,
      title: "Customer Support AI",
      description: "Intelligent customer support that resolves common issues instantly and escalates complex queries to humans.",
      features: ["Instant responses", "Issue resolution", "Knowledge base integration", "Human handoff"]
    },
    {
      icon: User,
      title: "Lead Qualification Bot",
      description: "Smart bot that qualifies leads automatically, collecting contact information and assessing purchase intent.",
      features: ["Lead scoring", "Contact collection", "Intent assessment", "CRM integration"]
    },
    {
      icon: Zap,
      title: "Workflow Automation Agent",
      description: "Automate repetitive business processes, from data entry to email campaigns and follow-ups.",
      features: ["Process automation", "Data synchronization", "Email sequences", "Task scheduling"]
    }
  ];

  const designServices = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Memorable logos that represent your brand identity and make a lasting impression."
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to maintain consistency across all your marketing materials."
    },
    {
      icon: MessageSquare,
      title: "Social Media Graphics",
      description: "Eye-catching graphics for social media posts, covers, and advertisements."
    },
    {
      icon: FileText,
      title: "Print Materials",
      description: "Business cards, brochures, flyers, and other print materials that align with your brand."
    }
  ];

  const careerServices = [
    {
      icon: Globe,
      title: "Portfolio Creation",
      description: "Professional portfolios that showcase your skills and attract potential employers or clients."
    },
    {
      icon: FileText,
      title: "Resume Design",
      description: "Modern, ATS-friendly resumes that help you stand out in the job market."
    },
    {
      icon: User,
      title: "LinkedIn Setup",
      description: "Optimized LinkedIn profiles that attract recruiters and networking opportunities."
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Strategic career advice and guidance to help you achieve your professional goals."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive solutions for modern businesses - from stunning websites to intelligent AI automation
          </p>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Development</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, responsive websites that convert visitors into customers and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteServices.map((service, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Gen AI Automation Agents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Intelligent AI assistants that work 24/7 to grow your business, save time, and improve customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="gradient-card border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">How AI Agents Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                    <h4 className="font-semibold mb-2">Setup & Training</h4>
                    <p className="text-sm text-muted-foreground">We configure and train your AI agent with your business knowledge and processes</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                    <h4 className="font-semibold mb-2">Deploy & Monitor</h4>
                    <p className="text-sm text-muted-foreground">Your AI agent starts working immediately, handling customer interactions intelligently</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                    <h4 className="font-semibold mb-2">Optimize & Scale</h4>
                    <p className="text-sm text-muted-foreground">Continuous improvement and scaling as your business grows and evolves</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design & Branding */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design & Branding</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a memorable brand identity that resonates with your audience and stands out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Accelerator */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Accelerator</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accelerate your career growth with professional portfolio development and strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerServices.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <Card className="gradient-card border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <p className="text-muted-foreground">Why businesses choose ISR Codecraft for their digital transformation</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Save Time & Money",
                    description: "Automated processes reduce manual work by 70%+ and cut operational costs significantly"
                  },
                  {
                    title: "24/7 Customer Service",
                    description: "AI agents work round the clock, ensuring no customer inquiry goes unanswered"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Our technology grows with your business, handling increased demand automatically"
                  },
                  {
                    title: "Professional Image",
                    description: "Modern websites and branding that builds trust and credibility with your audience"
                  },
                  {
                    title: "Competitive Advantage",
                    description: "Stay ahead of competitors with cutting-edge AI technology and modern design"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Continuous maintenance, updates, and optimization to ensure peak performance"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create a custom solution that fits your business needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;