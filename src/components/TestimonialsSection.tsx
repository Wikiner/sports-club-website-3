import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Соколова",
      role: "Бизнесмен",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "FitClub изменил мою жизнь! Профессиональные тренеры, отличная атмосфера и результат уже через месяц. Рекомендую всем!",
    },
    {
      name: "Максим Петров",
      role: "IT-специалист",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Удобное расположение, современное оборудование и индивидуальный подход. Тренируюсь здесь уже 2 года и очень доволен!",
    },
    {
      name: "Елена Васильева",
      role: "Дизайнер",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Лучший фитнес-клуб в городе! Групповые занятия супер энергичные, персонал внимательный. Достигла всех поставленных целей.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже достиг своих целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
