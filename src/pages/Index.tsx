import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import InteractiveSchedule from "@/components/InteractiveSchedule";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />

      <NewsSection />

      {/* Расширенный раздел о клубе */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
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
            <div>
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
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="История клуба"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>

          {/* Миссия */}
          <div className="text-center bg-primary text-white rounded-3xl p-12 mb-20">
            <h3 className="text-4xl font-bold mb-6">Наша миссия</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Мы верим, что каждый человек заслуживает быть здоровым и
              счастливым. Наша миссия — создать пространство, где люди могут
              трансформировать свою жизнь через спорт, получая поддержку
              профессионалов и мотивацию от сообщества единомышленников.
            </p>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  Новейшие тренажеры от ведущих мировых производителей для
                  эффективных тренировок
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
                  Команда из 15+ сертифицированных тренеров с международными
                  квалификациями
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
                  Персональные программы и постоянное сопровождение на пути к
                  вашим целям
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="Clock"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Удобный график</h3>
                <p className="text-gray-600">
                  Работаем 18 часов в день, 7 дней в неделю для вашего комфорта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <InteractiveSchedule />

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
