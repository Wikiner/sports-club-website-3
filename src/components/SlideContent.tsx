import { CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface SlideContentProps {
  children: ReactNode;
}

const SlideContent = ({ children }: SlideContentProps) => (
  <CardContent className="p-8 min-h-[500px]">{children}</CardContent>
);

export default SlideContent;
