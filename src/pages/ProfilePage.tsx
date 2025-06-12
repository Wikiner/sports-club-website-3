import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import UserProfile from "@/components/UserProfile";

const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Дополнительная проверка авторизации на уровне страницы
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/auth");
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-12">
        <div className="container mx-auto px-4">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
