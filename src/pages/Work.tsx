import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, Shield, Award } from "lucide-react";

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
      features: ["Project Galleries", "Contact Forms", "Responsive Design", "SEO Optimized"],
      status: "Featured",
      results: "300% increase in client inquiries"
    },
    {
      title: "E-commerce Platform",
      category: "Online Store",
      description: "Full-featured e-commerce platform with inventory management and payment processing.",
      image: ecommerceImg,
      techStack: ["Next.js", "Stripe", "MongoDB", "Admin Dashboard"],
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
      status: "New",
      results: "150% boost in online sales"
    },
    {
      title: "Lead Generation Platform",
      category: "Business Website",
      description: "High-converting landing pages designed to capture and qualify leads automatically.",
      image: leadGenImg,
      techStack: ["React", "Lead Forms", "CRM Integration", "Analytics"],
      features: ["Landing Pages", "Contact Forms", "Lead Tracking", "Conversion Optimization"],
      status: "Popular",
      results: "500% increase in qualified leads"
    },
    {
      title: "AI Chat Assistant",
      category: "AI Automation",
      description: "Intelligent chatbot that handles customer support and appointment scheduling 24/7.",
      image: chatbotImg,
      techStack: ["AI/ML", "Natural Language Processing", "WhatsApp API", "CRM"],
      features: ["Smart Responses", "Multi-platform", "Lead Qualification", "Appointment Booking"],
      status: "AI Powered",
      results: "80% reduction in support tickets"
    },
    {
      title: "Appointment Booking System",
      category: "Healthcare & Business",
      description: "Smart scheduling system for healthcare providers and service businesses.",
      image: appointmentImg,
      techStack: ["React", "Calendar API", "Payment Integration", "Notifications"],
      features: ["Online Booking", "Calendar Sync", "Payment Processing", "Automated Reminders"],
      status: "Trending",
      results: "200% increase in bookings"
    },
    {
      title: "Brand Identity & Logo Design",
      category: "Design & Branding",
      description: "Complete brand identity packages including logos, color schemes, and brand guidelines.",
      image: logoImg,
      techStack: ["Adobe Creative Suite", "Brand Guidelines", "Logo Design", "Print Design"],
      features: ["Logo Design", "Brand Colors", "Typography", "Marketing Materials"],
      status: "Creative",
      results: "400% brand recognition boost"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Featured': 'bg-gradient-to-r from-yellow-500 to-orange-500',
      'New': 'bg-gradient-to-r from-green-500 to-emerald-500',
      'Popular': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'AI Powered': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Trending': 'bg-gradient-to-r from-red-500 to-rose-500',
      'Creative': 'bg-gradient-to-r from-indigo-500 to-purple-500'
    };
    return colors[status] || 'bg-primary';
  };

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <div
      className={`transform transition-all duration-1000 
      }`}
    >
      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8 border border-white/20">
        <Star className="h-4 w-4 mr-2 text-yellow-300" />
        <span>Award-Winning Projects</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Our <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Work</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
        Real projects, real results. See how we've transformed businesses with
        <span className="text-yellow-300 font-semibold"> modern websites</span> and
        <span className="text-yellow-300 font-semibold"> intelligent AI automation</span>.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {[
        { number: "100+", label: "Projects" },
        { number: "500%", label: "Avg ROI" },
        { number: "24/7", label: "AI Support" },
        { number: "99.9%", label: "Uptime" },
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
          <div className="text-3xl font-bold mb-1 text-yellow-300">{stat.number}</div>
          <div className="text-sm opacity-80">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Enhanced Introduction */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-8">
              <TrendingUp className="h-4 w-4 mr-2" />
              Transforming Businesses Since 2020
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Transforming Businesses
              <span className="block text-primary">Across Industries</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              From e-commerce platforms to professional service websites, our solutions combine stunning design 
              with powerful AI automation to deliver measurable business growth. Each project is tailored to 
              solve specific challenges and achieve concrete results.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Custom Development", "AI Integration", "Mobile-First", "SEO Optimized", "24/7 Support"].map((feature, index) => (
                <span key={index} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Discover our latest work and client success stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group border-0 ring-1 ring-gray-100 hover:ring-primary/20 hover:-translate-y-1">
                {/* Enhanced Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 text-white text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay with CTA */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>

                  {/* Results Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <p className="text-xs text-primary font-semibold">{project.results}</p>
                  </div>
                </div>

                {/* Enhanced Project Info */}
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-xs rounded-md border border-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
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

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg%20width="40"%20height="40"%20viewBox="0%200%2040%2040"%20xmlns="http://www.w3.org/2000/svg"%3E%3Cg%20fill="white"%20fill-opacity="0.1"%3E%3Cpath%20d="M20%2020c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010zm10%200c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010z"/%3E%3C/g%3E%3C/svg%3E")]'
          />
        </div>


        <div className="container relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-8">
              <Award className="h-4 w-4 mr-2" />
              Our Impact in Numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Track Record
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Numbers that speak for themselves - the measurable impact we've made across all our projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "100+",
                label: "Projects Completed",
                description: "Successful websites and automation deployments across diverse industries"
              },
              {
                icon: TrendingUp,
                number: "500%",
                label: "Average ROI Increase",
                description: "Return on investment that exceeds client expectations"
              },
              {
                icon: Clock,
                number: "24/7",
                label: "AI Support Available",
                description: "Round-the-clock automated customer service solutions"
              },
              {
                icon: Shield,
                number: "99.9%",
                label: "Uptime Guarantee",
                description: "Reliable performance with enterprise-grade infrastructure"
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                  <h3 className="font-semibold mb-3 text-lg">{stat.label}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-8">
              <Star className="h-4 w-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real feedback from real businesses that have transformed their operations with our innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ISR Codecraft didn't just build us a website - they revolutionized our entire customer service process. The AI assistant handles 80% of our inquiries automatically, and our customer satisfaction has never been higher.",
                author: "Sarah Johnson",
                title: "CEO",
                company: "TechStart E-commerce",
                avatar: "SJ",
                rating: 5,
                result: "80% automation rate"
              },
              {
                quote: "The lead qualification system has been a game-changer for our law firm. We're getting 5x more qualified leads and our conversion rate has increased dramatically. The ROI has been phenomenal.",
                author: "Michael Chen",
                title: "Managing Partner",
                company: "LegalPro Law Firm",
                avatar: "MC",
                rating: 5,
                result: "5x more qualified leads"
              },
              {
                quote: "Our booking rate increased by 200% after implementing the automated appointment system. Clients love the convenience and we love the efficiency. It's been transformational for our practice.",
                author: "Dr. Emily Rodriguez",
                title: "Medical Director",
                company: "HealthCare Clinic",
                avatar: "ER",
                rating: 5,
                result: "200% booking increase"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Result Badge */}
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium mb-6">
                    {testimonial.result}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-6 border-t">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="container relative text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
              <ArrowRight className="h-4 w-4 mr-2" />
              Let's Work Together
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Be Our Next
              <span className="block text-yellow-300">Success Story?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your project and create a solution that delivers the same 
              impressive results for your business. Transform your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
<Button asChild variant="outline" size="xl" className="border-2 border-white text-black hover:bg-white/10 hover:border-white backdrop-blur-sm font-bold px-10 py-5 text-lg transform hover:scale-110 transition-all duration-300">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-16 text-white/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30-Day</div>
                <div className="text-sm">Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;