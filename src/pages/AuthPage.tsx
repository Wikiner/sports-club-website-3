import Header from "@/components/Header";
import AuthForm from "@/components/AuthForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Добро пожаловать в FitClub
            </h1>
            <p className="text-gray-600">
              Войдите в систему или создайте новый аккаунт
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <AuthForm />
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Создавая аккаунт, вы соглашаетесь с нашими условиями использования
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
