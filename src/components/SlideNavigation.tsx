import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavigationProps) => (
  <div className="p-6 border-t bg-gray-50">
    <div className="flex justify-between items-center mb-4">
      <Button
        onClick={onPrevious}
        variant="outline"
        disabled={currentSlide === 0}
        className="flex items-center space-x-2"
      >
        <Icon name="ChevronLeft" size={16} />
        <span>Назад</span>
      </Button>

      <Button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center space-x-2"
      >
        <span>Далее</span>
        <Icon name="ChevronRight" size={16} />
      </Button>
    </div>

    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onGoToSlide(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === currentSlide
              ? "bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  </div>
);

export default SlideNavigation;
