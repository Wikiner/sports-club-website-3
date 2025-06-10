import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  // Получаем иконку по имени или используем fallback
  const IconComponent =
    (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return <LucideIcons.CircleAlert size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
