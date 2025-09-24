import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { faqData } from "../../ChatbotData";



const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input) return;

    const userMessage = { from: "user", text: input };
    const matched = faqData.find(faq =>
      faq.question.toLowerCase().includes(input.toLowerCase())
    );

    const botMessage = {
      from: "bot",
      text: matched ? matched.answer : "Sorry, I don't know the answer."
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Circular chatbot 
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    );
  }

  // Expanded chatbot
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 border border-gray-200 rounded-lg flex flex-col bg-white shadow-lg transform transition-all duration-300 ease-in-out">
      {/* Header with close button */}
      <div className="bg-blue-800 text-white p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">Chat Support</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="w-8 h-8  rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-2 p-3">
        {messages.length === 0 && (
          <div className="text-gray-500 text-center py-4 text-sm">
            👋 Hello! How can I help you today?
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md max-w-xs ${
              msg.from === "user" 
                ? "bg-blue-100 self-end ml-auto text-right" 
                : "bg-gray-100 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="p-3 border-t border-gray-200 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          className="flex-1 border border-gray-200 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;