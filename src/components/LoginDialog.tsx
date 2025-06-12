import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/hooks/useAuth";

interface LoginDialogProps {
  children: React.ReactNode;
}

const LoginDialog = ({ children }: LoginDialogProps) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return;
    }
    const success = login(username.trim(), password);
    if (success) {
      setOpen(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Вход в систему</DialogTitle>
          <DialogDescription>
            Введите логин и пароль для входа
          </DialogDescription>
        </DialogHeader>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-blue-800 font-medium mb-2">
            Демо-аккаунты:
          </p>
          <div className="text-xs text-blue-700 space-y-1">
            <div>
              <strong>Админ:</strong> admin / admin123 👑
            </div>
            <div>
              <strong>Пользователь:</strong> user / user123
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Логин</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
