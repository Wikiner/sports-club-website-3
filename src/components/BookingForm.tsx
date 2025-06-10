import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    training: "",
    comments: "",
  });

  const trainings = [
    "Утренняя йога",
    "Силовая тренировка",
    "Аэробика",
    "Кроссфит",
    "Пилатес",
    "Персональная тренировка",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.training
    ) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // Сохраняем запись в localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: Date.now(),
      ...formData,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    toast.success(
      "Запись успешно создана! Мы свяжемся с вами в ближайшее время",
    );

    // Очищаем форму
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      training: "",
      comments: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center">
          <Icon name="Calendar" size={24} className="mr-3" />
          Запись на тренировку
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Имя и фамилия *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Введите ваше имя"
                className="border-gray-300 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Телефон *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+7 (999) 123-45-67"
                className="border-gray-300 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email (необязательно)
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your@email.com"
              className="border-gray-300 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-gray-700 font-medium">
                Дата тренировки *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="border-gray-300 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">
                Тип тренировки *
              </Label>
              <Select
                value={formData.training}
                onValueChange={(value) => handleInputChange("training", value)}
              >
                <SelectTrigger className="border-gray-300 focus:border-primary">
                  <SelectValue placeholder="Выберите тренировку" />
                </SelectTrigger>
                <SelectContent>
                  {trainings.map((training) => (
                    <SelectItem key={training} value={training}>
                      {training}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments" className="text-gray-700 font-medium">
              Дополнительные пожелания
            </Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              placeholder="Расскажите о своих целях, опыте тренировок или особых требованиях..."
              className="border-gray-300 focus:border-primary min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
          >
            <Icon name="CheckCircle" size={20} className="mr-2" />
            Записаться на тренировку
          </Button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Важная информация:</p>
              <ul className="space-y-1 text-blue-700">
                <li>
                  • Мы свяжемся с вами в течение 30 минут для подтверждения
                </li>
                <li>• Отмена тренировки возможна за 2 часа до начала</li>
                <li>• При первом посещении приходите за 15 минут до начала</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
