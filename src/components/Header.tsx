import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Проверяем авторизацию при загрузке
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Вы вышли из аккаунта");
  };

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/booking", label: "Запись", icon: "Calendar" },
    ...(user ? [{ path: "/profile", label: "Кабинет", icon: "User" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Dumbbell" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-gray-900">FitClub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Привет, <span className="font-medium">{user.name}</span>
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выход
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Вход/Регистрация
                </Button>
              </Link>
            )}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
