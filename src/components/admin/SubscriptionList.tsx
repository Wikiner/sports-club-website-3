import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Subscription } from "@/hooks/useSubscriptions";

interface SubscriptionListProps {
  subscriptions: Subscription[];
  onEdit: (subscription: Subscription) => void;
  onDelete: (id: string) => void;
}

const SubscriptionList = ({
  subscriptions,
  onEdit,
  onDelete,
}: SubscriptionListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="List" size={20} />
          Список абонементов
        </CardTitle>
      </CardHeader>
      <CardContent>
        {subscriptions.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            Абонементы не добавлены
          </p>
        ) : (
          <div className="grid gap-4">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">
                        {subscription.name}
                      </h3>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {subscription.price} ₽
                      </Badge>
                      {!subscription.isActive && (
                        <Badge variant="destructive">Неактивен</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {subscription.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      Длительность: {subscription.duration}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {subscription.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(subscription)}
                    >
                      <Icon name="Edit" size={16} className="mr-1" />
                      Редактировать
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onDelete(subscription.id)}
                    >
                      <Icon name="Trash2" size={16} className="mr-1" />
                      Удалить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionList;
