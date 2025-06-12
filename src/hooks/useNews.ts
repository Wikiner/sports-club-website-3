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
