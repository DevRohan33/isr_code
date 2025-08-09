import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Phone, MessageSquare } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Training data for the chatbot
  const trainingData = {
    greetings: [
      "hello", "hi", "hey", "good morning", "good afternoon", "good evening"
    ],
    services: {
      "website development": {
        keywords: ["website", "web development", "site", "web design", "landing page", "ecommerce"],
        response: "🌐 **Website Development Services:**\n\n• Custom Website Design\n• E-commerce Solutions\n• Responsive Mobile Design\n• SEO Optimization\n• CMS Integration\n• Performance Optimization\n\nWe create modern, fast, and user-friendly websites that drive results!"
      },
      "ai automation": {
        keywords: ["ai", "automation", "bot", "chatbot", "artificial intelligence", "machine learning"],
        response: "🤖 **AI Automation Services:**\n\n• Custom AI Chatbots\n• Process Automation\n• Lead Generation Bots\n• Customer Support AI\n• Data Analysis Tools\n• Workflow Automation\n\nTransform your business with intelligent automation solutions!"
      },
      "design branding": {
        keywords: ["design", "branding", "logo", "graphics", "brand identity", "visual"],
        response: "🎨 **Design & Branding Services:**\n\n• Logo Design\n• Brand Identity\n• Marketing Materials\n• UI/UX Design\n• Social Media Graphics\n• Print Design\n\nCreate a memorable brand that stands out from the competition!"
      },
      "career program": {
        keywords: ["career", "training", "course", "accelerator", "program", "learning"],
        response: "🚀 **Career Accelerator Programs:**\n\n• Full-Stack Development\n• AI & Machine Learning\n• Digital Marketing\n• UI/UX Design\n• Project-Based Learning\n• Job Placement Support\n\nBoost your career with industry-relevant skills!"
      }
    },
    pricing: {
      keywords: ["price", "cost", "budget", "quote", "estimate", "pricing"],
      response: "💰 **Pricing Information:**\n\nOur pricing varies based on project requirements. We offer:\n\n• Competitive rates\n• Flexible payment plans\n• Custom packages\n• Free consultations\n\nContact us for a personalized quote!"
    },
    contact: {
      keywords: ["contact", "reach", "call", "whatsapp", "phone", "number"],
      response: "📞 **Get in Touch:**\n\n**Call/WhatsApp:** 8585059644\n\nWe're available to discuss your project and provide personalized solutions. Feel free to reach out anytime!"
    },
    portfolio: {
      keywords: ["portfolio", "work", "examples", "projects", "showcase"],
      response: "💼 **Our Portfolio:**\n\nWe've successfully delivered 100+ projects including:\n\n• E-commerce websites\n• SaaS applications\n• Mobile apps\n• AI chatbots\n• Brand identities\n\nContact us to see specific examples relevant to your industry!"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial welcome messages
      const welcomeMessages = [
        {
          type: "bot",
          content: "👋 Hi! I'm here to help you learn more about ISR Codecraft's services.",
          timestamp: new Date()
        },
        {
          type: "bot",
          content: "I can answer questions about:\n• Website Development\n• AI Automation Agents\n• Design & Branding\n• Career Accelerator Programs",
          timestamp: new Date()
        },
        {
          type: "bot",
          content: "What would you like to know more about?",
          timestamp: new Date()
        }
      ];
      setMessages(welcomeMessages);
    }
  }, [isOpen]);

  const findBestResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (trainingData.greetings.some(greeting => input.includes(greeting))) {
      return "Hello! 👋 Welcome to ISR Codecraft. I'm here to help you with information about our services. What can I assist you with today?";
    }

    // Check for service-related queries
    for (const [service, data] of Object.entries(trainingData.services)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }

    // Check for other categories
    for (const [category, data] of Object.entries(trainingData)) {
      if (category !== 'services' && category !== 'greetings') {
        if (
          typeof data === 'object' &&
          !Array.isArray(data) &&
          'keywords' in data &&
          Array.isArray((data as any).keywords)
        ) {
          if ((data as any).keywords.some(keyword => input.includes(keyword))) {
            return (data as any).response;
          }
        }
      }
    }
    

    // Default response with contact info
    return "I'd be happy to help you with that! For detailed information about your specific needs, please contact us:\n\n📞 **Call/WhatsApp:** 8585059644\n\nOur team will provide personalized assistance and answer all your questions!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        content: findBestResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918585059644", "_blank");
  };

  const makeCall = () => {
    window.open("tel:+918585059644", "_blank");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-110"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white border rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">ISR Codecraft AI</h3>
                <p className="text-sm opacity-90">Online • Ready to help</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={openWhatsApp}
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 p-2"
                  title="WhatsApp"
                >
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button
                  onClick={makeCall}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 p-2"
                  title="Call"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white border rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border rounded-lg rounded-bl-none shadow-sm p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white rounded-b-xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-500">
                Need immediate help? 
                <button onClick={openWhatsApp} className="text-blue-600 hover:underline ml-1">
                  WhatsApp us
                </button> or 
                <button onClick={makeCall} className="text-blue-600 hover:underline ml-1">
                  Call 8585059644
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;