import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/hooks/useAuth";
import { useSchedule } from "@/hooks/useSchedule";
import { Button } from "@/components/ui/button";
import EditScheduleDialog from "@/components/EditScheduleDialog";
import { useState } from "react";

const Schedule = () => {
  const { schedule } = useSchedule();

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Расписание тренировок
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбирайте тренировки по своему уровню подготовки и свободному
            времени
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {schedule.map((session) => (
            <ScheduleCard key={session.id} session={session} />
          ))}
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

const ScheduleCard = ({ session }: { session: any }) => {
  const { isAdmin } = useAuth();
  const { deleteScheduleItem } = useSchedule();
  const [editDialogOpen, setEditDialogOpen] = useState(false);

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

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить это занятие?")) {
      deleteScheduleItem(session.id);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md relative">
      {isAdmin && (
        <div className="absolute top-4 right-4 flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setEditDialogOpen(true)}
            className="h-8 w-8 p-0"
          >
            <Icon name="Edit" size={14} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDelete}
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
          >
            <Icon name="Trash2" size={14} />
          </Button>
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-primary text-white rounded-lg px-4 py-2 text-center min-w-[80px]">
              <div className="text-2xl font-bold">{session.time}</div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {session.title}
              </h3>
              <div className="flex items-center text-gray-600 space-x-4 text-sm">
                <span className="flex items-center">
                  <Icon name="User" size={16} className="mr-1" />
                  {session.trainer}
                </span>
                <span className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {session.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Badge className={getDifficultyColor(session.difficulty)}>
              {session.difficulty}
            </Badge>

            <div className="flex items-center text-sm text-gray-600">
              <Icon name="Users" size={16} className="mr-1" />
              <span className="font-medium">{session.spots}</span>
              <span className="ml-1">мест</span>
            </div>
          </div>
        </div>
      </CardContent>

      <EditScheduleDialog
        schedule={session}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
      />
    </Card>
  );
};

export default Schedule;
