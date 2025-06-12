import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";
import Header from "@/components/Header";
import TrainerForm from "@/components/admin/TrainerForm";
import TrainerList from "@/components/admin/TrainerList";
import ScheduleForm from "@/components/admin/ScheduleForm";
import ScheduleList from "@/components/admin/ScheduleList";
import { useTrainers, Trainer } from "@/hooks/useTrainers";
import { useSchedule, ScheduleItem } from "@/hooks/useSchedule";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [editingTrainer, setEditingTrainer] = useState<Trainer | undefined>();
  const [editingSchedule, setEditingSchedule] = useState<
    ScheduleItem | undefined
  >();

  const { trainers, addTrainer, updateTrainer, deleteTrainer } = useTrainers();
  const { schedule, addScheduleItem, updateScheduleItem, deleteScheduleItem } =
    useSchedule();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/auth");
      return;
    }

    const user = JSON.parse(userData);
    if (user.role !== "admin") {
      toast.error("Доступ запрещён. Только для администраторов.");
      navigate("/");
      return;
    }

    setUser(user);
  }, [navigate]);

  const handleEditTrainer = (trainer: Trainer) => {
    setEditingTrainer(trainer);
  };

  const handleCancelEditTrainer = () => {
    setEditingTrainer(undefined);
  };

  const handleEditSchedule = (item: ScheduleItem) => {
    setEditingSchedule(item);
  };

  const handleCancelEditSchedule = () => {
    setEditingSchedule(undefined);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Панель администратора
          </h1>
          <p className="text-gray-600">
            Управление тренерами и расписанием занятий
          </p>
        </div>

        <Tabs defaultValue="trainers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="trainers">
              <Icon name="Users" size={18} className="mr-2" />
              Тренеры
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Icon name="Calendar" size={18} className="mr-2" />
              Расписание
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trainers" className="space-y-6">
            <TrainerForm
              onSubmit={addTrainer}
              onUpdate={updateTrainer}
              editingTrainer={editingTrainer}
              onCancelEdit={handleCancelEditTrainer}
            />
            <TrainerList
              trainers={trainers}
              onEdit={handleEditTrainer}
              onDelete={deleteTrainer}
            />
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <ScheduleForm
              trainers={trainers}
              onSubmit={addScheduleItem}
              onUpdate={updateScheduleItem}
              editingItem={editingSchedule}
              onCancelEdit={handleCancelEditSchedule}
            />
            <ScheduleList
              schedule={schedule}
              onEdit={handleEditSchedule}
              onDelete={deleteScheduleItem}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
