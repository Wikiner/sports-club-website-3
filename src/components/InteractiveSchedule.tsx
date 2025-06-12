import { useState } from "react";
import { TrainingSession } from "@/types/training";
import { sessionsData } from "@/data/sessionsData";
import ScheduleFilters from "@/components/schedule/ScheduleFilters";
import ScheduleLegend from "@/components/schedule/ScheduleLegend";
import SessionCard from "@/components/schedule/SessionCard";
import EmptyState from "@/components/schedule/EmptyState";
import ContactInfo from "@/components/schedule/ContactInfo";

const InteractiveSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

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
    const dates = [...new Set(sessionsData.map((s) => s.date))];
    return dates.sort();
  };

  const filteredSessions = sessionsData.filter((session) => {
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

        <ScheduleFilters
          selectedDate={selectedDate}
          selectedType={selectedType}
          onDateChange={setSelectedDate}
          onTypeChange={setSelectedType}
          availableDates={getUniqueDates()}
          formatDate={formatDate}
        />

        <ScheduleLegend />

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
                  .map((session) => (
                    <SessionCard
                      key={session.id}
                      session={session}
                      onBooking={handleBooking}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSessions.length === 0 && <EmptyState />}

        <ContactInfo />
      </div>
    </section>
  );
};

export default InteractiveSchedule;
