import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { ScheduleItem } from "@/hooks/useSchedule";
import { Trainer } from "@/hooks/useTrainers";
import { toast } from "sonner";

interface ScheduleFormProps {
  trainers: Trainer[];
  onSubmit: (item: Omit<ScheduleItem, "id">) => void;
  onUpdate: (id: string, item: Omit<ScheduleItem, "id">) => void;
  editingItem?: ScheduleItem;
  onCancelEdit: () => void;
}

const ScheduleForm = ({
  trainers,
  onSubmit,
  onUpdate,
  editingItem,
  onCancelEdit,
}: ScheduleFormProps) => {
  const [form, setForm] = useState({
    time: editingItem?.time || "",
    title: editingItem?.title || "",
    trainer: editingItem?.trainer || "",
    duration: editingItem?.duration || "",
    difficulty: editingItem?.difficulty || "Средне",
    spots: editingItem?.spots || 10,
  });

  const handleSubmit = () => {
    if (!form.time || !form.title || !form.trainer || !form.duration) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    if (editingItem) {
      onUpdate(editingItem.id, form);
    } else {
      onSubmit(form);
    }

    setForm({
      time: "",
      title: "",
      trainer: "",
      duration: "",
      difficulty: "Средне",
      spots: 10,
    });
  };

  const handleCancel = () => {
    setForm({
      time: "",
      title: "",
      trainer: "",
      duration: "",
      difficulty: "Средне",
      spots: 10,
    });
    onCancelEdit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {editingItem ? "Редактировать занятие" : "Добавить занятие"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="time">Время *</Label>
            <Input
              id="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              placeholder="07:00"
            />
          </div>
          <div>
            <Label htmlFor="title">Название занятия *</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Утренняя йога"
            />
          </div>
          <div>
            <Label htmlFor="trainer">Тренер *</Label>
            <Select
              value={form.trainer}
              onValueChange={(value) => setForm({ ...form, trainer: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите тренера" />
              </SelectTrigger>
              <SelectContent>
                {trainers.map((trainer) => (
                  <SelectItem key={trainer.id} value={trainer.name}>
                    {trainer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="duration">Длительность *</Label>
            <Input
              id="duration"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              placeholder="60 мин"
            />
          </div>
          <div>
            <Label htmlFor="difficulty">Сложность</Label>
            <Select
              value={form.difficulty}
              onValueChange={(value) => setForm({ ...form, difficulty: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Легко">Легко</SelectItem>
                <SelectItem value="Средне">Средне</SelectItem>
                <SelectItem value="Сложно">Сложно</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="spots">Количество мест</Label>
            <Input
              id="spots"
              type="number"
              value={form.spots}
              onChange={(e) =>
                setForm({ ...form, spots: parseInt(e.target.value) || 0 })
              }
              placeholder="10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon
              name={editingItem ? "Save" : "Plus"}
              size={16}
              className="mr-2"
            />
            {editingItem ? "Сохранить" : "Добавить занятие"}
          </Button>
          {editingItem && (
            <Button variant="outline" onClick={handleCancel}>
              Отмена
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleForm;
