import { TypeInfo, AvailabilityStatus } from "@/types/training";

export const getTypeInfo = (type: string): TypeInfo => {
  const typeMap = {
    yoga: {
      name: "Йога",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      borderColor: "border-l-purple-500",
    },
    strength: {
      name: "Силовая",
      color: "bg-red-100 text-red-800 border-red-200",
      borderColor: "border-l-red-500",
    },
    cardio: {
      name: "Кардио",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      borderColor: "border-l-blue-500",
    },
    crossfit: {
      name: "Кроссфит",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      borderColor: "border-l-orange-500",
    },
    pilates: {
      name: "Пилатес",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      borderColor: "border-l-pink-500",
    },
    dance: {
      name: "Танцы",
      color: "bg-green-100 text-green-800 border-green-200",
      borderColor: "border-l-green-500",
    },
  };

  return (
    typeMap[type as keyof typeof typeMap] || {
      name: type,
      color: "bg-gray-100 text-gray-800",
      borderColor: "border-l-gray-500",
    }
  );
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "Легко":
      return "bg-green-100 text-green-800 border-green-200";
    case "Средне":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Сложно":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getAvailabilityStatus = (
  spots: number,
  maxSpots: number,
): AvailabilityStatus => {
  const percentage = (spots / maxSpots) * 100;

  if (spots >= maxSpots)
    return { color: "text-red-600", text: "Мест нет", bgColor: "bg-red-50" };
  if (percentage >= 80)
    return {
      color: "text-orange-600",
      text: "Почти заполнено",
      bgColor: "bg-orange-50",
    };
  if (percentage >= 50)
    return {
      color: "text-yellow-600",
      text: "Мало мест",
      bgColor: "bg-yellow-50",
    };
  return {
    color: "text-green-600",
    text: "Много мест",
    bgColor: "bg-green-50",
  };
};
