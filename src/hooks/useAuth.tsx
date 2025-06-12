import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  username: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const useAuthHook = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const demoUsers = [
    {
      id: "1",
      username: "admin",
      password: "admin123",
      role: "admin" as const,
    },
    {
      id: "2",
      username: "user",
      password: "user123",
      role: "user" as const,
    },
  ];

  const login = (username: string, password: string): boolean => {
    const foundUser = demoUsers.find(
      (u) => u.username === username && u.password === password,
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
      toast.success(`Добро пожаловать, ${foundUser.username}!`);
      return true;
    } else {
      toast.error("Неверный логин или пароль");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    toast.success("Вы вышли из системы");
  };

  const isAdmin = user?.role === "admin";

  return {
    user,
    login,
    logout,
    isAdmin,
  };
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthHook();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
