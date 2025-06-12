import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const InteractiveSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("today");

  const schedule = [
    {
      id: 1,
      time: "07:00",
      title: "Утренняя йога",
      trainer: "Анна Петрова",
      duration: "60 мин",
      difficulty: "Легко",
      spots: 8,
      maxSpots: 15,
      type: "yoga",
    },
    {
      id: 2,
      time: "09:00",
      title: "Силовая тренировка",
      trainer: "Михаил Сидоров",
      duration: "90 мин",
      difficulty: "Сложно",
      spots: 5,
      maxSpots: 12,
      type: "strength",
    },
    {
      id: 3,
      time: "11:00",
      title: "Аэробика",
      trainer: "Елена Козлова",
      duration: "45 мин",
      difficulty: "Средне",
      spots: 12,
      maxSpots: 20,
      type: "cardio",
    },
    {
      id: 4,
      time: "18:00",
      title: "Кроссфит",
      trainer: "Дмитрий Волков",
      duration: "60 мин",
      difficulty: "Сложно",
      spots: 6,
      maxSpots: 10,
      type: "crossfit",
    },
    {
      id: 5,
      time: "19:30",
      title: "Пилатес",
      trainer: "Ольга Смирнова",
      duration: "55 мин",
      difficulty: "Средне",
      spots: 10,
      maxSpots: 16,
      type: "pilates",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "yoga":
        return "border-l-purple-500";
      case "strength":
        return "border-l-red-500";
      case "cardio":
        return "border-l-blue-500";
      case "crossfit":
        return "border-l-orange-500";
      case "pilates":
        return "border-l-pink-500";
      default:
        return "border-l-gray-500";
    }
  };

  const handleBooking = (sessionTitle: string) => {
    alert(`Запись на "${sessionTitle}" - функция в разработке`);
  };

  const getAvailabilityStatus = (spots: number, maxSpots: number) => {
    const percentage = (spots / maxSpots) * 100;
    if (percentage >= 90)
      return { color: "text-red-600", text: "Почти заполнено" };
    if (percentage >= 70)
      return { color: "text-yellow-600", text: "Мало мест" };
    return { color: "text-green-600", text: "Есть места" };
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Интерактивное расписание
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Записывайтесь на тренировки онлайн и следите за свободными местами
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {schedule.map((session) => {
            const availability = getAvailabilityStatus(
              session.spots,
              session.maxSpots,
            );

            return (
              <Card
                key={session.id}
                className={`hover:shadow-lg transition-shadow bg-white border-l-4 ${getTypeColor(session.type)}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-white rounded-lg px-4 py-3 text-center min-w-[80px]">
                        <div className="text-2xl font-bold">{session.time}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {session.title}
                        </h3>
                        <div className="flex flex-wrap items-center text-gray-600 space-x-4 text-sm mb-2">
                          <span className="flex items-center">
                            <Icon name="User" size={16} className="mr-1" />
                            {session.trainer}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {session.duration}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Badge
                            className={getDifficultyColor(session.difficulty)}
                          >
                            {session.difficulty}
                          </Badge>

                          <div className="flex items-center text-sm">
                            <Icon name="Users" size={16} className="mr-1" />
                            <span className="font-medium">{session.spots}</span>
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

                    <div className="flex flex-col sm:flex-row items-center gap-3 min-w-[200px]">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{
                            width: `${(session.spots / session.maxSpots) * 100}%`,
                          }}
                        ></div>
                      </div>

                      <Button
                        className="w-full sm:w-auto"
                        disabled={session.spots >= session.maxSpots}
                        onClick={() => handleBooking(session.title)}
                      >
                        {session.spots >= session.maxSpots ? (
                          <>
                            <Icon name="X" size={16} className="mr-2" />
                            Занято
                          </>
                        ) : (
                          <>
                            <Icon name="Calendar" size={16} className="mr-2" />
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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не нашли подходящее время? Свяжитесь с нами для индивидуального
            расписания
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <span className="flex items-center text-gray-600">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </span>
            <span className="flex items-center text-gray-600">
              <Icon name="Mail" size={16} className="mr-2" />
              info@fitclub.ru
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSchedule;
