import { useState } from "react";
import Header from "@/components/Header";
import OnlineChat from "@/components/OnlineChat";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "form">("chat");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Поддержка и контакты
            </h1>
            <p className="text-gray-600">
              Мы всегда готовы помочь! Выберите удобный способ связи
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <Button
                variant={activeTab === "chat" ? "default" : "ghost"}
                className={`flex-1 rounded-none py-4 ${
                  activeTab === "chat"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("chat")}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн-чат
              </Button>
              <Button
                variant={activeTab === "form" ? "default" : "ghost"}
                className={`flex-1 rounded-none py-4 ${
                  activeTab === "form"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("form")}
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Форма обратной связи
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === "chat" ? <OnlineChat /> : <ContactForm />}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon
                name="Phone"
                size={32}
                className="text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon
                name="Mail"
                size={32}
                className="text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">support@fitclub.ru</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon
                name="MapPin"
                size={32}
                className="text-primary mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">ул. Спортивная, 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
