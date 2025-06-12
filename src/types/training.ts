export interface TrainingSession {
  id: number;
  date: string;
  time: string;
  title: string;
  trainer: string;
  duration: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  spots: number;
  maxSpots: number;
  type: "yoga" | "strength" | "cardio" | "crossfit" | "pilates" | "dance";
  room: string;
}

export interface TypeInfo {
  name: string;
  color: string;
  borderColor: string;
}

export interface AvailabilityStatus {
  color: string;
  text: string;
  bgColor: string;
}
