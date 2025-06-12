import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import LoginDialog from "@/components/LoginDialog";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/booking", label: "Запись", icon: "Calendar" },
    { path: "/pricing", label: "Цены", icon: "DollarSign" },
    { path: "/trainers", label: "Тренеры", icon: "Users" },
    { path: "/contact", label: "Поддержка", icon: "MessageCircle" },
    ...(user ? [{ path: "/profile", label: "Кабинет", icon: "User" }] : []),
    ...(isAdmin
      ? [{ path: "/admin", label: "Админ панель", icon: "Settings" }]
      : []),
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
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  {user.username} {isAdmin && "(Админ)"}
                </span>
                <Button variant="outline" size="sm" onClick={logout}>
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти
                </Button>
              </div>
            ) : (
              <LoginDialog>
                <Button variant="outline" size="sm">
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Button>
              </LoginDialog>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
