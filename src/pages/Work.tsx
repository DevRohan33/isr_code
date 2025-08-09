import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

// Import work images
import portfolioImg from "@/assets/work/portfolio-website.jpg";
import ecommerceImg from "@/assets/work/ecommerce-platform.jpg";
import leadGenImg from "@/assets/work/lead-generation.jpg";
import chatbotImg from "@/assets/work/ai-chatbot.jpg";
import appointmentImg from "@/assets/work/appointment-booking.jpg";
import logoImg from "@/assets/work/logo-design.jpg";

const Work = () => {
  const portfolioProjects = [
    {
      title: "Creative Portfolio Website",
      category: "Portfolio & Design",
      description: "Modern portfolio website for creative professionals with stunning galleries and smooth animations.",
      image: portfolioImg,
      techStack: ["React", "Framer Motion", "Tailwind CSS"],
      features: ["Project Galleries", "Contact Forms", "Responsive Design", "SEO Optimized"]
    },
    {
      title: "E-commerce Platform",
      category: "Online Store",
      description: "Full-featured e-commerce platform with inventory management and payment processing.",
      image: ecommerceImg,
      techStack: ["Next.js", "Stripe", "MongoDB", "Admin Dashboard"],
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    },
    {
      title: "Lead Generation Platform",
      category: "Business Website",
      description: "High-converting landing pages designed to capture and qualify leads automatically.",
      image: leadGenImg,
      techStack: ["React", "Lead Forms", "CRM Integration", "Analytics"],
      features: ["Landing Pages", "Contact Forms", "Lead Tracking", "Conversion Optimization"]
    },
    {
      title: "AI Chat Assistant",
      category: "AI Automation",
      description: "Intelligent chatbot that handles customer support and appointment scheduling 24/7.",
      image: chatbotImg,
      techStack: ["AI/ML", "Natural Language Processing", "WhatsApp API", "CRM"],
      features: ["Smart Responses", "Multi-platform", "Lead Qualification", "Appointment Booking"]
    },
    {
      title: "Appointment Booking System",
      category: "Healthcare & Business",
      description: "Smart scheduling system for healthcare providers and service businesses.",
      image: appointmentImg,
      techStack: ["React", "Calendar API", "Payment Integration", "Notifications"],
      features: ["Online Booking", "Calendar Sync", "Payment Processing", "Automated Reminders"]
    },
    {
      title: "Brand Identity & Logo Design",
      category: "Design & Branding",
      description: "Complete brand identity packages including logos, color schemes, and brand guidelines.",
      image: logoImg,
      techStack: ["Adobe Creative Suite", "Brand Guidelines", "Logo Design", "Print Design"],
      features: ["Logo Design", "Brand Colors", "Typography", "Marketing Materials"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Real projects, real results. See how we've transformed businesses with modern websites and intelligent AI automation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Businesses Across Industries
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From e-commerce platforms to professional service websites, our solutions combine stunning design 
              with powerful AI automation to deliver measurable business growth. Each project is tailored to 
              solve specific challenges and achieve concrete results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-smooth group">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="hero" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-xs rounded-md border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                      <div className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for themselves - the impact we've made across all our projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "100+",
                label: "Projects Completed",
                description: "Successful websites and automation deployments"
              },
              {
                number: "500%",
                label: "Average ROI Increase",
                description: "Return on investment for our clients"
              },
              {
                number: "24/7",
                label: "AI Support",
                description: "Round-the-clock automated customer service"
              },
              {
                number: "99.9%",
                label: "Uptime",
                description: "Reliable performance across all platforms"
              }
            ].map((stat, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real businesses that have transformed their operations with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ISR Codecraft didn't just build us a website - they revolutionized our entire customer service process. The AI assistant handles 80% of our inquiries automatically.",
                author: "Sarah Johnson",
                title: "CEO, TechStart",
                company: "E-commerce Platform"
              },
              {
                quote: "The lead qualification system has been a game-changer. We're getting 5x more qualified leads and our conversion rate has never been higher.",
                author: "Michael Chen",
                title: "Managing Partner",
                company: "LegalPro Law Firm"
              },
              {
                quote: "Our booking rate increased by 200% after implementing the automated appointment system. Clients love the convenience and we love the efficiency.",
                author: "Dr. Emily Rodriguez",
                title: "Director",
                company: "HealthCare Clinic"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create a solution that delivers the same impressive results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;