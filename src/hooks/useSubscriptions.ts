import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string[];
  isActive: boolean;
}

export interface UserSubscription {
  id: string;
  userId: string;
  userName: string;
  subscriptionId: string;
  subscriptionName: string;
  startDate: string;
  endDate: string;
  status: "paid" | "unpaid" | "expired";
  price: number;
}

export const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [userSubscriptions, setUserSubscriptions] = useState<
    UserSubscription[]
  >([]);

  useEffect(() => {
    const savedSubs = localStorage.getItem("subscriptions");
    if (savedSubs) {
      setSubscriptions(JSON.parse(savedSubs));
    }

    const savedUserSubs = localStorage.getItem("userSubscriptions");
    if (savedUserSubs) {
      setUserSubscriptions(JSON.parse(savedUserSubs));
    }
  }, []);

  const saveSubscriptions = (data: Subscription[]) => {
    localStorage.setItem("subscriptions", JSON.stringify(data));
    setSubscriptions(data);
  };

  const saveUserSubscriptions = (data: UserSubscription[]) => {
    localStorage.setItem("userSubscriptions", JSON.stringify(data));
    setUserSubscriptions(data);
  };

  const addSubscription = (sub: Omit<Subscription, "id">) => {
    const newSub: Subscription = {
      ...sub,
      id: Date.now().toString(),
    };
    const updated = [...subscriptions, newSub];
    saveSubscriptions(updated);
    toast.success("Абонемент добавлен");
  };

  const updateSubscription = (id: string, sub: Omit<Subscription, "id">) => {
    const updated = subscriptions.map((item) =>
      item.id === id ? { ...sub, id } : item,
    );
    saveSubscriptions(updated);
    toast.success("Абонемент обновлен");
  };

  const updatePaymentStatus = (
    id: string,
    status: UserSubscription["status"],
  ) => {
    const updated = userSubscriptions.map((item) =>
      item.id === id ? { ...item, status } : item,
    );
    saveUserSubscriptions(updated);
    toast.success("Статус оплаты обновлен");
  };

  return {
    subscriptions,
    userSubscriptions,
    addSubscription,
    updateSubscription,
    updatePaymentStatus,
  };
};
