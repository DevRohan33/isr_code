import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Code, 
  Palette, 
  TrendingUp, 
  Calendar, 
  Star,
  Users,
  Target,
  Lightbulb,
  Award,
  Heart,
  Zap,
  Shield,
  Sparkles,
  Quote,
  Linkedin,
  Github,
  Twitter,

} from "lucide-react";
import Layout from '@/components/Layout';
const AdvancedAboutPage = () => {

  const [activeFounder, setActiveFounder] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const founders = [
    {
      name: "Rohan Parveag",
      role: "Web Developer & Automation Expert",
      icon: Code,
      description: "The tech brain behind our AI agents and backend systems. Rohan ensures that every website we build runs smoothly, integrates automation seamlessly, and stays future-ready.",
      skills: ["Full-Stack Development", "AI Integration", "Backend Systems", "Automation"],
      experience: "5+ Years",
      projects: "50+",
      image: "/placeholder.svg",
      gradient: "from-blue-500 to-cyan-500",
      quote: "Technology should empower businesses, not complicate them.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sumit Bhuiya",
      role: "Designer & Web Developer",
      icon: Palette,
      description: "The creative force shaping your brand's online presence. From sleek interfaces to functional user experiences, Sumit makes sure your website not only works but wows.",
      skills: ["UI/UX Design", "Frontend Development", "Brand Design", "User Experience"],
      experience: "4+ Years",
      projects: "80+",
      image: "/placeholder.svg", // Placeholder - replace with actual image
      gradient: "from-purple-500 to-pink-500",
      quote: "Great design is not just what it looks like - it's how it works.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Isha Bisal",
      role: "Marketing Head & Web Developer",
      icon: TrendingUp,
      description: "The bridge between technology and business strategy. Isha makes sure your website and automation tools actually drive growth, reach the right audience, and deliver results.",
      skills: ["Digital Marketing", "Business Strategy", "Growth Hacking", "Analytics"],
      experience: "3+ Years",
      projects: "60+",
      image: "/placeholder.svg", // Placeholder - replace with actual image
      gradient: "from-emerald-500 to-teal-500",
      quote: "Marketing is not about the stuff you make, but about the stories you tell.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 2000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = founders[activeFounder].icon;

  const milestones = [
    {
      date: "August 15, 2025",
      title: "ISR Codecraft Founded",
      description: "Started with a mission to make powerful websites and AI automation accessible to small businesses",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500"
    },
    {
      date: "September 2025",
      title: "First AI Automation Success",
      description: "Deployed our first AI customer service agent, saving clients 15+ hours per week",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      date: "December 2025",
      title: "100+ Happy Clients",
      description: "Reached our first major milestone with satisfied customers across various industries",
      icon: Award,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Premium technology should be accessible to businesses of all sizes",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Innovation", 
      description: "We stay ahead of technology trends to keep our clients competitive",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Simplicity",
      description: "Complex solutions made simple and easy to use for everyone",
      icon: Star,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Results",
      description: "Every solution we build is designed to deliver measurable business impact",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support", icon: Shield },
    { number: "99%", label: "Success Rate", icon: Target }
  ];
  
  
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        
        {/* Interactive background */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(79, 70, 229, 0.4), rgba(168, 85, 247, 0.2), transparent 40%)`
          }}
        ></div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            <span>Building the Future Since 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Building the Future
            </span>
            <span className="block text-4xl md:text-5xl mt-4 text-yellow-300">
              One Website at a Time 🚀
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed mb-12">
            We're not just a web development company. We're your partners in digital transformation, 
            making <span className="text-yellow-300 font-semibold">powerful technology accessible</span> to every business.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Founded on <span className="font-bold text-blue-600">August 15, 2025</span>, ISR Codecraft was created with a single mission:
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    "To make powerful websites and intelligent automation accessible to everyone — without the heavy price tag."
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe every small business deserves the same technology advantages as big companies. 
                  That's why we deliver modern, high-performance websites and AI-powered automation at rates 
                  small businesses can afford — with minimal maintenance, maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate team behind ISR Codecraft, combining technical expertise with creative vision to build the future.
          </p>
        </div>

        {/* Featured Founder */}
        <div className="mb-12 transition-all duration-700 ease-in-out">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              
              {/* Image */}
              <div className="md:w-1/3 relative">
                <img
                  src={founders[activeFounder].image}
                  alt={founders[activeFounder].name}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${founders[activeFounder].gradient} opacity-20`}></div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${founders[activeFounder].gradient} mr-4`}>
                    <ActiveIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{founders[activeFounder].name}</h3>
                    <p className="text-lg text-gray-600">{founders[activeFounder].role}</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Quote className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg italic text-gray-600">"{founders[activeFounder].quote}"</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {founders[activeFounder].description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                    <p className="font-bold text-lg">{founders[activeFounder].experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Projects</p>
                    <p className="font-bold text-lg">{founders[activeFounder].projects}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {founders[activeFounder].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href={founders[activeFounder].social.linkedin} className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href={founders[activeFounder].social.github} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href={founders[activeFounder].social.twitter} className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Navigation */}
        <div className="flex justify-center space-x-4">
          {founders.map((founder, index) => {
            const Icon = founder.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveFounder(index)}
                className={`group p-4 rounded-2xl transition-all duration-300 ${
                  activeFounder === index
                    ? "bg-white shadow-lg transform scale-105"
                    : "bg-white/70 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${founder.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-sm text-gray-900">{founder.name.split(" ")[0]}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>

      {/* Vision Section */}
      <section id="vision" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just building websites. We're moving small businesses forward by:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Using Latest Technologies",
                description: "We keep small businesses ahead of the curve with cutting-edge web technologies and AI solutions",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Creating Low-Maintenance Solutions",
                description: "Our solutions are designed to run smoothly with minimal intervention, so you can focus on running your business",
                icon: "⚙️",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Automating Repetitive Tasks",
                description: "We save you time, money, and stress by automating customer service, scheduling, and lead generation",
                icon: "🤖",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((vision, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full transform group-hover:scale-105">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${vision.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{vision.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{vision.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{vision.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From inception to impact - see how we've grown and the milestones we've achieved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start group mb-12 last:mb-0">
                <div className="flex-shrink-0 relative">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-12 left-6 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:transform group-hover:scale-105">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{milestone.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at ISR Codecraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center h-full transform group-hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-yellow-300">💡</span> Whether you need a stunning online presence or a smart AI assistant,<br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              we'll make it happen — faster, cheaper, and smarter.
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              Let's Work Together
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style >{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default AdvancedAboutPage;