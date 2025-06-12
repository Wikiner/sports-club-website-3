import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface News {
  id: string;
  title: string;
  content: string;
  type: "announcement" | "promotion" | "schedule";
  date: string;
  isActive: boolean;
}

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const savedNews = localStorage.getItem("news");
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Добавляем демо-новости при первом запуске
      const demoNews: News[] = [
        {
          id: "1",
          title: "Открытие нового зала функционального тренинга!",
          content:
            "С 1 июля у нас открывается новый зал площадью 200 м² с современным оборудованием для кроссфита и функциональных тренировок. Приходите на бесплатное пробное занятие!",
          type: "announcement",
          date: "2024-06-25",
          isActive: true,
        },
        {
          id: "2",
          title: "Акция: приведи друга - получи скидку 30%!",
          content:
            "Приведите друга и получите скидку 30% на следующий месяц абонемента. Ваш друг также получит скидку 20% на первый абонемент. Акция действует до конца месяца!",
          type: "promotion",
          date: "2024-06-20",
          isActive: true,
        },
        {
          id: "3",
          title: "Изменения в расписании групповых тренировок",
          content:
            "С понедельника вводятся изменения в расписание: йога переносится на 19:00, добавляется новая тренировка по пилатесу в 20:00. Полное расписание смотрите на сайте.",
          type: "schedule",
          date: "2024-06-18",
          isActive: true,
        },
      ];
      setNews(demoNews);
      localStorage.setItem("news", JSON.stringify(demoNews));
    }
  }, []);

  const saveNews = (newsData: News[]) => {
    localStorage.setItem("news", JSON.stringify(newsData));
    setNews(newsData);
  };

  const addNews = (newsItem: Omit<News, "id">) => {
    const newItem: News = {
      ...newsItem,
      id: Date.now().toString(),
    };
    const updatedNews = [...news, newItem];
    saveNews(updatedNews);
    toast.success("Новость добавлена");
  };

  const updateNews = (id: string, newsItem: Omit<News, "id">) => {
    const updatedNews = news.map((item) =>
      item.id === id ? { ...newsItem, id } : item,
    );
    saveNews(updatedNews);
    toast.success("Новость обновлена");
  };

  const deleteNews = (id: string) => {
    const updatedNews = news.filter((item) => item.id !== id);
    saveNews(updatedNews);
    toast.success("Новость удалена");
  };

  return { news, addNews, updateNews, deleteNews };
};
