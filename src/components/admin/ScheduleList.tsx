import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ScheduleItem } from "@/hooks/useSchedule";

interface ScheduleListProps {
  schedule: ScheduleItem[];
  onEdit: (item: ScheduleItem) => void;
  onDelete: (id: string) => void;
}

const ScheduleList = ({ schedule, onEdit, onDelete }: ScheduleListProps) => {
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
              <Button variant="outline" size="sm" onClick={() => onEdit(item)}>
                <Icon name="Edit" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(item.id)}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ScheduleList;
