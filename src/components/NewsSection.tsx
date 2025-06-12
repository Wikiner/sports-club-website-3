import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNews } from "@/hooks/useNews";

const NewsSection = () => {
  const { news } = useNews();

  // Показываем только активные новости, отсортированные по дате
  const activeNews = news
    .filter((item) => item.isActive)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6); // Показываем последние 6 новостей

  const getTypeColor = (type: string) => {
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

  const getTypeLabel = (type: string) => {
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "announcement":
        return "Megaphone";
      case "promotion":
        return "Tag";
      case "schedule":
        return "Calendar";
      default:
        return "Info";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Новости и объявления
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Будьте в курсе всех событий нашего фитнес-клуба
          </p>
        </div>

        {activeNews.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="Newspaper"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <p className="text-gray-500 text-lg">Новости скоро появятся</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activeNews.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getTypeColor(item.type)}>
                      <Icon
                        name={getTypeIcon(item.type)}
                        size={14}
                        className="mr-1"
                      />
                      {getTypeLabel(item.type)}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
