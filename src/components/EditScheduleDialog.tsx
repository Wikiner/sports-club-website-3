import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useSchedule, ScheduleItem } from "@/hooks/useSchedule";

interface EditScheduleDialogProps {
  schedule: ScheduleItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditScheduleDialog = ({
  schedule,
  open,
  onOpenChange,
}: EditScheduleDialogProps) => {
  const { updateScheduleItem } = useSchedule();
  const [formData, setFormData] = useState({
    time: "",
    title: "",
    trainer: "",
    duration: "",
    difficulty: "",
    spots: 0,
  });

  useEffect(() => {
    if (schedule) {
      setFormData({
        time: schedule.time,
        title: schedule.title,
        trainer: schedule.trainer,
        duration: schedule.duration,
        difficulty: schedule.difficulty,
        spots: schedule.spots,
      });
    }
  }, [schedule]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateScheduleItem(schedule.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Редактировать занятие</DialogTitle>
          <DialogDescription>Внесите изменения в расписание</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Input
              id="trainer"
              value={formData.trainer}
              onChange={(e) =>
                setFormData({ ...formData, trainer: e.target.value })
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

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditScheduleDialog;
