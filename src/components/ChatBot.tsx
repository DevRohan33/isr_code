import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import aiChatIcon from "@/assets/ai-chat-icon.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="gradient"
          size="lg"
          className="rounded-full w-16 h-16 shadow-xl animate-pulse-glow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <img src={aiChatIcon} alt="AI Assistant" className="h-8 w-8" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card border rounded-lg shadow-xl z-50">
          <div className="p-4 border-b gradient-primary text-white rounded-t-lg">
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm opacity-90">How can I help you today?</p>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  👋 Hi! I'm here to help you learn more about ISR Codecraft's services.
                </p>
              </div>
              
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  I can answer questions about:
                  <br />• Website Development
                  <br />• AI Automation Agents
                  <br />• Design & Branding
                  <br />• Career Accelerator Programs
                </p>
              </div>
              
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  What would you like to know more about?
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;