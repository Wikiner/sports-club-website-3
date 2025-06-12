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

  const [bookings, setBookings] = useState<any[]>([]);
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
      const allBookings = JSON.parse(savedBookings);
      setBookings(
        allBookings.filter((booking: any) => booking.status === "active"),
      );
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

  const handleCancelBooking = (bookingIndex: number) => {
    const canceledBooking = bookings[bookingIndex];

    // Обновляем статус записи в localStorage
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      const allBookings = JSON.parse(savedBookings);
      const updatedBookings = allBookings.map((booking: any) =>
        booking.id === canceledBooking.id
          ? { ...booking, status: "cancelled" }
          : booking,
      );
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    }

    // Обновляем локальное состояние
    const updatedBookings = bookings.filter(
      (_, index) => index !== bookingIndex,
    );
    setBookings(updatedBookings);
    toast.success(`Запись на "${canceledBooking.training}" отменена`);
  };

  const formatBookingDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 7) return "text-green-600";
    if (streak >= 3) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Заголовок профиля */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white border-0 shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        <CardContent className="relative p-8 z-10">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                <Icon name="User" size={52} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text">
                {userData.name}
              </h1>
              <p className="text-purple-100 mb-4 text-lg">
                Член клуба с{" "}
                {new Date(userData.joinDate).toLocaleDateString("ru-RU")}
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Icon
                    name="Trophy"
                    size={20}
                    className="mr-3 text-yellow-300"
                  />
                  <span className="font-semibold">
                    {userData.totalWorkouts} тренировок
                  </span>
                </div>
                <div
                  className={`flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20`}
                >
                  <Icon
                    name="Flame"
                    size={20}
                    className="mr-3 text-orange-300"
                  />
                  <span className="font-semibold">
                    {userData.currentStreak} дней подряд
                  </span>
                </div>
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
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                  Личные данные
                </CardTitle>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={
                    isEditing ? handleSaveProfile : () => setIsEditing(true)
                  }
                  className={
                    isEditing
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                      : "border-2 hover:border-purple-300 hover:bg-purple-50"
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
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Имя и фамилия
                  </Label>
                  <Input
                    value={userData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={!isEditing}
                    className="border-2 focus:border-purple-400 focus:ring-purple-200 transition-all duration-200 text-lg py-3"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Email
                  </Label>
                  <Input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="border-2 focus:border-purple-400 focus:ring-purple-200 transition-all duration-200 text-lg py-3"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Телефон
                  </Label>
                  <Input
                    value={userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                    className="border-2 focus:border-purple-400 focus:ring-purple-200 transition-all duration-200 text-lg py-3"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Дата регистрации
                  </Label>
                  <Input
                    value={new Date(userData.joinDate).toLocaleDateString(
                      "ru-RU",
                    )}
                    disabled
                    className="bg-gray-50 border-2 text-lg py-3"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка прогресса */}
        <TabsContent value="progress">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Icon name="Activity" size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {userData.totalWorkouts}
                </h3>
                <p className="text-blue-100 font-medium">Всего тренировок</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Icon name="Flame" size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {userData.currentStreak}
                </h3>
                <p className="text-orange-100 font-medium">Дней подряд</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {userData.achievements.length}
                </h3>
                <p className="text-green-100 font-medium">Достижений</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                Заметки тренеров
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {userData.notes.map((note, index) => (
                  <div
                    key={index}
                    className="relative p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute top-4 right-4">
                      <Icon
                        name="MessageCircle"
                        size={20}
                        className="text-purple-400"
                      />
                    </div>
                    <p className="text-gray-800 font-medium text-lg pr-8">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка записей */}
        <TabsContent value="bookings" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Мои записи на тренировки
              </h3>
              <Badge variant="secondary">
                {bookings.length} активных записей
              </Badge>
            </div>

            {bookings.length === 0 ? (
              <Card className="text-center py-16 bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl">
                <CardContent>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon
                      name="Calendar"
                      size={48}
                      className="text-purple-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Нет активных записей
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Запишитесь на тренировку через расписание
                  </p>
                  <Button
                    onClick={() => navigate("/schedule")}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-lg"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Посмотреть расписание
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {bookings.map((booking, index) => (
                  <Card
                    key={booking.id}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500"
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h4 className="text-xl font-bold text-gray-800">
                              {booking.training}
                            </h4>
                            <Badge
                              variant="outline"
                              className="bg-purple-50 text-purple-700 border-purple-200 px-3 py-1"
                            >
                              {booking.type}
                            </Badge>
                          </div>

                          <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
                              <Icon
                                name="Calendar"
                                size={18}
                                className="text-purple-500"
                              />
                              <span className="font-medium">
                                {formatBookingDate(booking.date)}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
                              <Icon
                                name="Clock"
                                size={18}
                                className="text-blue-500"
                              />
                              <span className="font-medium">
                                {booking.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
                              <Icon
                                name="User"
                                size={18}
                                className="text-green-500"
                              />
                              <span className="font-medium">
                                Тренер: {booking.trainer}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCancelBooking(index)}
                          className="text-red-600 hover:text-white hover:bg-red-500 border-red-300 hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Icon name="X" size={16} className="mr-2" />
                          Отменить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        {/* Вкладка достижений */}
        <TabsContent value="achievements">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-100">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-700 to-orange-600 bg-clip-text">
                🏆 Мои достижения
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="relative p-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 opacity-20">
                      <Icon
                        name="Sparkles"
                        size={24}
                        className="text-yellow-600"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                        <Icon name="Award" size={24} className="text-white" />
                      </div>
                      <span className="font-bold text-gray-800 text-lg">
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
