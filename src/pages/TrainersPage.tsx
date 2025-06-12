import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTrainers } from "@/hooks/useTrainers";
import Icon from "@/components/ui/icon";

const TrainersPage = () => {
  const { trainers } = useTrainers();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наши тренеры
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные тренеры FitClub помогут вам достичь ваших
            фитнес-целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {trainer.name}
                </h3>
                <Badge variant="secondary" className="mb-3">
                  {trainer.specialization}
                </Badge>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Опыт: {trainer.experience}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="mr-2 text-yellow-500"
                    />
                    <span>Сертифицированный тренер</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      size={16}
                      className="mr-2 text-blue-500"
                    />
                    <span>Индивидуальный подход</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Почему выбирают наших тренеров?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">
                Профессиональное образование
              </h3>
              <p className="text-gray-600 text-sm">
                Все тренеры имеют профильное образование и регулярно повышают
                квалификацию
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600 text-sm">
                Каждый тренер учитывает ваши особенности и цели для
                максимального результата
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Гарантированный результат</h3>
              <p className="text-gray-600 text-sm">
                Наши тренеры помогли сотням клиентов достичь своих фитнес-целей
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersPage;
