import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Subscription, UserSubscription } from "@/hooks/useSubscriptions";

interface SubscriptionListProps {
  subscriptions: Subscription[];
  userSubscriptions: UserSubscription[];
  onEdit: (sub: Subscription) => void;
  onDelete: (id: string) => void;
  onUpdatePayment: (id: string, status: UserSubscription["status"]) => void;
}

const SubscriptionList = ({
  subscriptions,
  userSubscriptions,
  onEdit,
  onDelete,
  onUpdatePayment,
}: SubscriptionListProps) => {
  const getStatusColor = (status: UserSubscription["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "unpaid":
        return "bg-red-100 text-red-800";
      case "expired":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: UserSubscription["status"]) => {
    switch (status) {
      case "paid":
        return "Оплачен";
      case "unpaid":
        return "Не оплачен";
      case "expired":
        return "Истёк";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Package" size={20} />
            Типы абонементов
          </CardTitle>
        </CardHeader>
        <CardContent>
          {subscriptions.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Абонементы не добавлены
            </p>
          ) : (
            <div className="grid gap-4">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{sub.name}</h3>
                        <Badge variant={sub.isActive ? "default" : "secondary"}>
                          {sub.isActive ? "Активен" : "Неактивен"}
                        </Badge>
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">
                        {sub.price} ₽
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Срок: {sub.duration} дней
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {sub.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <Icon
                              name="Check"
                              size={14}
                              className="text-green-500"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onEdit(sub)}
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => onDelete(sub.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            Абонементы пользователей
          </CardTitle>
        </CardHeader>
        <CardContent>
          {userSubscriptions.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Активных абонементов нет
            </p>
          ) : (
            <div className="space-y-4">
              {userSubscriptions.map((userSub) => (
                <div key={userSub.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-semibold">{userSub.userName}</h3>
                      <p className="text-sm text-gray-600">
                        {userSub.subscriptionName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(userSub.startDate).toLocaleDateString()} -
                        {new Date(userSub.endDate).toLocaleDateString()}
                      </p>
                      <p className="font-bold text-primary">
                        {userSub.price} ₽
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={getStatusColor(userSub.status)}>
                        {getStatusLabel(userSub.status)}
                      </Badge>
                      <Select
                        value={userSub.status}
                        onValueChange={(value: UserSubscription["status"]) =>
                          onUpdatePayment(userSub.id, value)
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">Оплачен</SelectItem>
                          <SelectItem value="unpaid">Не оплачен</SelectItem>
                          <SelectItem value="expired">Истёк</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionList;
