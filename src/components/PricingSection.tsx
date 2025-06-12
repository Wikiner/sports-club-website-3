import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useSubscriptions } from "@/hooks/useSubscriptions";

const PricingSection = () => {
  const { subscriptions } = useSubscriptions();

  // Показываем только активные абонементы
  const activeSubscriptions = subscriptions.filter((sub) => sub.isActive);

  const handleSubscribe = (subscriptionName: string) => {
    // Здесь будет логика записи на абонемент
    alert(`Запись на абонемент "${subscriptionName}" - функция в разработке`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Абонементы и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий абонемент для достижения ваших фитнес-целей
          </p>
        </div>

        {activeSubscriptions.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="Calendar"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <p className="text-gray-500 text-lg">Абонементы скоро появятся</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeSubscriptions.map((subscription) => (
              <Card
                key={subscription.id}
                className="hover:shadow-lg transition-shadow relative"
              >
                {subscription.name.toLowerCase().includes("популярный") && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {subscription.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {subscription.price.toLocaleString()}₽
                    </span>
                    <span className="text-gray-600 ml-2">
                      / {subscription.duration} дн.
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {subscription.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-3 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    onClick={() => handleSubscribe(subscription.name)}
                  >
                    Выбрать абонемент
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
