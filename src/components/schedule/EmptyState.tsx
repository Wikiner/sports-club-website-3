import Icon from "@/components/ui/icon";

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <Icon name="Calendar" size={48} className="mx-auto text-gray-400 mb-4" />
      <p className="text-gray-600 text-lg">
        Нет тренировок по выбранным фильтрам
      </p>
    </div>
  );
};

export default EmptyState;
