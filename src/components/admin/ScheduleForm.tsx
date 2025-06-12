import { useState, useEffect } from "react";
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
  onSubmit: (schedule: Omit<ScheduleItem, "id">) => void;
  onUpdate: (id: string, schedule: Partial<ScheduleItem>) => void;
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
  const [formData, setFormData] = useState({
    time: "",
    title: "",
    trainer: "",
    duration: "",
    difficulty: "Легко",
    spots: 10,
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        time: editingItem.time,
        title: editingItem.title,
        trainer: editingItem.trainer,
        duration: editingItem.duration,
        difficulty: editingItem.difficulty,
        spots: editingItem.spots,
      });
    } else {
      setFormData({
        time: "",
        title: "",
        trainer: "",
        duration: "",
        difficulty: "Легко",
        spots: 10,
      });
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      onUpdate(editingItem.id, formData);
      toast.success("Занятие успешно обновлено!");
      onCancelEdit();
    } else {
      onSubmit(formData);
      toast.success("Занятие успешно добавлено!");
    }

    setFormData({
      time: "",
      title: "",
      trainer: "",
      duration: "",
      difficulty: "Легко",
      spots: 10,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name={editingItem ? "Edit" : "Plus"} size={20} />
          {editingItem ? "Редактировать занятие" : "Добавить занятие"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time">Время</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trainer">Тренер</Label>
              <Select
                value={formData.trainer}
                onValueChange={(value) =>
                  setFormData({ ...formData, trainer: value })
                }
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

            <div className="space-y-2">
              <Label htmlFor="duration">Длительность</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                placeholder="60 минут"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Сложность</Label>
              <Select
                value={formData.difficulty}
                onValueChange={(value) =>
                  setFormData({ ...formData, difficulty: value })
                }
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

            <div className="space-y-2">
              <Label htmlFor="spots">Количество мест</Label>
              <Input
                id="spots"
                type="number"
                min="1"
                value={formData.spots}
                onChange={(e) =>
                  setFormData({ ...formData, spots: parseInt(e.target.value) })
                }
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit">
              <Icon
                name={editingItem ? "Save" : "Plus"}
                size={16}
                className="mr-2"
              />
              {editingItem ? "Сохранить" : "Добавить"}
            </Button>
            {editingItem && (
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

export default ScheduleForm;
