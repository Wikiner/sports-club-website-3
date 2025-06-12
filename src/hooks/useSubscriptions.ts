import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: number; // в днях
  features: string[];
  isActive: boolean;
}

export interface PurchaseState {
  isLoading: boolean;
  isSuccess: boolean;
  subscriptionId: string | null;
}

export const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "1",
      name: "Базовый",
      price: 2990,
      duration: 30,
      features: [
        "Доступ в тренажерный зал",
        "Раздевалки и душевые",
        "Парковка",
        "Wi-Fi",
      ],
      isActive: true,
    },
    {
      id: "2",
      name: "Популярный",
      price: 4990,
      duration: 30,
      features: [
        "Доступ в тренажерный зал",
        "Групповые тренировки",
        "Бассейн",
        "Сауна и хамам",
        "Раздевалки и душевые",
        "Парковка",
        "Wi-Fi",
      ],
      isActive: true,
    },
    {
      id: "3",
      name: "Премиум",
      price: 7990,
      duration: 30,
      features: [
        "Полный доступ ко всем зонам",
        "Групповые тренировки",
        "Персональные консультации",
        "Бассейн и аквааэробика",
        "Сауна, хамам, джакузи",
        "Массажный кабинет",
        "Солярий",
        "Раздевалки VIP",
        "Парковка",
        "Wi-Fi",
      ],
      isActive: true,
    },
    {
      id: "4",
      name: "Студенческий",
      price: 1990,
      duration: 30,
      features: [
        "Доступ в тренажерный зал",
        "Групповые тренировки (до 14:00)",
        "Раздевалки и душевые",
        "Wi-Fi",
      ],
      isActive: true,
    },
    {
      id: "5",
      name: "Годовой Премиум",
      price: 79990,
      duration: 365,
      features: [
        "Полный доступ ко всем зонам",
        "Безлимитные групповые тренировки",
        "4 персональные тренировки в месяц",
        "Бассейн и аквааэробика",
        "Все SPA услуги",
        "Консультации диетолога",
        "Заморозка до 30 дней",
        "Приоритетная запись",
        "VIP раздевалки",
        "Гостевые визиты",
      ],
      isActive: true,
    },
  ]);

  useEffect(() => {
    const savedSubscriptions = localStorage.getItem("subscriptions");
    if (savedSubscriptions) {
      setSubscriptions(JSON.parse(savedSubscriptions));
    }
  }, []);

  const saveSubscriptions = (subscriptionsData: Subscription[]) => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptionsData));
    setSubscriptions(subscriptionsData);
  };

  const addSubscription = (subscription: Omit<Subscription, "id">) => {
    const newSubscription: Subscription = {
      ...subscription,
      id: Date.now().toString(),
    };
    const updatedSubscriptions = [...subscriptions, newSubscription];
    saveSubscriptions(updatedSubscriptions);
    toast.success("Абонемент добавлен");
  };

  const updateSubscription = (
    id: string,
    subscription: Omit<Subscription, "id">,
  ) => {
    const updatedSubscriptions = subscriptions.map((item) =>
      item.id === id ? { ...subscription, id } : item,
    );
    saveSubscriptions(updatedSubscriptions);
    toast.success("Абонемент обновлен");
  };

  const deleteSubscription = (id: string) => {
    const updatedSubscriptions = subscriptions.filter((item) => item.id !== id);
    saveSubscriptions(updatedSubscriptions);
    toast.success("Абонемент удален");
  };

  const [purchaseState, setPurchaseState] = useState<PurchaseState>({
    isLoading: false,
    isSuccess: false,
    subscriptionId: null,
  });

  const purchaseSubscription = async (
    subscriptionId: string,
    subscriptionName: string,
  ) => {
    setPurchaseState({
      isLoading: true,
      isSuccess: false,
      subscriptionId,
    });

    // Симуляция покупки
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPurchaseState({
      isLoading: false,
      isSuccess: true,
      subscriptionId,
    });

    toast.success(`🎉 Абонемент "${subscriptionName}" успешно приобретен!`);

    // Сброс состояния через 3 секунды
    setTimeout(() => {
      setPurchaseState({
        isLoading: false,
        isSuccess: false,
        subscriptionId: null,
      });
    }, 3000);
  };

  return {
    subscriptions,
    addSubscription,
    updateSubscription,
    deleteSubscription,
    purchaseState,
    purchaseSubscription,
  };
};
