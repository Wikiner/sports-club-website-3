import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { News } from "@/hooks/useNews";

interface NewsListProps {
  news: News[];
  onEdit: (news: News) => void;
  onDelete: (id: string) => void;
}

const NewsList = ({ news, onEdit, onDelete }: NewsListProps) => {
  const getTypeColor = (type: News["type"]) => {
    switch (type) {
      case "announcement":
        return "bg-blue-100 text-blue-800";
      case "promotion":
        return "bg-green-100 text-green-800";
      case "schedule":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: News["type"]) => {
    switch (type) {
      case "announcement":
        return "Объявление";
      case "promotion":
        return "Акция";
      case "schedule":
        return "Расписание";
      default:
        return type;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="List" size={20} />
          Список новостей
        </CardTitle>
      </CardHeader>
      <CardContent>
        {news.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Новости не добавлены</p>
        ) : (
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge className={getTypeColor(item.type)}>
                        {getTypeLabel(item.type)}
                      </Badge>
                      {!item.isActive && (
                        <Badge variant="secondary">Неактивна</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.content}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(item)}
                    >
                      <Icon name="Edit" size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onDelete(item.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsList;
