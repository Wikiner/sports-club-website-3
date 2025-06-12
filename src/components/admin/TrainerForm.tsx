import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Trainer } from "@/hooks/useTrainers";
import { toast } from "sonner";

interface TrainerFormProps {
  onSubmit: (trainer: Omit<Trainer, "id">) => void;
  onUpdate: (id: string, trainer: Omit<Trainer, "id">) => void;
  editingTrainer?: Trainer;
  onCancelEdit: () => void;
}

const TrainerForm = ({
  onSubmit,
  onUpdate,
  editingTrainer,
  onCancelEdit,
}: TrainerFormProps) => {
  const [form, setForm] = useState({
    name: editingTrainer?.name || "",
    specialization: editingTrainer?.specialization || "",
    experience: editingTrainer?.experience || "",
    photo: editingTrainer?.photo || "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.specialization || !form.experience) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    if (editingTrainer) {
      onUpdate(editingTrainer.id, form);
    } else {
      onSubmit(form);
    }

    setForm({ name: "", specialization: "", experience: "", photo: "" });
  };

  const handleCancel = () => {
    setForm({ name: "", specialization: "", experience: "", photo: "" });
    onCancelEdit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {editingTrainer ? "Редактировать тренера" : "Добавить тренера"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Имя тренера *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Введите имя тренера"
            />
          </div>
          <div>
            <Label htmlFor="specialization">Специализация *</Label>
            <Input
              id="specialization"
              value={form.specialization}
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
              placeholder="Йога, Силовые тренировки..."
            />
          </div>
          <div>
            <Label htmlFor="experience">Опыт работы *</Label>
            <Input
              id="experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              placeholder="5 лет"
            />
          </div>
          <div>
            <Label htmlFor="photo">Фото (URL)</Label>
            <Input
              id="photo"
              value={form.photo}
              onChange={(e) => setForm({ ...form, photo: e.target.value })}
              placeholder="https://example.com/photo.jpg"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon
              name={editingTrainer ? "Save" : "Plus"}
              size={16}
              className="mr-2"
            />
            {editingTrainer ? "Сохранить" : "Добавить тренера"}
          </Button>
          {editingTrainer && (
            <Button variant="outline" onClick={handleCancel}>
              Отмена
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerForm;
