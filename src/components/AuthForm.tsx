import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const AuthForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Заполните все поля");
      return;
    }

    if (!validateEmail(loginData.email)) {
      toast.error("Введите корректный email");
      return;
    }

    // Имитация входа
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: loginData.email,
        role: "спортсмен",
        name: "Пользователь",
      }),
    );

    toast.success("Добро пожаловать!");
    setTimeout(() => navigate("/profile"), 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.password ||
      !registerData.role
    ) {
      toast.error("Заполните все поля");
      return;
    }

    if (!validateEmail(registerData.email)) {
      toast.error("Введите корректный email");
      return;
    }

    if (!validatePassword(registerData.password)) {
      toast.error("Пароль должен содержать минимум 6 символов");
      return;
    }

    // Сохранение пользователя
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: registerData.name,
        email: registerData.email,
        role: registerData.role,
      }),
    );

    toast.success("Аккаунт успешно создан!");
    setTimeout(() => navigate("/profile"), 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Вход</TabsTrigger>
          <TabsTrigger value="register">Регистрация</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="example@mail.com"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password">Пароль</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="register-name">Имя</Label>
              <Input
                id="register-name"
                type="text"
                placeholder="Ваше имя"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input
                id="register-email"
                type="email"
                placeholder="example@mail.com"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-password">Пароль</Label>
              <Input
                id="register-password"
                type="password"
                placeholder="Минимум 6 символов"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-role">Тип аккаунта</Label>
              <Select
                value={registerData.role}
                onValueChange={(value) =>
                  setRegisterData({ ...registerData, role: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите тип аккаунта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="спортсмен">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} />
                      <span>Спортсмен</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="тренер">
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} />
                      <span>Тренер</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="администратор">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={16} />
                      <span>Администратор</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Icon name="UserPlus" size={18} className="mr-2" />
              Создать аккаунт
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
