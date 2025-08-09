import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "TechStart E-commerce Platform",
      category: "E-commerce + AI Automation",
      description: "Modern online store selling tech gadgets with an integrated AI customer support system that handles product inquiries, order tracking, and returns processing.",
      challenge: "High volume of customer inquiries was overwhelming the support team, leading to delayed responses and frustrated customers.",
      solution: "Implemented a comprehensive e-commerce platform with AI-powered customer support that handles 80% of inquiries automatically.",
      results: [
        "300% increase in conversion rates",
        "85% reduction in support response time",
        "500% increase in customer satisfaction scores",
        "40% reduction in support costs"
      ],
      techStack: ["React", "Node.js", "MongoDB", "AI Chatbot", "Stripe", "WhatsApp API"],
      features: ["Product catalog", "Shopping cart", "Payment processing", "AI customer support", "Order tracking", "Inventory management"]
    },
    {
      title: "LegalPro Business Website",
      category: "Business Website + Lead Generation",
      description: "Professional law firm website with automated lead qualification and appointment scheduling for potential clients.",
      challenge: "Manual lead qualification process was time-consuming and many potential clients were lost due to slow response times.",
      solution: "Built a professional website with AI-powered lead qualification bot and smart appointment scheduling system.",
      results: [
        "500% increase in qualified leads",
        "75% faster lead response time",
        "250% more consultation bookings",
        "60% improvement in lead-to-client conversion"
      ],
      techStack: ["Next.js", "TypeScript", "AI Lead Qualifier", "Calendar API", "CRM Integration"],
      features: ["Practice area pages", "Attorney profiles", "Client testimonials", "Lead qualification", "Appointment booking", "Case study library"]
    },
    {
      title: "CreativeStudio Portfolio",
      category: "Portfolio + Automation",
      description: "Stunning portfolio website for a design agency with integrated project showcase and automated client onboarding process.",
      challenge: "Time-consuming client onboarding process and difficulty showcasing work effectively to attract premium clients.",
      solution: "Created an impressive portfolio website with automated client onboarding and project management workflow.",
      results: [
        "200% increase in project bookings",
        "150% higher average project value",
        "90% reduction in onboarding time",
        "300% improvement in client inquiries"
      ],
      techStack: ["React", "Gatsby", "Contentful", "AI Assistant", "Project Management API"],
      features: ["Project galleries", "Case studies", "Client testimonials", "Service packages", "Automated onboarding", "Project proposals"]
    },
    {
      title: "HealthCare Clinic Website",
      category: "Healthcare + Appointment System",
      description: "Modern healthcare website with AI-powered appointment scheduling and patient inquiry system for a multi-specialty clinic.",
      challenge: "Manual appointment booking was causing scheduling conflicts and patient frustration with long wait times.",
      solution: "Developed a comprehensive healthcare website with intelligent appointment scheduling and patient support system.",
      results: [
        "400% increase in online appointments",
        "80% reduction in scheduling conflicts",
        "350% improvement in patient satisfaction",
        "50% decrease in no-show rates"
      ],
      techStack: ["React", "Node.js", "Healthcare API", "AI Scheduler", "HIPAA Compliance"],
      features: ["Doctor profiles", "Service information", "Appointment booking", "Patient portal", "Insurance verification", "Telemedicine integration"]
    },
    {
      title: "RestaurantPro Delivery Platform",
      category: "Food Delivery + AI Assistant",
      description: "Complete food delivery platform for a restaurant chain with AI assistant for order taking and customer service via WhatsApp.",
      challenge: "High volume of phone orders during peak hours was overwhelming staff and causing order errors and delays.",
      solution: "Built a comprehensive delivery platform with AI-powered WhatsApp ordering system and customer service automation.",
      results: [
        "600% increase in online orders",
        "95% reduction in order errors",
        "70% faster order processing",
        "250% improvement in customer retention"
      ],
      techStack: ["React Native", "Node.js", "WhatsApp Business API", "AI Assistant", "Payment Gateway"],
      features: ["Menu management", "Order tracking", "Payment processing", "WhatsApp ordering", "Delivery management", "Customer feedback"]
    },
    {
      title: "EduTech Learning Platform",
      category: "Educational Platform + AI Tutoring",
      description: "Online learning platform for a coding bootcamp with AI-powered student support and progress tracking system.",
      challenge: "Students needed 24/7 support for coding questions and course navigation, but instructors weren't always available.",
      solution: "Created a comprehensive learning platform with AI tutoring assistant and automated progress tracking.",
      results: [
        "300% improvement in student engagement",
        "85% reduction in dropout rates",
        "400% increase in course completion",
        "90% student satisfaction rate"
      ],
      techStack: ["React", "Python", "AI Tutor", "Video Streaming", "Progress Tracking"],
      features: ["Course management", "Video lessons", "Code editor", "AI tutoring", "Progress tracking", "Student community"]
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

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-smooth">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-destructive">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
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
                    </div>
                  </div>

                  {/* Results & Features */}
                  <div className="p-8 bg-gradient-subtle">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4 flex items-center text-success">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Results Achieved:
                      </h4>
                      <div className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm font-medium text-success">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
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