import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Dumbbell",
      title: "Современное оборудование",
      description:
        "Новейшие тренажеры от ведущих мировых производителей для эффективных тренировок",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Users",
      title: "Профессиональные тренеры",
      description:
        "Команда из 15+ сертифицированных тренеров с международными квалификациями",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description:
        "Персональные программы и постоянное сопровождение на пути к вашим целям",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "Clock",
      title: "Удобный график",
      description:
        "Работаем 18 часов в день, 7 дней в неделю для вашего комфорта",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Современные системы безопасности и медицинского контроля",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "Zap",
      title: "Быстрые результаты",
      description:
        "Эффективные методики для достижения целей в кратчайшие сроки",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Почему выбирают FitClub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем всё необходимое для достижения ваших фитнес-целей в
            комфортной и мотивирующей атмосфере
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover-scale border-0 bg-white/60 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon name={feature.icon} size={40} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
