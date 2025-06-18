import Presentation from "@/components/Presentation";
import Header from "@/components/Header";

const PresentationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Создание функций в программировании
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Интерактивная презентация для изучения основ создания функций
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">📚 15 слайдов</span>
              <span className="flex items-center">⏱️ ~30 минут</span>
              <span className="flex items-center">🎯 Для начинающих</span>
            </div>
          </div>
        </div>
        <Presentation />
      </div>
    </div>
  );
};

export default PresentationPage;
