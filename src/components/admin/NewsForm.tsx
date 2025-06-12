import { useState } from "react";
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

interface NewsFormProps {
  onSubmit: (news: Omit<News, "id">) => void;
  onUpdate: (id: string, news: Omit<News, "id">) => void;
  editingNews?: News;
  onCancelEdit: () => void;
}

const NewsForm = ({
  onSubmit,
  onUpdate,
  editingNews,
  onCancelEdit,
}: NewsFormProps) => {
  const [form, setForm] = useState({
    title: editingNews?.title || "",
    content: editingNews?.content || "",
    type: editingNews?.type || ("announcement" as const),
    date: editingNews?.date || new Date().toISOString().split("T")[0],
    isActive: editingNews?.isActive ?? true,
  });

  const handleSubmit = () => {
    if (!form.title || !form.content) return;

    if (editingNews) {
      onUpdate(editingNews.id, form);
    } else {
      onSubmit(form);
    }

    setForm({
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
          <Icon name="Newspaper" size={20} />
          {editingNews ? "Редактировать новость" : "Добавить новость"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="title">Заголовок</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Заголовок новости"
          />
        </div>

        <div>
          <Label htmlFor="content">Содержание</Label>
          <Textarea
            id="content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Текст новости"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="type">Тип новости</Label>
            <Select
              value={form.type}
              onValueChange={(value: News["type"]) =>
                setForm({ ...form, type: value })
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

          <div>
            <Label htmlFor="date">Дата</Label>
            <Input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="active"
            checked={form.isActive}
            onCheckedChange={(checked) =>
              setForm({ ...form, isActive: checked })
            }
          />
          <Label htmlFor="active">Активная новость</Label>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSubmit}>
            {editingNews ? "Обновить" : "Добавить"}
          </Button>
          {editingNews && (
            <Button variant="outline" onClick={onCancelEdit}>
              Отменить
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsForm;
