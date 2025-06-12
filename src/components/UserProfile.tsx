import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalWorkouts: number;
  currentStreak: number;
  achievements: string[];
  notes: string[];
}

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    name: "Иван Петров",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    joinDate: "2024-01-15",
    totalWorkouts: 47,
    currentStreak: 5,
    achievements: [
      "Первая тренировка",
      "10 тренировок",
      "Месяц занятий",
      "Силовые рекорды",
    ],
    notes: [
      "Отличный прогресс в силовых упражнениях - Михаил",
      "Улучшилась гибкость на йоге - Анна",
      "Рекомендую добавить кардио - Елена",
    ],
  });

  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Проверяем авторизацию
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      navigate("/auth");
      return;
    }

    const user = JSON.parse(savedUser);
    // Обновляем данные профиля реальными данными пользователя
    setUserData((prev) => ({
      ...prev,
      name: user.name,
      email: user.email,
    }));

    // Загружаем записи на тренировки
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, [navigate]);

  const handleSaveProfile = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsEditing(false);
    toast.success("Профиль успешно обновлен!");
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 7) return "text-green-600";
    if (streak >= 3) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Заголовок профиля */}
      <Card className="bg-gradient-to-r from-primary to-purple-600 text-white border-0">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="User" size={48} className="text-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <p className="text-purple-100 mb-2">
                Член клуба с{" "}
                {new Date(userData.joinDate).toLocaleDateString("ru-RU")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center">
                  <Icon name="Trophy" size={18} className="mr-2" />
                  {userData.totalWorkouts} тренировок
                </span>
                <span
                  className={`flex items-center ${getStreakColor(userData.currentStreak)}`}
                >
                  <Icon name="Flame" size={18} className="mr-2" />
                  {userData.currentStreak} дней подряд
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="progress">Прогресс</TabsTrigger>
          <TabsTrigger value="bookings">Записи</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
        </TabsList>

        {/* Вкладка профиля */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Личные данные</CardTitle>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={
                    isEditing ? handleSaveProfile : () => setIsEditing(true)
                  }
                >
                  <Icon
                    name={isEditing ? "Save" : "Edit"}
                    size={18}
                    className="mr-2"
                  />
                  {isEditing ? "Сохранить" : "Редактировать"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Имя и фамилия</Label>
                  <Input
                    value={userData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input
                    value={userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Дата регистрации</Label>
                  <Input
                    value={new Date(userData.joinDate).toLocaleDateString(
                      "ru-RU",
                    )}
                    disabled
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка прогресса */}
        <TabsContent value="progress">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon
                  name="Activity"
                  size={32}
                  className="text-primary mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {userData.totalWorkouts}
                </h3>
                <p className="text-gray-600">Всего тренировок</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon
                  name="Flame"
                  size={32}
                  className="text-orange-500 mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {userData.currentStreak}
                </h3>
                <p className="text-gray-600">Дней подряд</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon
                  name="Target"
                  size={32}
                  className="text-green-500 mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {userData.achievements.length}
                </h3>
                <p className="text-gray-600">Достижений</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Заметки тренеров</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.notes.map((note, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary"
                  >
                    <p className="text-gray-800">{note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка записей */}
        <TabsContent value="bookings">
          <Card>
            <CardHeader>
              <CardTitle>Мои записи на тренировки</CardTitle>
            </CardHeader>
            <CardContent>
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking: any, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-semibold">{booking.training}</h4>
                        <p className="text-gray-600">
                          {new Date(booking.date).toLocaleDateString("ru-RU")}
                        </p>
                      </div>
                      <Badge
                        variant={
                          booking.status === "confirmed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {booking.status === "confirmed"
                          ? "Подтверждено"
                          : "Ожидание"}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">
                  У вас пока нет записей на тренировки
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка достижений */}
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Мои достижения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="Award"
                        size={24}
                        className="text-yellow-600"
                      />
                      <span className="font-medium text-gray-800">
                        {achievement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
