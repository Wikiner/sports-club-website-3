import { CardHeader, CardTitle } from "@/components/ui/card";

interface SlideHeaderProps {
  title: string;
  subtitle: string;
  currentSlide: number;
  totalSlides: number;
}

const SlideHeader = ({
  title,
  subtitle,
  currentSlide,
  totalSlides,
}: SlideHeaderProps) => (
  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="flex justify-between items-center">
      <div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-blue-100 mt-1">{subtitle}</p>
      </div>
      <div className="text-right">
        <div className="text-sm opacity-75">Слайд</div>
        <div className="text-xl font-bold">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  </CardHeader>
);

export default SlideHeader;
