import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Trainer } from "@/hooks/useTrainers";

interface TrainerListProps {
  trainers: Trainer[];
  onEdit: (trainer: Trainer) => void;
  onDelete: (id: string) => void;
}

const TrainerList = ({ trainers, onEdit, onDelete }: TrainerListProps) => {
  return (
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
                <h3 className="text-lg font-semibold">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.specialization}</p>
                <p className="text-sm text-gray-500">
                  Опыт: {trainer.experience}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(trainer)}
              >
                <Icon name="Edit" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(trainer.id)}
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

export default TrainerList;
