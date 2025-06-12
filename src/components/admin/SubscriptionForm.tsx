import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { Subscription } from "@/hooks/useSubscriptions";
import { toast } from "sonner";

interface SubscriptionFormProps {
  onSubmit: (subscription: Omit<Subscription, "id">) => void;
  onUpdate: (id: string, subscription: Partial<Subscription>) => void;
  editingSub?: Subscription;
  onCancelEdit: () => void;
}

const SubscriptionForm = ({
  onSubmit,
  onUpdate,
  editingSub,
  onCancelEdit,
}: SubscriptionFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    duration: "",
    description: "",
    features: "",
    isActive: true,
  });

  useEffect(() => {
    if (editingSub) {
      setFormData({
        name: editingSub.name,
        price: editingSub.price,
        duration: editingSub.duration,
        description: editingSub.description,
        features: editingSub.features.join(", "),
        isActive: editingSub.isActive,
      });
    } else {
      setFormData({
        name: "",
        price: 0,
        duration: "",
        description: "",
        features: "",
        isActive: true,
      });
    }
  }, [editingSub]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subscriptionData = {
      ...formData,
      features: formData.features.split(",").map((f) => f.trim()),
    };

    if (editingSub) {
      onUpdate(editingSub.id, subscriptionData);
      toast.success("Абонемент успешно обновлён!");
      onCancelEdit();
    } else {
      onSubmit(subscriptionData);
      toast.success("Абонемент успешно добавлен!");
    }

    setFormData({
      name: "",
      price: 0,
      duration: "",
      description: "",
      features: "",
      isActive: true,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name={editingSub ? "Edit" : "Plus"} size={20} />
          {editingSub ? "Редактировать абонемент" : "Добавить абонемент"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Название</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Базовый абонемент"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Цена (₽)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Длительность</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                required
                placeholder="1 месяц"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isActive: checked })
                }
              />
              <Label htmlFor="isActive">Активный абонемент</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              placeholder="Описание абонемента..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Особенности (через запятую)</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) =>
                setFormData({ ...formData, features: e.target.value })
              }
              rows={2}
              placeholder="Безлимитные занятия, Персональный тренер, Сауна"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit">
              <Icon
                name={editingSub ? "Save" : "Plus"}
                size={16}
                className="mr-2"
              />
              {editingSub ? "Сохранить" : "Добавить"}
            </Button>
            {editingSub && (
              <Button type="button" variant="outline" onClick={onCancelEdit}>
                <Icon name="X" size={16} className="mr-2" />
                Отмена
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubscriptionForm;
