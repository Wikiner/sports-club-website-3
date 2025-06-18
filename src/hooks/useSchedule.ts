import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  trainer: string;
  duration: string;
  difficulty: string;
  spots: number;
}

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = () => {
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      setSchedule(JSON.parse(savedSchedule));
    } else {
      const defaultSchedule: ScheduleItem[] = [
        {
          id: "1",
          time: "07:00",
          title: "Утренняя йога",
          trainer: "Анна Петрова",
          duration: "60 мин",
          difficulty: "Легко",
          spots: 8,
        },
        {
          id: "2",
          time: "09:00",
          title: "Силовая тренировка",
          trainer: "Михаил Сидоров",
          duration: "90 мин",
          difficulty: "Сложно",
          spots: 5,
        },
        {
          id: "3",
          time: "11:00",
          title: "Аэробика",
          trainer: "Елена Козлова",
          duration: "45 мин",
          difficulty: "Средне",
          spots: 12,
        },
      ];
      setSchedule(defaultSchedule);
      localStorage.setItem("schedule", JSON.stringify(defaultSchedule));
    }
  };

  const addScheduleItem = (item: Omit<ScheduleItem, "id">) => {
    const newItem: ScheduleItem = {
      id: Date.now().toString(),
      ...item,
    };

    const updatedSchedule = [...schedule, newItem];
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    toast.success("Занятие добавлено в расписание!");
  };

  const updateScheduleItem = (id: string, item: Omit<ScheduleItem, "id">) => {
    const updatedSchedule = schedule.map((s) =>
      s.id === id ? { ...item, id } : s,
    );
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    toast.success("Занятие обновлено успешно!");
  };

  const deleteScheduleItem = (id: string) => {
    const updatedSchedule = schedule.filter((s) => s.id !== id);
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    toast.success("Занятие удалено из расписания");
  };

  return {
    schedule,
    addScheduleItem,
    updateScheduleItem,
    deleteScheduleItem,
  };
};
