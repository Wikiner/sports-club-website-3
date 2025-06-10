import Header from "@/components/Header";
import UserProfile from "@/components/UserProfile";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
