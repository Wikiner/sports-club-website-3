import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { Subscription } from "@/hooks/useSubscriptions";

interface SubscriptionFormProps {
  onSubmit: (sub: Omit<Subscription, "id">) => void;
  onUpdate: (id: string, sub: Omit<Subscription, "id">) => void;
  editingSub?: Subscription;
  onCancelEdit: () => void;
}

const SubscriptionForm = ({
  onSubmit,
  onUpdate,
  editingSub,
  onCancelEdit,
}: SubscriptionFormProps) => {
  const [form, setForm] = useState({
    name: editingSub?.name || "",
    price: editingSub?.price || 0,
    duration: editingSub?.duration || 30,
    features: editingSub?.features.join("\n") || "",
    isActive: editingSub?.isActive ?? true,
  });

  const handleSubmit = () => {
    if (!form.name || form.price <= 0) return;

    const subData = {
      ...form,
      features: form.features.split("\n").filter((f) => f.trim()),
    };

    if (editingSub) {
      onUpdate(editingSub.id, subData);
    } else {
      onSubmit(subData);
    }

    setForm({
      name: "",
      price: 0,
      duration: 30,
      features: "",
      isActive: true,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="CreditCard" size={20} />
          {editingSub ? "Редактировать абонемент" : "Добавить абонемент"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Название абонемента</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Месячный абонемент"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Цена (руб.)</Label>
            <Input
              id="price"
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: Number(e.target.value) })
              }
              placeholder="2000"
            />
          </div>
          <div>
            <Label htmlFor="duration">Длительность (дни)</Label>
            <Input
              id="duration"
              type="number"
              value={form.duration}
              onChange={(e) =>
                setForm({ ...form, duration: Number(e.target.value) })
              }
              placeholder="30"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="features">Особенности (каждая с новой строки)</Label>
          <Textarea
            id="features"
            value={form.features}
            onChange={(e) => setForm({ ...form, features: e.target.value })}
            placeholder="Безлимитное посещение&#10;Групповые тренировки&#10;Консультации тренера"
            rows={4}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="active"
            checked={form.isActive}
            onCheckedChange={(checked) =>
              setForm({ ...form, isActive: checked })
            }
          />
          <Label htmlFor="active">Активный абонемент</Label>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSubmit}>
            {editingSub ? "Обновить" : "Добавить"}
          </Button>
          {editingSub && (
            <Button variant="outline" onClick={onCancelEdit}>
              Отменить
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionForm;
