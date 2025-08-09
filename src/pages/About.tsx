import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, Code, Palette, TrendingUp, Calendar } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Rohan Parveag",
      role: "Web Developer & Automation Expert",
      icon: Code,
      description: "The tech brain behind our AI agents and backend systems. Rohan ensures that every website we build runs smoothly, integrates automation seamlessly, and stays future-ready.",
      skills: ["Full-Stack Development", "AI Integration", "Backend Systems", "Automation"]
    },
    {
      name: "Sumit Bhuiya",
      role: "Designer & Web Developer",
      icon: Palette,
      description: "The creative force shaping your brand's online presence. From sleek interfaces to functional user experiences, Sumit makes sure your website not only works but wows.",
      skills: ["UI/UX Design", "Frontend Development", "Brand Design", "User Experience"]
    },
    {
      name: "Isha Bisal",
      role: "Marketing Head & Web Developer",
      icon: TrendingUp,
      description: "The bridge between technology and business strategy. Isha makes sure your website and automation tools actually drive growth, reach the right audience, and deliver results.",
      skills: ["Digital Marketing", "Business Strategy", "Growth Hacking", "Analytics"]
    }
  ];

  const milestones = [
    {
      date: "August 15, 2025",
      title: "ISR Codecraft Founded",
      description: "Started with a mission to make powerful websites and AI automation accessible to small businesses"
    },
    {
      date: "2025",
      title: "First AI Automation Success",
      description: "Deployed our first AI customer service agent, saving clients 15+ hours per week"
    },
    {
      date: "2025",
      title: "100+ Happy Clients",
      description: "Reached our first major milestone with satisfied customers across various industries"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🚀</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Building the Future of Small Business, One Website at a Time
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Founded on August 15, 2025, ISR Codecraft was created with a single mission:
                </p>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  To make powerful websites and intelligent automation accessible to everyone — without the heavy price tag.
                </h3>
                <p className="text-lg text-muted-foreground">
                  We believe every small business deserves the same technology advantages as big companies. 
                  That's why we deliver modern, high-performance websites and AI-powered automation at rates 
                  small businesses can afford — with minimal maintenance, maximum impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate team behind ISR Codecraft, combining technical expertise with creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-lg gradient-primary">
                      <founder.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{founder.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {founder.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-muted text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just building websites. We're moving small businesses forward by:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Using Latest Technologies",
                description: "We keep small businesses ahead of the curve with cutting-edge web technologies and AI solutions",
                icon: "🚀"
              },
              {
                title: "Creating Low-Maintenance Solutions",
                description: "Our solutions are designed to run smoothly with minimal intervention, so you can focus on running your business",
                icon: "⚙️"
              },
              {
                title: "Automating Repetitive Tasks",
                description: "We save you time, money, and stress by automating customer service, scheduling, and lead generation",
                icon: "🤖"
              }
            ].map((vision, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{vision.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{vision.title}</h3>
                  <p className="text-muted-foreground">{vision.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From inception to impact - see how we've grown and the milestones we've achieved.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1.5"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-border ml-1.5 mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{milestone.date}</span>
                    </div>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at ISR Codecraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Accessibility",
                description: "Premium technology should be accessible to businesses of all sizes",
                icon: "🌟"
              },
              {
                title: "Innovation",
                description: "We stay ahead of technology trends to keep our clients competitive",
                icon: "💡"
              },
              {
                title: "Simplicity",
                description: "Complex solutions made simple and easy to use for everyone",
                icon: "✨"
              },
              {
                title: "Results",
                description: "Every solution we build is designed to deliver measurable business impact",
                icon: "🎯"
              }
            ].map((value, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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
            💡 Whether you need a stunning online presence or a smart AI assistant, we'll make it happen — faster, cheaper, and smarter.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;