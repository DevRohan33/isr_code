import React, { useState, useEffect } from 'react';
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
  User,
  Star,
  Clock,
  Shield,
  Target,
  Sparkles,
  ChevronDown,
  Play,
  Award
} from "lucide-react";
import Layout from '@/components/Layout';
const Services = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const websiteServices = [
    {
      icon: Globe,
      title: "Portfolio Websites",
      description: "Showcase your work with stunning, professional portfolio sites that convert visitors into clients.",
      features: ["Custom design", "Mobile responsive", "SEO optimized", "Contact forms"],
      price: "Starting at ₹1,999",
      popular: false
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive business growth.",
      features: ["Professional design", "CMS integration", "Analytics setup", "Performance optimization"],
      price: "Starting at ₹4,999",
      popular: false
    },
    {
      icon: Settings,
      title: "Web Applications",
      description: "Custom web applications tailored to your specific business processes and workflows.",
      features: ["Custom functionality", "Database integration", "User authentication", "API integrations"],
      price: "Starting at ₹7,999",
      popular: false
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and order tracking.",
      features: ["Payment gateways", "Inventory management", "Order tracking", "Admin dashboard"],
      price: "Starting at ₹49,999",
      popular: false
    }
  ];

  const aiServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp Business Assistant",
      description: "Smart AI assistant that handles customer inquiries on WhatsApp 24/7, improving response times and customer satisfaction.",
      features: ["24/7 availability", "Natural conversations", "Lead qualification", "Order processing"],
      price: "₹499/month",
      popular: false
    },
    {
      icon: Calendar,
      title: "Smart Appointment Scheduler",
      description: "Automated booking system that schedules appointments, sends reminders, and manages your calendar seamlessly.",
      features: ["Automatic scheduling", "SMS/Email reminders", "Calendar sync", "Rescheduling handling"],
      price: "₹499/month",
      popular: false
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sales Assistant",
      description: "AI-powered sales assistant that guides customers through purchases and handles order inquiries.",
      features: ["Product recommendations", "Order assistance", "Inventory updates", "Upselling suggestions"],
      price: "₹999/month",
      popular: false
    },
    {
      icon: UserCheck,
      title: "Customer Support AI",
      description: "Intelligent customer support that resolves common issues instantly and escalates complex queries to humans.",
      features: ["Instant responses", "Issue resolution", "Knowledge base integration", "Human handoff"],
      price: "₹999/month",
      popular: false
    },
    {
      icon: User,
      title: "Lead Qualification Bot",
      description: "Smart bot that qualifies leads automatically, collecting contact information and assessing purchase intent.",
      features: ["Lead scoring", "Contact collection", "Intent assessment", "CRM integration"],
      price: "₹299/month",
      popular: false
    },
    {
      icon: Zap,
      title: "Workflow Automation Agent",
      description: "Automate repetitive business processes, from data entry to email campaigns and follow-ups.",
      features: ["Process automation", "Data synchronization", "Email sequences", "Task scheduling"],
      price: "₹499/month",
      popular: false
    }
  ];

  const designServices = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Memorable logos that represent your brand identity and make a lasting impression.",
      price: "₹500"
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to maintain consistency across all your marketing materials.",
      price: "₹999"
    },
    {
      icon: MessageSquare,
      title: "Social Media Graphics",
      description: "Eye-catching graphics for social media posts, covers, and advertisements.",
      price: "₹599/month"
    },
    {
      icon: FileText,
      title: "Print Materials",
      description: "Business cards, brochures, flyers, and other print materials that align with your brand.",
      price: "₹499"
    }
  ];

  const careerServices = [
    {
      icon: Globe,
      title: "Portfolio Creation",
      description: "Professional portfolios that showcase your skills and attract potential employers or clients.",
      price: "₹1,999"
    },
    {
      icon: FileText,
      title: "Resume Design",
      description: "Modern, ATS-friendly resumes that help you stand out in the job market.",
      price: "₹999"
    },
    {
      icon: User,
      title: "LinkedIn Setup",
      description: "Optimized LinkedIn profiles that attract recruiters and networking opportunities.",
      price: "₹499"
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Strategic career advice and guidance to help you achieve your professional goals.",
      price: "₹999/session"
    }
  ];

  const tabs = [
    { id: 'websites', label: 'Websites', icon: Globe, count: websiteServices.length },
    { id: 'ai', label: 'AI Agents', icon: Bot, count: aiServices.length },
    { id: 'design', label: 'Design', icon: Palette, count: designServices.length },
    { id: 'career', label: 'Career', icon: TrendingUp, count: careerServices.length }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '99%', label: 'Success Rate', icon: Target }
  ];

  const ServiceCard = ({ service, index }) => (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
        service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
      }}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">{service.price}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
        {service.features && (
        <div className="space-y-3 mb-6">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-3">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        )}
        
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
              Comprehensive solutions for modern businesses - from stunning websites to intelligent AI automation
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Website Development */}
          {activeTab === 'websites' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Website Development
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Modern, responsive websites that convert visitors into customers and grow your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {websiteServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* AI Automation */}
          {activeTab === 'ai' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next-Gen AI Automation
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Intelligent AI assistants that work 24/7 to grow your business, save time, and improve customer experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>

              {/* How AI Works */}
              <div className="mt-20">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-center mb-12">How AI Agents Transform Your Business</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        step: "1",
                        title: "Setup & Training",
                        description: "We configure and train your AI agent with your business knowledge and processes",
                        icon: Settings
                      },
                      {
                        step: "2", 
                        title: "Deploy & Monitor",
                        description: "Your AI agent starts working immediately, handling customer interactions intelligently",
                        icon: Play
                      },
                      {
                        step: "3",
                        title: "Optimize & Scale", 
                        description: "Continuous improvement and scaling as your business grows and evolves",
                        icon: TrendingUp
                      }
                    ].map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {item.step}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Design Services */}
          {activeTab === 'design' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Design & Branding
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Create a memorable brand identity that resonates with your audience and stands out from the competition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {designServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Career Services */}
          {activeTab === 'career' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Career Accelerator
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Accelerate your career growth with professional portfolio development and strategic guidance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {careerServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose ISR Codecraft?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The benefits that make us the preferred choice for digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time & Money",
                description: "Automated processes reduce manual work by 70%+ and cut operational costs significantly",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Shield,
                title: "24/7 Customer Service",
                description: "AI agents work round the clock, ensuring no customer inquiry goes unanswered",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description: "Our technology grows with your business, handling increased demand automatically",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Award,
                title: "Professional Image",
                description: "Modern websites and branding that builds trust and credibility with your audience",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Sparkles,
                title: "Competitive Advantage",
                description: "Stay ahead of competitors with cutting-edge AI technology and modern design",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: Target,
                title: "Ongoing Support",
                description: "Continuous maintenance, updates, and optimization to ensure peak performance",
                color: "from-teal-500 to-green-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Let's discuss your project and create a custom solution that fits your business needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <style >{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default Services;