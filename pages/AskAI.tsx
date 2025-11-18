import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/Card';
import { Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const AskAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Halo! Saya teman sehatmu. Ada yang ingin kamu tanyakan tentang gizi atau cara mencintai tubuhmu hari ini?", timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: Message = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Maaf, terjadi kesalahan koneksi.", timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in h-[calc(100vh-180px)] flex flex-col">
      <div className="text-center mb-6 flex-shrink-0">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-1 rounded-full text-purple-800 font-bold text-sm mb-2">
            <Sparkles size={14} /> Powered by Gemini AI
        </div>
        <h2 className="text-2xl font-bold text-pink-900">Teman Cerita</h2>
        <p className="text-stone-600 text-sm">Ruang aman untuk bertanya tentang nutrisi dan perasaanmu.</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden p-0 shadow-lg border-pink-100 bg-white/80 backdrop-blur-sm">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-stone-200 text-stone-600' : 'bg-pink-200 text-pink-800'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-white border border-stone-100 text-stone-800 rounded-tr-none' : 'bg-pink-50 border border-pink-100 text-stone-800 rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-pink-200 text-pink-800 flex items-center justify-center"><Bot size={16} /></div>
               <div className="bg-pink-50 p-3 rounded-2xl rounded-tl-none text-stone-500 text-sm italic flex items-center gap-2">
                  <span className="animate-bounce">•</span><span className="animate-bounce delay-75">•</span><span className="animate-bounce delay-150">•</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-pink-50">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya tentang nutrisi atau body image..."
              className="flex-1 p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-stone-50"
            />
            <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AskAI;