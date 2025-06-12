import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";
import Header from "@/components/Header";

interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  photo: string;
}

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  trainer: string;
  duration: string;
  difficulty: string;
  spots: number;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  // Форма тренера
  const [trainerForm, setTrainerForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    photo: "",
  });

  // Форма расписания
  const [scheduleForm, setScheduleForm] = useState({
    time: "",
    title: "",
    trainer: "",
    duration: "",
    difficulty: "Средне",
    spots: 10,
  });

  const [editingTrainer, setEditingTrainer] = useState<string | null>(null);
  const [editingSchedule, setEditingSchedule] = useState<string | null>(null);

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
    loadData();
  }, [navigate]);

  const loadData = () => {
    // Загружаем тренеров из localStorage
    const savedTrainers = localStorage.getItem("trainers");
    if (savedTrainers) {
      setTrainers(JSON.parse(savedTrainers));
    } else {
      // Данные по умолчанию
      const defaultTrainers = [
        {
          id: "1",
          name: "Анна Петрова",
          specialization: "Йога",
          experience: "5 лет",
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        },
        {
          id: "2",
          name: "Михаил Сидоров",
          specialization: "Силовые тренировки",
          experience: "8 лет",
          photo:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        },
        {
          id: "3",
          name: "Елена Козлова",
          specialization: "Аэробика",
          experience: "6 лет",
          photo:
            "https://images.unsplash.com/photo-1494790108755-2616b332e1a0?w=400",
        },
      ];
      setTrainers(defaultTrainers);
      localStorage.setItem("trainers", JSON.stringify(defaultTrainers));
    }

    // Загружаем расписание из localStorage
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      setSchedule(JSON.parse(savedSchedule));
    } else {
      // Данные по умолчанию
      const defaultSchedule = [
        {
          id: "1",
          time: "07:00",
          title: "Утренняя йога",
          trainer: "Анна Петрова",
          duration: "60 мин",
          difficulty: "Легко",
          spots: 8,
        },
        {
          id: "2",
          time: "09:00",
          title: "Силовая тренировка",
          trainer: "Михаил Сидоров",
          duration: "90 мин",
          difficulty: "Сложно",
          spots: 5,
        },
        {
          id: "3",
          time: "11:00",
          title: "Аэробика",
          trainer: "Елена Козлова",
          duration: "45 мин",
          difficulty: "Средне",
          spots: 12,
        },
      ];
      setSchedule(defaultSchedule);
      localStorage.setItem("schedule", JSON.stringify(defaultSchedule));
    }
  };

  const handleAddTrainer = () => {
    if (
      !trainerForm.name ||
      !trainerForm.specialization ||
      !trainerForm.experience
    ) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const newTrainer: Trainer = {
      id: Date.now().toString(),
      ...trainerForm,
      photo:
        trainerForm.photo ||
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    };

    const updatedTrainers = [...trainers, newTrainer];
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));

    setTrainerForm({ name: "", specialization: "", experience: "", photo: "" });
    toast.success("Тренер добавлен успешно!");
  };

  const handleEditTrainer = (trainer: Trainer) => {
    setTrainerForm(trainer);
    setEditingTrainer(trainer.id);
  };

  const handleUpdateTrainer = () => {
    const updatedTrainers = trainers.map((t) =>
      t.id === editingTrainer ? { ...trainerForm, id: editingTrainer } : t,
    );
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));

    setTrainerForm({ name: "", specialization: "", experience: "", photo: "" });
    setEditingTrainer(null);
    toast.success("Тренер обновлён успешно!");
  };

  const handleDeleteTrainer = (id: string) => {
    const updatedTrainers = trainers.filter((t) => t.id !== id);
    setTrainers(updatedTrainers);
    localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
    toast.success("Тренер удалён");
  };

  const handleAddSchedule = () => {
    if (
      !scheduleForm.time ||
      !scheduleForm.title ||
      !scheduleForm.trainer ||
      !scheduleForm.duration
    ) {
      toast.error("Заполните все обязательные поля");
      return;
    }

    const newScheduleItem: ScheduleItem = {
      id: Date.now().toString(),
      ...scheduleForm,
    };

    const updatedSchedule = [...schedule, newScheduleItem];
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));

    setScheduleForm({
      time: "",
      title: "",
      trainer: "",
      duration: "",
      difficulty: "Средне",
      spots: 10,
    });
    toast.success("Занятие добавлено в расписание!");
  };

  const handleEditSchedule = (item: ScheduleItem) => {
    setScheduleForm(item);
    setEditingSchedule(item.id);
  };

  const handleUpdateSchedule = () => {
    const updatedSchedule = schedule.map((s) =>
      s.id === editingSchedule ? { ...scheduleForm, id: editingSchedule } : s,
    );
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));

    setScheduleForm({
      time: "",
      title: "",
      trainer: "",
      duration: "",
      difficulty: "Средне",
      spots: 10,
    });
    setEditingSchedule(null);
    toast.success("Занятие обновлено успешно!");
  };

  const handleDeleteSchedule = (id: string) => {
    const updatedSchedule = schedule.filter((s) => s.id !== id);
    setSchedule(updatedSchedule);
    localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    toast.success("Занятие удалено из расписания");
  };

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
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingTrainer
                    ? "Редактировать тренера"
                    : "Добавить тренера"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя тренера *</Label>
                    <Input
                      id="name"
                      value={trainerForm.name}
                      onChange={(e) =>
                        setTrainerForm({ ...trainerForm, name: e.target.value })
                      }
                      placeholder="Введите имя тренера"
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialization">Специализация *</Label>
                    <Input
                      id="specialization"
                      value={trainerForm.specialization}
                      onChange={(e) =>
                        setTrainerForm({
                          ...trainerForm,
                          specialization: e.target.value,
                        })
                      }
                      placeholder="Йога, Силовые тренировки..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Опыт работы *</Label>
                    <Input
                      id="experience"
                      value={trainerForm.experience}
                      onChange={(e) =>
                        setTrainerForm({
                          ...trainerForm,
                          experience: e.target.value,
                        })
                      }
                      placeholder="5 лет"
                    />
                  </div>
                  <div>
                    <Label htmlFor="photo">Фото (URL)</Label>
                    <Input
                      id="photo"
                      value={trainerForm.photo}
                      onChange={(e) =>
                        setTrainerForm({
                          ...trainerForm,
                          photo: e.target.value,
                        })
                      }
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={
                      editingTrainer ? handleUpdateTrainer : handleAddTrainer
                    }
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon
                      name={editingTrainer ? "Save" : "Plus"}
                      size={16}
                      className="mr-2"
                    />
                    {editingTrainer ? "Сохранить" : "Добавить тренера"}
                  </Button>
                  {editingTrainer && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingTrainer(null);
                        setTrainerForm({
                          name: "",
                          specialization: "",
                          experience: "",
                          photo: "",
                        });
                      }}
                    >
                      Отмена
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {trainers.map((trainer) => (
                <Card key={trainer.id}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={trainer.photo}
                        alt={trainer.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {trainer.name}
                        </h3>
                        <p className="text-gray-600">
                          {trainer.specialization}
                        </p>
                        <p className="text-sm text-gray-500">
                          Опыт: {trainer.experience}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditTrainer(trainer)}
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteTrainer(trainer.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingSchedule
                    ? "Редактировать занятие"
                    : "Добавить занятие"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="time">Время *</Label>
                    <Input
                      id="time"
                      value={scheduleForm.time}
                      onChange={(e) =>
                        setScheduleForm({
                          ...scheduleForm,
                          time: e.target.value,
                        })
                      }
                      placeholder="07:00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Название занятия *</Label>
                    <Input
                      id="title"
                      value={scheduleForm.title}
                      onChange={(e) =>
                        setScheduleForm({
                          ...scheduleForm,
                          title: e.target.value,
                        })
                      }
                      placeholder="Утренняя йога"
                    />
                  </div>
                  <div>
                    <Label htmlFor="trainer">Тренер *</Label>
                    <Select
                      value={scheduleForm.trainer}
                      onValueChange={(value) =>
                        setScheduleForm({ ...scheduleForm, trainer: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тренера" />
                      </SelectTrigger>
                      <SelectContent>
                        {trainers.map((trainer) => (
                          <SelectItem key={trainer.id} value={trainer.name}>
                            {trainer.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Длительность *</Label>
                    <Input
                      id="duration"
                      value={scheduleForm.duration}
                      onChange={(e) =>
                        setScheduleForm({
                          ...scheduleForm,
                          duration: e.target.value,
                        })
                      }
                      placeholder="60 мин"
                    />
                  </div>
                  <div>
                    <Label htmlFor="difficulty">Сложность</Label>
                    <Select
                      value={scheduleForm.difficulty}
                      onValueChange={(value) =>
                        setScheduleForm({ ...scheduleForm, difficulty: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Легко">Легко</SelectItem>
                        <SelectItem value="Средне">Средне</SelectItem>
                        <SelectItem value="Сложно">Сложно</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="spots">Количество мест</Label>
                    <Input
                      id="spots"
                      type="number"
                      value={scheduleForm.spots}
                      onChange={(e) =>
                        setScheduleForm({
                          ...scheduleForm,
                          spots: parseInt(e.target.value) || 0,
                        })
                      }
                      placeholder="10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={
                      editingSchedule ? handleUpdateSchedule : handleAddSchedule
                    }
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon
                      name={editingSchedule ? "Save" : "Plus"}
                      size={16}
                      className="mr-2"
                    />
                    {editingSchedule ? "Сохранить" : "Добавить занятие"}
                  </Button>
                  {editingSchedule && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingSchedule(null);
                        setScheduleForm({
                          time: "",
                          title: "",
                          trainer: "",
                          duration: "",
                          difficulty: "Средне",
                          spots: 10,
                        });
                      }}
                    >
                      Отмена
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {schedule.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                        <div className="text-xl font-bold">{item.time}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>👨‍🏫 {item.trainer}</span>
                          <span>⏱️ {item.duration}</span>
                          <span>👥 {item.spots} мест</span>
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(item.difficulty)}>
                        {item.difficulty}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditSchedule(item)}
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteSchedule(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
