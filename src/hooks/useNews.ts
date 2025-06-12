import { useState, useEffect } from "react";
import { toast } from "sonner";
import { apiService } from "@/services/api";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      const data = await apiService.getNews();
      setNews(data);
    } catch (error) {
      console.error("Failed to load news:", error);
      // Fallback to localStorage
      const savedNews = localStorage.getItem("news");
      if (savedNews) {
        setNews(JSON.parse(savedNews));
      } else {
        // Demo data as fallback
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
        ];
        setNews(demoNews);
      }
      toast.error("Не удалось загрузить новости с сервера");
    } finally {
      setLoading(false);
    }
  };

  const addNews = async (newsItem: Omit<News, "id">) => {
    try {
      const newItem = await apiService.createNews(newsItem);
      setNews((prev) => [...prev, newItem]);
      toast.success("Новость добавлена");
    } catch (error) {
      console.error("Failed to add news:", error);
      toast.error("Ошибка при добавлении новости");
    }
  };

  const updateNews = async (id: string, newsItem: Partial<News>) => {
    try {
      const updatedItem = await apiService.updateNews(id, newsItem);
      setNews((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item)),
      );
      toast.success("Новость обновлена");
    } catch (error) {
      console.error("Failed to update news:", error);
      toast.error("Ошибка при обновлении новости");
    }
  };

  const deleteNews = async (id: string) => {
    try {
      await apiService.deleteNews(id);
      setNews((prev) => prev.filter((item) => item.id !== id));
      toast.success("Новость удалена");
    } catch (error) {
      console.error("Failed to delete news:", error);
      toast.error("Ошибка при удалении новости");
    }
  };

  return { news, addNews, updateNews, deleteNews, loading };
};
