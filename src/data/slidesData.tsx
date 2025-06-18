
import { ReactNode } from 'react';

export interface Slide {
  title: string;
  subtitle: string;
  content: ReactNode;
}

export const slidesData: Slide[] = [
  {
    title: "Создание функций в программировании",
    subtitle: "Основы программирования для начинающих",
    content: (
      <div className="text-center space-y-6">
        <div className="text-6xl">⚡</div>
        <p className="text-xl text-gray-600">
          Изучаем создание функций — основу любой программы
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Что мы изучим:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Что такое функция</li>
              <li>• Синтаксис создания</li>
              <li>• Параметры и аргументы</li>
              <li>• Возвращаемые значения</li>
            </ul>
            <ul className="space-y-2">
              <li>• Области видимости</li>
              <li>• Типы функций</li>
              <li>• Лучшие практики</li>
              <li>• Примеры из жизни</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Что такое функция?",
    subtitle: "Базовое понятие",
    content: (
      <div className="space-y-4">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-lg">🧩 Определение</h4>
          <p className="text-gray-700 mb-4">
            <strong>Функция</strong> — это блок кода, который выполняет определенную задачу и может быть вызван по имени.
          </p>
          <div className="bg-white p-4 rounded border-l-4 border-green-400">
            <p className="text-sm italic">
              "Представьте функцию как кофемашину: вы нажимаете кнопку (вызываете функцию), 
              она обрабатывает кофе (выполняет код) и выдает готовый напиток (возвращает результат)."
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">🎯 Зачем нужны функции?</h4>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Повторное использование:</strong> написали один раз — используем много раз</li>
            <li>• <strong>Структурированность:</strong> разбиваем большую задачу на маленькие</li>
            <li>• <strong>Читаемость:</strong> код становится понятнее</li>
            <li>• <strong>Тестирование:</strong> легче проверить работу отдельных частей</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Базовый синтаксис функции",
    subtitle: "Структура и компоненты",
    content: (
      <div className="space-y-4">
        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3">📝 Структура функции</h4>
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div><span className="text-blue-400">function</span> <span className="text-yellow-400">имяФункции</span><span className="text-white">(</span><span className="text-orange-400">параметры</span><span className="text-white">) {</span></div>
              <div className="ml-4 text-gray-300">// код функции</div>
              <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-green-400">результат</span><span className="text-white">;</span></div>
              <div><span className="text-white">}</span></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">🔤 Части функции:</h5>
            <ul className="text-sm space-y-1">
              <li>• <strong>function</strong> — ключевое слово</li>
              <li>• <strong>имяФункции</strong> — название</li>
              <li>• <strong>(параметры)</strong> — входные данные</li>
              <li>• <strong>{'{...}'}</strong> — тело функции</li>
              <li>• <strong>return</strong> — возврат результата</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">📋 Правила именования:</h5>
            <ul className="text-sm space-y-1">
              <li>• Начинается с буквы</li>
              <li>• Может содержать цифры, _</li>
              <li>• Используйте camelCase</li>
              <li>• Описывайте действие</li>
              <li>• Избегайте сокращений</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }
];
