import { useState, useEffect } from "react";

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  isActive: boolean;
}

export const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const savedSubscriptions = localStorage.getItem("subscriptions");
    if (savedSubscriptions) {
      setSubscriptions(JSON.parse(savedSubscriptions));
    } else {
      const defaultSubscriptions: Subscription[] = [
        {
          id: "1",
          name: "Базовый",
          price: 2500,
          duration: "1 месяц",
          description: "Доступ к основным тренажёрам и групповым занятиям",
          features: ["Тренажёрный зал", "Групповые занятия", "Раздевалка"],
          isActive: true,
        },
        {
          id: "2",
          name: "Премиум",
          price: 4500,
          duration: "1 месяц",
          description: "Полный доступ ко всем услугам фитнес-клуба",
          features: [
            "Тренажёрный зал",
            "Групповые занятия",
            "Персональный тренер",
            "Бассейн",
            "Сауна",
          ],
          isActive: true,
        },
      ];
      setSubscriptions(defaultSubscriptions);
      localStorage.setItem(
        "subscriptions",
        JSON.stringify(defaultSubscriptions),
      );
    }
  }, []);

  const saveToStorage = (data: Subscription[]) => {
    localStorage.setItem("subscriptions", JSON.stringify(data));
  };

  const addSubscription = (subscription: Omit<Subscription, "id">) => {
    const newSubscription: Subscription = {
      ...subscription,
      id: Date.now().toString(),
    };
    const updated = [...subscriptions, newSubscription];
    setSubscriptions(updated);
    saveToStorage(updated);
  };

  const updateSubscription = (id: string, updates: Partial<Subscription>) => {
    const updated = subscriptions.map((sub) =>
      sub.id === id ? { ...sub, ...updates } : sub,
    );
    setSubscriptions(updated);
    saveToStorage(updated);
  };

  const deleteSubscription = (id: string) => {
    const updated = subscriptions.filter((sub) => sub.id !== id);
    setSubscriptions(updated);
    saveToStorage(updated);
  };

  return {
    subscriptions,
    addSubscription,
    updateSubscription,
    deleteSubscription,
  };
};
