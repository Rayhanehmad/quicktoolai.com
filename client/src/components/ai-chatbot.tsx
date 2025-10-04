import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles, X, MessageSquare, Calculator, Search, FileText, TrendingUp } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickActions = [
  { icon: Calculator, label: 'Math Help', prompt: 'Help me solve a math problem step by step' },
  { icon: Search, label: 'Find Tool', prompt: 'Which tool should I use for' },
  { icon: FileText, label: 'Summarize', prompt: 'Summarize this text:' },
  { icon: TrendingUp, label: 'Analyze Data', prompt: 'Analyze these numbers:' },
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! 👋 I\'m your AI assistant powered by GPT-5. I can:\n\n🧮 Solve math problems step-by-step\n🔍 Find the right calculator for your needs\n📝 Summarize & analyze text\n📊 Provide data insights\n\nTry the quick actions below or ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [showQuickActions, setShowQuickActions] = useState(true);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest('POST', '/api/ai/chat', { message, history: messages });
      return await response.json();
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    },
  });

  const handleSend = (messageOverride?: string) => {
    const messageToSend = messageOverride || input.trim();
    if (!messageToSend) return;
    
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setInput('');
    setShowQuickActions(false);
    chatMutation.mutate(messageToSend);
  };

  const handleQuickAction = (prompt: string) => {
    setInput(prompt + ' ');
    setShowQuickActions(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full gradient-bg text-white shadow-lg hover:scale-110 transition-transform z-50"
        data-testid="button-open-chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] glass-card neomorphic rounded-2xl shadow-2xl z-50 flex flex-col animate-slide-up"
          data-testid="chat-window">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-to-r from-primary/20 to-accent/20 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  AI Analysis Assistant
                  <Sparkles className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-xs text-muted-foreground">Powered by GPT-5</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-primary to-accent text-white' 
                    : 'bg-muted/50 border border-border'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-muted/50 border border-border rounded-2xl p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {showQuickActions && messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs font-semibold mb-2 text-muted-foreground">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleQuickAction(action.prompt)}
                    variant="outline"
                    size="sm"
                    className="h-auto py-2 flex flex-col items-center gap-1 hover:bg-primary/10"
                  >
                    <action.icon className="w-4 h-4" />
                    <span className="text-xs">{action.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 h-11"
                disabled={chatMutation.isPending}
                data-testid="input-chat"
              />
              <Button 
                onClick={() => handleSend()} 
                className="gradient-bg text-white h-11 w-11 p-0"
                disabled={chatMutation.isPending || !input.trim()}
                data-testid="button-send"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by GPT-5 • Calculator Helper • Smart Analysis
            </p>
          </div>
        </div>
      )}
    </>
  );
}
