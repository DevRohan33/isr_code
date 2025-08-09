import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
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
  Clock,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies",
      features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Fast Loading"],
      price: "From ₹ 3999"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business",
      features: ["Chatbots", "Process Automation", "Data Analysis", "24/7 Support"],
      price: "From ₹ 1999"
    },
    {
      icon: Smartphone,
      title: "E-commerce Platform",
      description: "Complete online stores with payment integration",
      features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile App"],
      price: "From ₹ 49999"
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Complete brand identity and visual design solutions",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "UI/UX"],
      price: "From ₹ 499"
    }
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
      emoji: "🛒",
      color: "from-emerald-400 to-cyan-500"
    },
    {
      title: "Business Website",
      description: "Professional corporate website with automated lead generation",
      tech: "Next.js, AI Lead Qualifier",
      result: "500% more qualified leads",
      emoji: "💼",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with integrated appointment booking",
      tech: "React, AI Scheduler",
      result: "200% more bookings",
      emoji: "🎨",
      color: "from-amber-400 to-orange-500"
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Enhanced with Purple/Orange Theme */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dynamic Background Overlay - Purple/Orange Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-800/90 to-orange-600/85" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-pulse delay-150" />
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-pulse delay-300" />
          <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-amber-300 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-200/40 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          {/* Badge/Announcement */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-fade-in-up shadow-2xl">
            {/* <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50" /> */}
            <span className="text-sm font-semibold tracking-wide">🚀 Now offering AI automation solutions</span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <div className="space-y-8 mb-12 text-center">
            <h1 className="font-bold leading-tight">
              <span className="block animate-slide-up opacity-0 animation-delay-200 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">
                Transform Your Business
              </span>
              <span className="block animate-slide-up opacity-0 animation-delay-400 text-2xl md:text-4xl lg:text-5xl text-orange-200/90 font-medium">
                with
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-up opacity-0 animation-delay-600 drop-shadow-2xl text-3xl md:text-5xl lg:text-6xl font-extrabold">
                AI-Powered Websites
              </span>
            </h1>
          </div>


          {/* Enhanced Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-800 text-white/95 drop-shadow-lg">
            We build <span className="font-bold text-orange-200 bg-orange-500/20 px-2 py-1 rounded">stunning websites</span> and 
            <span className="font-bold text-purple-200 bg-purple-500/20 px-2 py-1 rounded"> intelligent AI automation</span> that 
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold text-xl md:text-2xl">
              saves you time, increases sales, and keeps you ahead
            </span> of the competition.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0 animation-delay-1000">
            <Button 
              asChild 
              variant="hero" 
              size="xl" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 shadow-2xl shadow-orange-500/30 transform hover:scale-110 transition-all duration-300 text-white font-bold px-8 py-4 text-lg"
            >
              <Link to="/contact" className="relative z-10">
                <span className="flex items-center">
                  Get Started Today 
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="xl" 
              className="border-2 border-white/60 text-black hover:bg-white/15 hover:border-white backdrop-blur-sm transform hover:scale-110 transition-all duration-300 font-semibold px-8 py-4 text-lg"
            >
              <Link to="/work" className="flex items-center">
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 animate-fade-in-up opacity-0 animation-delay-1200">
            <p className="text-lg text-white/80 mb-6 font-medium">Trusted by 10+ businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-green-400 text-xl">✓</span>
                <span className="text-sm font-semibold">10+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-purple-400 text-xl">🏆</span>
                <span className="text-sm font-semibold">Award Winning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-300 rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </section>

      {/* Enhanced Introduction Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.4) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Section Badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full border border-purple-200 shadow-lg">
              <span className="text-base font-bold text-purple-800">✨ Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 bg-gradient-to-r from-gray-900 via-purple-800 to-orange-700 bg-clip-text text-transparent leading-tight">
              Why ISR Codecraft?
            </h2>

            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-16 leading-relaxed font-medium">
                We're not just another web development agency. We combine 
                <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> cutting-edge website development</span> with 
                <span className="font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"> revolutionary AI automation</span> to give your business a 
                <span className="relative inline-block font-bold">
                  competitive edge that scales
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full" />
                </span>.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-purple-100 hover:border-purple-200">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">🚀</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Optimized for speed and performance</p>
              </div>
              
              <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-orange-100 hover:border-orange-200">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">🤖</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">AI-Powered</h3>
                <p className="text-gray-600">Smart automation that works 24/7</p>
              </div>
              
              <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-pink-100 hover:border-pink-200">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">📈</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Results Driven</h3>
                <p className="text-gray-600">Proven to increase conversions</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                asChild 
                variant="gradient" 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-bold"
              >
                <Link to="/about" className="relative z-10 flex items-center text-white">
                  Learn More About Us
                  <span className="ml-3 group-hover:translate-x-2 transition-transform text-xl">→</span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Enhanced */}
      {/* <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full border border-purple-200">
              <span className="text-sm font-bold text-purple-800">🔧 Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything your business needs to succeed online, from beautiful websites to intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Services Preview */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                    Our Premium Services
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Comprehensive solutions designed to accelerate your digital transformation
                  </p>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                          <service.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                        <p className="text-slate-600 mb-6">{service.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-600">{service.price}</span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* Featured Work - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full border border-orange-200">
              <span className="text-sm font-bold text-orange-800">🎨 Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our latest projects showcasing modern websites and AI automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredWork.map((project, index) => (
              <Card key={index} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                <div className={`relative aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.emoji}</div>
                    <p className="text-lg font-bold">{project.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">
                      {project.tech}
                    </span>
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                      {project.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/work">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
              <span className="text-sm font-bold text-green-800">💡 Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Why Professional Websites + AI Automation Are Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today's digital world, your website is your storefront and your AI assistant is your best employee. 
              Here's why this combination is game-changing for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">What You Get:</h3>
                  <div className="space-y-5">
                    {[
                      "Professional website that converts visitors into customers",
                      "AI chatbot that handles customer inquiries 24/7",
                      "Automated appointment booking and lead qualification",
                      "Mobile-responsive design that works on all devices",
                      "SEO optimization to attract more visitors",
                      "Ongoing support and maintenance included"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Business Impact:</h3>
                  <div className="space-y-5">
                    {[
                      "Save 10+ hours per week on customer support",
                      "Increase lead conversion rates by up to 300%",
                      "Never miss a potential customer inquiry again",
                      "Professional online presence that builds trust",
                      "Automated systems that work while you sleep",
                      "Competitive advantage over businesses without AI"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-orange-600 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-orange-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full blur-3xl animate-pulse delay-300" />
        </div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Join hundreds of businesses that have already revolutionized their online presence 
            with our <span className="font-bold text-orange-200">websites</span> and <span className="font-bold text-purple-200">AI automation solutions</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="hero" size="xl" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-10 py-5 text-lg shadow-xl transform hover:scale-110 transition-all duration-300">
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-2 border-white text-black hover:bg-white/10 hover:border-white backdrop-blur-sm font-bold px-10 py-5 text-lg transform hover:scale-110 transition-all duration-300">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        /* Floating animation for hero text */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

    </Layout>
  );
};

export default Index;
