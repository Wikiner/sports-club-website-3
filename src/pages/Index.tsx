import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />

      <StatisticsSection />
      <FeaturesSection />
      <NewsSection />
      <GallerySection />
      <TestimonialsSection />

      {/* Расширенный раздел о клубе */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
              О нашем клубе
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              FitClub — это не просто фитнес-центр, это место, где рождаются
              чемпионы! Более 10 лет мы помогаем людям достигать своих
              спортивных целей, создавать здоровые привычки и находить
              единомышленников.
            </p>
          </div>

          {/* История клуба */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Наша история
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Основанный в 2014 году тренером-энтузиастом Алексеем Петровым,
                FitClub начинался как маленький зал в подвале. Сегодня это
                современный фитнес-центр площадью 2000 м² с самым передовым
                оборудованием.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                За эти годы через наши двери прошли тысячи клиентов, каждый из
                которых достиг своих целей благодаря профессиональному подходу и
                дружной атмосфере.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover-scale animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="История клуба"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    5000+
                  </div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>

          {/* Миссия */}
          <div className="text-center bg-gradient-to-r from-primary via-purple-600 to-purple-800 text-white rounded-3xl p-12 mb-20 shadow-2xl animate-fade-in">
            <h3 className="text-4xl font-bold mb-6">Наша миссия</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Мы верим, что каждый человек заслуживает быть здоровым и
              счастливым. Наша миссия — создать пространство, где люди могут
              трансформировать свою жизнь через спорт, получая поддержку
              профессионалов и мотивацию от сообщества единомышленников.
            </p>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Контактная информация
            </h2>
            <p className="text-xl text-gray-300">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover-scale">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">
                ул. Спортивная, 15
                <br />
                Москва, 123456
              </p>
            </div>

            <div className="text-center hover-scale">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>

            <div className="text-center hover-scale">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@fitclub.ru</p>
            </div>

            <div className="text-center hover-scale">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
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
