import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { News } from "@/hooks/useNews";
import { toast } from "sonner";

interface NewsFormProps {
  onSubmit: (news: Omit<News, "id">) => void;
  onUpdate: (id: string, news: Partial<News>) => void;
  editingNews?: News;
  onCancelEdit: () => void;
}

const NewsForm = ({
  onSubmit,
  onUpdate,
  editingNews,
  onCancelEdit,
}: NewsFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "announcement" as News["type"],
    date: new Date().toISOString().split("T")[0],
    isActive: true,
  });

  useEffect(() => {
    if (editingNews) {
      setFormData({
        title: editingNews.title,
        content: editingNews.content,
        type: editingNews.type,
        date: editingNews.date,
        isActive: editingNews.isActive,
      });
    } else {
      setFormData({
        title: "",
        content: "",
        type: "announcement",
        date: new Date().toISOString().split("T")[0],
        isActive: true,
      });
    }
  }, [editingNews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingNews) {
      onUpdate(editingNews.id, formData);
      toast.success("Новость успешно обновлена!");
      onCancelEdit();
    } else {
      onSubmit(formData);
      toast.success("Новость успешно добавлена!");
    }

    setFormData({
      title: "",
      content: "",
      type: "announcement",
      date: new Date().toISOString().split("T")[0],
      isActive: true,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name={editingNews ? "Edit" : "Plus"} size={20} />
          {editingNews ? "Редактировать новость" : "Добавить новость"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
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
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isActive: checked })
                }
              />
              <Label htmlFor="isActive">Активная новость</Label>
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit">
              <Icon
                name={editingNews ? "Save" : "Plus"}
                size={16}
                className="mr-2"
              />
              {editingNews ? "Сохранить" : "Добавить"}
            </Button>
            {editingNews && (
              <Button type="button" variant="outline" onClick={onCancelEdit}>
                <Icon name="X" size={16} className="mr-2" />
                Отмена
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsForm;
