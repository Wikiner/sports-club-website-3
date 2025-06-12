import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { toast } from "sonner";
import { apiService } from "../services/api";

export interface User {
  id: string;
  username: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
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

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const result = await apiService.login(username, password);
      setUser(result.user);
      localStorage.setItem("authToken", result.token);
      localStorage.setItem("currentUser", JSON.stringify(result.user));
      toast.success(`Добро пожаловать, ${result.user.username}!`);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      // Fallback to demo users
      const foundUser = demoUsers.find(
        (u) => u.username === username && u.password === password,
      );

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(userWithoutPassword),
        );
        toast.success(`Добро пожаловать, ${foundUser.username}!`);
        return true;
      } else {
        toast.error("Неверный логин или пароль");
        return false;
      }
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      localStorage.removeItem("currentUser");
      localStorage.removeItem("authToken");
      toast.success("Вы вышли из системы");
    }
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
