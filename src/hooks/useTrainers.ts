import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  photo: string;
}

export const useTrainers = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    loadTrainers();
  }, []);

  const loadTrainers = () => {
    const savedTrainers = localStorage.getItem("trainers");
    if (savedTrainers) {
      setTrainers(JSON.parse(savedTrainers));
    } else {
      const defaultTrainers: Trainer[] = [
        {
          id: "1",
          name: "Анна Петрова",
          specialization: "Йога",
          experience: "5 лет",
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        },
        {
          id: "2",
          name: "Михаил Сидоров",
          specialization: "Силовые тренировки",
          experience: "8 лет",
          photo:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        },
        {
          id: "3",
          name: "Елена Козлова",
          specialization: "Аэробика",
          experience: "6 лет",
          photo:
            "https://images.unsplash.com/photo-1494790108755-2616b332e1a0?w=400",
        },
      ];
      setTrainers(defaultTrainers);
      localStorage.setItem("trainers", JSON.stringify(defaultTrainers));
    }
  };

  const addTrainer = (trainer: Omit<Trainer, "id">) => {
    const newTrainer: Trainer = {
      id: Date.now().toString(),
      ...trainer,
      photo:
        trainer.photo ||
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    };

    const updatedTrainers = [...trainers, newTrainer];
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
    toast.success("Тренер добавлен успешно!");
  };

  const updateTrainer = (id: string, trainer: Omit<Trainer, "id">) => {
    const updatedTrainers = trainers.map((t) =>
      t.id === id ? { ...trainer, id } : t,
    );
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
    toast.success("Тренер обновлён успешно!");
  };

  const deleteTrainer = (id: string) => {
    const updatedTrainers = trainers.filter((t) => t.id !== id);
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
    toast.success("Тренер удалён");
  };

  return {
    trainers,
    addTrainer,
    updateTrainer,
    deleteTrainer,
  };
};
