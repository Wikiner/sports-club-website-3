import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface TrainingSession {
  id: number;
  date: string;
  time: string;
  title: string;
  trainer: string;
  duration: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  spots: number;
  maxSpots: number;
  type: "yoga" | "strength" | "cardio" | "crossfit" | "pilates" | "dance";
  room: string;
}

const InteractiveSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const sessions: TrainingSession[] = [
    {
      id: 1,
      date: "2025-01-15",
      time: "07:00",
      title: "Утренняя йога",
      trainer: "Анна Петрова",
      duration: "60 мин",
      difficulty: "Легко",
      spots: 8,
      maxSpots: 15,
      type: "yoga",
      room: "Зал 1",
    },
    {
      id: 2,
      date: "2025-01-15",
      time: "09:00",
      title: "Силовая тренировка",
      trainer: "Михаил Сидоров",
      duration: "90 мин",
      difficulty: "Сложно",
      spots: 11,
      maxSpots: 12,
      type: "strength",
      room: "Зал 2",
    },
    {
      id: 3,
      date: "2025-01-15",
      time: "11:00",
      title: "Аэробика",
      trainer: "Елена Козлова",
      duration: "45 мин",
      difficulty: "Средне",
      spots: 5,
      maxSpots: 20,
      type: "cardio",
      room: "Зал 3",
    },
    {
      id: 4,
      date: "2025-01-15",
      time: "18:00",
      title: "Кроссфит",
      trainer: "Дмитрий Волков",
      duration: "60 мин",
      difficulty: "Сложно",
      spots: 9,
      maxSpots: 10,
      type: "crossfit",
      room: "Зал 2",
    },
    {
      id: 5,
      date: "2025-01-16",
      time: "08:00",
      title: "Пилатес",
      trainer: "Ольга Смирнова",
      duration: "55 мин",
      difficulty: "Средне",
      spots: 3,
      maxSpots: 16,
      type: "pilates",
      room: "Зал 1",
    },
    {
      id: 6,
      date: "2025-01-16",
      time: "19:00",
      title: "Танцевальная аэробика",
      trainer: "Мария Танцева",
      duration: "50 мин",
      difficulty: "Легко",
      spots: 15,
      maxSpots: 25,
      type: "dance",
      room: "Зал 3",
    },
    {
      id: 7,
      date: "2025-01-17",
      time: "10:00",
      title: "Хатха-йога",
      trainer: "Анна Петрова",
      duration: "75 мин",
      difficulty: "Средне",
      spots: 12,
      maxSpots: 12,
      type: "yoga",
      room: "Зал 1",
    },
  ];

  const getTypeInfo = (type: string) => {
    const typeMap = {
      yoga: {
        name: "Йога",
        color: "bg-purple-100 text-purple-800 border-purple-200",
        borderColor: "border-l-purple-500",
      },
      strength: {
        name: "Силовая",
        color: "bg-red-100 text-red-800 border-red-200",
        borderColor: "border-l-red-500",
      },
      cardio: {
        name: "Кардио",
        color: "bg-blue-100 text-blue-800 border-blue-200",
        borderColor: "border-l-blue-500",
      },
      crossfit: {
        name: "Кроссфит",
        color: "bg-orange-100 text-orange-800 border-orange-200",
        borderColor: "border-l-orange-500",
      },
      pilates: {
        name: "Пилатес",
        color: "bg-pink-100 text-pink-800 border-pink-200",
        borderColor: "border-l-pink-500",
      },
      dance: {
        name: "Танцы",
        color: "bg-green-100 text-green-800 border-green-200",
        borderColor: "border-l-green-500",
      },
    };
    return (
      typeMap[type as keyof typeof typeMap] || {
        name: type,
        color: "bg-gray-100 text-gray-800",
        borderColor: "border-l-gray-500",
      }
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800 border-green-200";
      case "Средне":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Сложно":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getAvailabilityStatus = (spots: number, maxSpots: number) => {
    const percentage = (spots / maxSpots) * 100;
    if (spots >= maxSpots)
      return { color: "text-red-600", text: "Мест нет", bgColor: "bg-red-50" };
    if (percentage >= 80)
      return {
        color: "text-orange-600",
        text: "Почти заполнено",
        bgColor: "bg-orange-50",
      };
    if (percentage >= 50)
      return {
        color: "text-yellow-600",
        text: "Мало мест",
        bgColor: "bg-yellow-50",
      };
    return {
      color: "text-green-600",
      text: "Много мест",
      bgColor: "bg-green-50",
    };
  };

  const handleBooking = (session: TrainingSession) => {
    if (session.spots >= session.maxSpots) return;
    alert(
      `Запись на "${session.title}" в ${session.time} - функция в разработке`,
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getUniqueDates = () => {
    const dates = [...new Set(sessions.map((s) => s.date))];
    return dates.sort();
  };

  const filteredSessions = sessions.filter((session) => {
    const dateMatch = selectedDate === "all" || session.date === selectedDate;
    const typeMatch = selectedType === "all" || session.type === selectedType;
    return dateMatch && typeMatch;
  });

  const groupedSessions = filteredSessions.reduce(
    (acc, session) => {
      if (!acc[session.date]) acc[session.date] = [];
      acc[session.date].push(session);
      return acc;
    },
    {} as Record<string, TrainingSession[]>,
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Интерактивное расписание тренировок
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобное время и записывайтесь на тренировки онлайн
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Выберите дату" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все даты</SelectItem>
                {getUniqueDates().map((date) => (
                  <SelectItem key={date} value={date}>
                    {formatDate(date)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Тип тренировки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="yoga">Йога</SelectItem>
                <SelectItem value="strength">Силовые</SelectItem>
                <SelectItem value="cardio">Кардио</SelectItem>
                <SelectItem value="crossfit">Кроссфит</SelectItem>
                <SelectItem value="pilates">Пилатес</SelectItem>
                <SelectItem value="dance">Танцы</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Легенда */}
        <div className="bg-white rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Обозначения:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Много мест</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm">Мало мест</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm">Почти заполнено</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Мест нет</span>
            </div>
          </div>
        </div>

        {/* Расписание по дням */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {Object.entries(groupedSessions).map(([date, sessions]) => (
            <div key={date}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
                {formatDate(date)}
              </h3>
              <div className="grid gap-4">
                {sessions
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((session) => {
                    const availability = getAvailabilityStatus(
                      session.spots,
                      session.maxSpots,
                    );
                    const typeInfo = getTypeInfo(session.type);
                    const isFull = session.spots >= session.maxSpots;

                    return (
                      <Card
                        key={session.id}
                        className={`transition-all duration-200 hover:shadow-lg border-l-4 ${typeInfo.borderColor} ${availability.bgColor}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            {/* Основная информация */}
                            <div className="flex items-center space-x-6">
                              <div className="bg-primary text-white rounded-xl px-4 py-3 text-center min-w-[90px]">
                                <div className="text-2xl font-bold">
                                  {session.time}
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-xl font-bold text-gray-900">
                                    {session.title}
                                  </h4>
                                  <Badge className={typeInfo.color}>
                                    {typeInfo.name}
                                  </Badge>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3">
                                  <span className="flex items-center">
                                    <Icon
                                      name="User"
                                      size={16}
                                      className="mr-1"
                                    />
                                    {session.trainer}
                                  </span>
                                  <span className="flex items-center">
                                    <Icon
                                      name="Clock"
                                      size={16}
                                      className="mr-1"
                                    />
                                    {session.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <Icon
                                      name="MapPin"
                                      size={16}
                                      className="mr-1"
                                    />
                                    {session.room}
                                  </span>
                                </div>

                                <div className="flex items-center gap-3">
                                  <Badge
                                    className={getDifficultyColor(
                                      session.difficulty,
                                    )}
                                  >
                                    {session.difficulty}
                                  </Badge>
                                  <div className="flex items-center text-sm">
                                    <Icon
                                      name="Users"
                                      size={16}
                                      className="mr-1"
                                    />
                                    <span className="font-medium">
                                      {session.spots}
                                    </span>
                                    <span className="text-gray-500">
                                      /{session.maxSpots}
                                    </span>
                                  </div>
                                  <span
                                    className={`text-sm font-medium ${availability.color}`}
                                  >
                                    {availability.text}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Прогресс-бар и кнопка записи */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 min-w-[280px]">
                              <div className="flex-1">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                  <span>Занято мест</span>
                                  <span>
                                    {session.spots}/{session.maxSpots}
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                  <div
                                    className={`h-3 rounded-full transition-all duration-300 ${
                                      isFull
                                        ? "bg-red-500"
                                        : session.spots / session.maxSpots >=
                                            0.8
                                          ? "bg-orange-500"
                                          : session.spots / session.maxSpots >=
                                              0.5
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                    }`}
                                    style={{
                                      width: `${Math.min((session.spots / session.maxSpots) * 100, 100)}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>

                              <Button
                                className={`w-full sm:w-auto min-w-[140px] ${
                                  isFull ? "bg-gray-400 hover:bg-gray-400" : ""
                                }`}
                                disabled={isFull}
                                onClick={() => handleBooking(session)}
                              >
                                {isFull ? (
                                  <>
                                    <Icon name="X" size={16} className="mr-2" />
                                    Занято
                                  </>
                                ) : (
                                  <>
                                    <Icon
                                      name="Calendar"
                                      size={16}
                                      className="mr-2"
                                    />
                                    Записаться
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Calendar"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="text-gray-600 text-lg">
              Нет тренировок по выбранным фильтрам
            </p>
          </div>
        )}

        {/* Контактная информация */}
        <div className="text-center mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Нужна помощь с записью?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нами для индивидуального расписания или групповых
            занятий
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            <a
              href="tel:+79991234567"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </a>
            <a
              href="mailto:info@fitclub.ru"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              info@fitclub.ru
            </a>
            <span className="flex items-center text-gray-600">
              <Icon name="Clock" size={16} className="mr-2" />
              Ежедневно 6:00 - 23:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSchedule;
