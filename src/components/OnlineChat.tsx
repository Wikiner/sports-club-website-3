import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
}

const OnlineChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Как дела с вашими тренировками?",
      sender: "support",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: 2,
      text: "Привет! Всё отлично, спасибо за вопрос!",
      sender: "user",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: 3,
      text: "Отлично! Если возникнут вопросы по тренировкам или оборудованию, всегда обращайтесь 💪",
      sender: "support",
      timestamp: new Date(Date.now() - 180000),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Имитация ответа поддержки
    setTimeout(() => {
      setIsTyping(false);
      const supportMessage: Message = {
        id: messages.length + 2,
        text: "Спасибо за ваше сообщение! Наш специалист скоро свяжется с вами.",
        sender: "support",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col h-96">
      {/* Chat Header */}
      <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <Icon name="Headphones" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Поддержка FitClub</h3>
          <p className="text-sm text-green-500 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Онлайн
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
        <Input
          type="text"
          placeholder="Напишите сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1"
        />
        <Button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          size="sm"
        >
          <Icon name="Send" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default OnlineChat;
