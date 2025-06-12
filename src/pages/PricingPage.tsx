import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { Link } from "react-router-dom";
import PurchaseButton from "@/components/PurchaseButton";

const PricingPage = () => {
  const { subscriptions, purchaseState, purchaseSubscription } =
    useSubscriptions();
  const activeSubscriptions = subscriptions.filter((sub) => sub.isActive);

  const handleSubscribe = (
    subscriptionId: string,
    subscriptionName: string,
  ) => {
    purchaseSubscription(subscriptionId, subscriptionName);
  };

  return (
    <>
      <Header />

      {/* Hero секция */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Тарифные планы
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Выберите подходящий абонемент и начните свой путь к идеальной форме
            уже сегодня
          </p>
        </div>
      </section>

      {/* Основные абонементы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Абонементы и цены
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Гибкие тарифы для любых потребностей и бюджета
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {activeSubscriptions.map((subscription) => (
                <Card
                  key={subscription.id}
                  className={`
                    hover:shadow-2xl transition-all duration-300 relative overflow-hidden
                    ${
                      purchaseState.subscriptionId === subscription.id &&
                      purchaseState.isSuccess
                        ? "ring-4 ring-green-400 shadow-green-200 animate-pulse"
                        : ""
                    }
                    ${
                      purchaseState.subscriptionId === subscription.id &&
                      purchaseState.isLoading
                        ? "scale-105 shadow-xl"
                        : ""
                    }
                  `}
                >
                  {subscription.name.toLowerCase().includes("популярный") && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      🔥 Популярный
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4 bg-gradient-to-br from-gray-50 to-white">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {subscription.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-primary">
                        {subscription.price.toLocaleString()}₽
                      </span>
                      <span className="text-gray-600 ml-2 text-lg">
                        / {subscription.duration} дн.
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {Math.round(subscription.price / subscription.duration)}{" "}
                      ₽/день
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <ul className="space-y-4 mb-8">
                      {subscription.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <Icon
                            name="Check"
                            size={20}
                            className="text-green-500 mr-3 flex-shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <PurchaseButton
                      subscriptionId={subscription.id}
                      subscriptionName={subscription.name}
                      purchaseState={purchaseState}
                      onPurchase={handleSubscribe}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Персональные тренировки и специальные программы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="User"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">
                  Персональная тренировка
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  2,500₽
                </div>
                <p className="text-gray-600 mb-4">
                  Индивидуальная работа с тренером
                </p>
                <Button variant="outline" className="w-full">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon
                  name="Users"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Групповая тренировка</h3>
                <div className="text-3xl font-bold text-primary mb-2">800₽</div>
                <p className="text-gray-600 mb-4">
                  Занятие в малой группе до 6 человек
                </p>
                <Button variant="outline" className="w-full">
                  Записаться
                </Button>
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
                  Консультация диетолога
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  1,500₽
                </div>
                <p className="text-gray-600 mb-4">Составление плана питания</p>
                <Button variant="outline" className="w-full">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и начните трансформацию уже
            сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на тренировку
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
