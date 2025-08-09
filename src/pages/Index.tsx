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
  Star,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers",
    },
    {
      icon: Bot,
      title: "AI Automation Agents",
      description: "Smart AI assistants that handle customer support, appointments, and sales",
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Beautiful brand identities that make your business stand out",
    },
    {
      icon: TrendingUp,
      title: "Career Accelerator",
      description: "Professional portfolio and career guidance to boost your success",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your website live in days, not months",
    },
    {
      icon: Shield,
      title: "Future-Proof Technology",
      description: "Built with cutting-edge tech that scales with your business",
    },
    {
      icon: Clock,
      title: "24/7 AI Support",
      description: "Your AI agents work around the clock to grow your business",
    },
  ];

  const featuredWork = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with AI-powered customer support",
      tech: "React, Node.js, AI Chatbot",
      result: "300% increase in conversions",
    },
    {
      title: "Business Website",
      description: "Professional corporate website with automated lead generation",
      tech: "Next.js, AI Lead Qualifier",
      result: "500% more qualified leads",
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with integrated appointment booking",
      tech: "React, AI Scheduler",
      result: "200% more bookings",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90" />
        
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Transform Your Business with
            <span className="block gradient-hero bg-clip-text text-transparent">
              AI-Powered Websites
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We build stunning websites and intelligent AI automation that saves you time, 
            increases sales, and keeps you ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why ISR Codecraft?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another web development agency. We combine cutting-edge website development 
              with revolutionary AI automation to give your business a competitive edge that scales.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="gradient" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your business needs to succeed online, from beautiful websites to intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Tech Stack:</p>
                      <p className="text-sm">{project.tech}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-success">Result:</p>
                      <p className="text-sm font-semibold text-success">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/work">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Professional Websites + AI Automation Are Essential
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's digital world, your website is your storefront and your AI assistant is your best employee. 
              Here's why this combination is game-changing for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg gradient-primary">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Card className="gradient-card border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                  <div className="space-y-4">
                    {[
                      "Professional website that converts visitors into customers",
                      "AI chatbot that handles customer inquiries 24/7",
                      "Automated appointment booking and lead qualification",
                      "Mobile-responsive design that works on all devices",
                      "SEO optimization to attract more visitors",
                      "Ongoing support and maintenance included"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Business Impact:</h3>
                  <div className="space-y-4">
                    {[
                      "Save 10+ hours per week on customer support",
                      "Increase lead conversion rates by up to 300%",
                      "Never miss a potential customer inquiry again",
                      "Professional online presence that builds trust",
                      "Automated systems that work while you sleep",
                      "Competitive advantage over businesses without AI"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that have already revolutionized their online presence 
            with our websites and AI automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
