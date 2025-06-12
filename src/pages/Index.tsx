import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import InteractiveSchedule from "@/components/InteractiveSchedule";
import PricingSection from "@/components/PricingSection";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />

      <NewsSection />

      {/* О клубе */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О нашем клубе
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FitClub — это современный фитнес-центр, где каждый найдет
              тренировку по душе. Мы создаем комфортную атмосферу для достижения
              ваших спортивных целей.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="Dumbbell"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">
                  Современное оборудование
                </h3>
                <p className="text-gray-600">
                  Новейшие тренажеры от ведущих мировых производителей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="Users"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">
                  Профессиональные тренеры
                </h3>
                <p className="text-gray-600">
                  Сертифицированные специалисты с многолетним опытом
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="Heart"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">
                  Индивидуальный подход
                </h3>
                <p className="text-gray-600">
                  Персональные программы тренировок для каждого клиента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <InteractiveSchedule />

      <PricingSection />

      {/* Контакты */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контактная информация</h2>
            <p className="text-xl text-gray-300">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                size={32}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">
                ул. Спортивная, 15
                <br />
                Москва, 123456
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Phone"
                size={32}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>

            <div className="text-center">
              <Icon
                name="Mail"
                size={32}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@fitclub.ru</p>
            </div>

            <div className="text-center">
              <Icon
                name="Clock"
                size={32}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Режим работы</h3>
              <p className="text-gray-300">
                Ежедневно
                <br />
                06:00 - 24:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
