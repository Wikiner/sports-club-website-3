import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TrainingSession } from "@/types/training";
import {
  getTypeInfo,
  getDifficultyColor,
  getAvailabilityStatus,
} from "@/utils/scheduleUtils";

interface SessionCardProps {
  session: TrainingSession;
  onBooking: (session: TrainingSession) => void;
}

const SessionCard = ({ session, onBooking }: SessionCardProps) => {
  const availability = getAvailabilityStatus(session.spots, session.maxSpots);
  const typeInfo = getTypeInfo(session.type);
  const isFull = session.spots >= session.maxSpots;

  return (
    <Card
      className={`transition-all duration-200 hover:shadow-lg border-l-4 ${typeInfo.borderColor} ${availability.bgColor}`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Основная информация */}
          <div className="flex items-center space-x-6">
            <div className="bg-primary text-white rounded-xl px-4 py-3 text-center min-w-[90px]">
              <div className="text-2xl font-bold">{session.time}</div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl font-bold text-gray-900">
                  {session.title}
                </h4>
                <Badge className={typeInfo.color}>{typeInfo.name}</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3">
                <span className="flex items-center">
                  <Icon name="User" size={16} className="mr-1" />
                  {session.trainer}
                </span>
                <span className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {session.duration}
                </span>
                <span className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  {session.room}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Badge className={getDifficultyColor(session.difficulty)}>
                  {session.difficulty}
                </Badge>
                <div className="flex items-center text-sm">
                  <Icon name="Users" size={16} className="mr-1" />
                  <span className="font-medium">{session.spots}</span>
                  <span className="text-gray-500">/{session.maxSpots}</span>
                </div>
                <span className={`text-sm font-medium ${availability.color}`}>
                  {availability.text}
                </span>
              </div>
            </div>
          </div>

          {/* Прогресс-бар и кнопка записи */}
          <div className="flex flex-col sm:flex-row items-center gap-4 min-w-[280px]">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Занято мест</span>
                <span>
                  {session.spots}/{session.maxSpots}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    isFull
                      ? "bg-red-500"
                      : session.spots / session.maxSpots >= 0.8
                        ? "bg-orange-500"
                        : session.spots / session.maxSpots >= 0.5
                          ? "bg-yellow-500"
                          : "bg-green-500"
                  }`}
                  style={{
                    width: `${Math.min((session.spots / session.maxSpots) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            <Button
              className={`w-full sm:w-auto min-w-[140px] ${
                isFull ? "bg-gray-400 hover:bg-gray-400" : ""
              }`}
              disabled={isFull}
              onClick={() => onBooking(session)}
            >
              {isFull ? (
                <>
                  <Icon name="X" size={16} className="mr-2" />
                  Занято
                </>
              ) : (
                <>
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Записаться
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
