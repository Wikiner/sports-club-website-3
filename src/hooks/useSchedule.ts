import { useState, useEffect } from "react";
import { toast } from "sonner";
import { apiService } from "@/services/api";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      setLoading(true);
      const data = await apiService.getSchedule();
      setSchedule(data);
    } catch (error) {
      console.error("Failed to load schedule:", error);
      // Fallback to localStorage
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
        ];
        setSchedule(defaultSchedule);
      }
      toast.error("Не удалось загрузить расписание с сервера");
    } finally {
      setLoading(false);
    }
  };

  const addScheduleItem = async (item: Omit<ScheduleItem, "id">) => {
    try {
      const newItem = await apiService.createScheduleItem(item);
      setSchedule((prev) => [...prev, newItem]);
      toast.success("Занятие добавлено в расписание!");
    } catch (error) {
      console.error("Failed to add schedule item:", error);
      toast.error("Ошибка при добавлении занятия");
    }
  };

  const updateScheduleItem = async (
    id: string,
    item: Partial<ScheduleItem>,
  ) => {
    try {
      const updatedItem = await apiService.updateScheduleItem(id, item);
      setSchedule((prev) => prev.map((s) => (s.id === id ? updatedItem : s)));
      toast.success("Занятие обновлено успешно!");
    } catch (error) {
      console.error("Failed to update schedule item:", error);
      toast.error("Ошибка при обновлении занятия");
    }
  };

  const deleteScheduleItem = async (id: string) => {
    try {
      await apiService.deleteScheduleItem(id);
      setSchedule((prev) => prev.filter((s) => s.id !== id));
      toast.success("Занятие удалено из расписания");
    } catch (error) {
      console.error("Failed to delete schedule item:", error);
      toast.error("Ошибка при удалении занятия");
    }
  };

  return {
    schedule,
    addScheduleItem,
    updateScheduleItem,
    deleteScheduleItem,
    loading,
  };
};
