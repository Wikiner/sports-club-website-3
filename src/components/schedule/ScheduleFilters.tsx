import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ScheduleFiltersProps {
  selectedDate: string;
  selectedType: string;
  onDateChange: (date: string) => void;
  onTypeChange: (type: string) => void;
  availableDates: string[];
  formatDate: (date: string) => string;
}

const ScheduleFilters = ({
  selectedDate,
  selectedType,
  onDateChange,
  onTypeChange,
  availableDates,
  formatDate,
}: ScheduleFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
      <div className="flex-1">
        <Select value={selectedDate} onValueChange={onDateChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Выберите дату" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все даты</SelectItem>
            {availableDates.map((date) => (
              <SelectItem key={date} value={date}>
                {formatDate(date)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Тип тренировки" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все типы</SelectItem>
            <SelectItem value="yoga">Йога</SelectItem>
            <SelectItem value="strength">Силовые</SelectItem>
            <SelectItem value="cardio">Кардио</SelectItem>
            <SelectItem value="crossfit">Кроссфит</SelectItem>
            <SelectItem value="pilates">Пилатес</SelectItem>
            <SelectItem value="dance">Танцы</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ScheduleFilters;
