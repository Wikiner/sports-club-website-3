import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatisticsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "5000+",
      label: "Довольных клиентов",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: "Trophy",
      number: "250+",
      label: "Достижений",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: "Dumbbell",
      number: "15",
      label: "Видов тренировок",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: "Star",
      number: "4.9",
      label: "Рейтинг клуба",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Наши достижения
          </h2>
          <p className="text-xl text-gray-600">
            Цифры, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <CardContent className="p-8">
                <div
                  className={`${stat.bgColor} rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
                >
                  <Icon name={stat.icon} size={40} className={stat.color} />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
