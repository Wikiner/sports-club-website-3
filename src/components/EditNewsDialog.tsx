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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNews, News } from "@/hooks/useNews";

interface EditNewsDialogProps {
  news: News;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditNewsDialog = ({ news, open, onOpenChange }: EditNewsDialogProps) => {
  const { updateNews } = useNews();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "announcement" as News["type"],
    date: "",
    isActive: true,
  });

  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title,
        content: news.content,
        type: news.type,
        date: news.date,
        isActive: news.isActive,
      });
    }
  }, [news]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateNews(news.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Редактировать новость</DialogTitle>
          <DialogDescription>Внесите изменения в новость</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Заголовок</Label>
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
            <Label htmlFor="content">Содержание</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Тип новости</Label>
            <Select
              value={formData.type}
              onValueChange={(value: News["type"]) =>
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="announcement">Объявление</SelectItem>
                <SelectItem value="promotion">Акция</SelectItem>
                <SelectItem value="schedule">Расписание</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Дата</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
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

export default EditNewsDialog;
