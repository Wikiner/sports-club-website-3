
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
    },
    {
      title: "Первая функция: Hello World",
      subtitle: "Практический пример",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🚀 Создаем первую функцию</h4>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm mb-4">
              <div className="space-y-1">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">sayHello</span><span className="text-white">() {</span></div>
                <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-green-300">"Привет, мир!"</span><span className="text-white">);</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-gray-400">// Вызов функции:</span></div>
                <div><span className="text-yellow-400">sayHello</span><span className="text-white">();</span> <span className="text-gray-400">// Выведет: Привет, мир!</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🔍 Разбор кода:</h5>
              <ul className="text-sm space-y-1">
                <li>• <code className="bg-white px-1 rounded">function</code> — объявляем функцию</li>
                <li>• <code className="bg-white px-1 rounded">sayHello</code> — имя функции</li>
                <li>• <code className="bg-white px-1 rounded">()</code> — нет параметров</li>
                <li>• <code className="bg-white px-1 rounded">{'{}'}</code> — тело с одной командой</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">⚡ Вызов функции:</h5>
              <ul className="text-sm space-y-1">
                <li>• Пишем имя функции</li>
                <li>• Добавляем круглые скобки</li>
                <li>• Ставим точку с запятой</li>
                <li>• Функция выполнится</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Параметры и аргументы",
      subtitle: "Передача данных в функцию",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">📥 Что такое параметры?</h4>
            <p className="mb-4 text-gray-700">
              <strong>Параметры</strong> — переменные в определении функции. 
              <strong>Аргументы</strong> — конкретные значения при вызове.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">greetUser</span><span className="text-white">(</span><span className="text-orange-400">name</span><span className="text-white">) {</span></div>
                <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-green-300">"Привет, "</span> <span className="text-white">+</span> <span className="text-orange-400">name</span> <span className="text-white">+</span> <span className="text-green-300">"!"</span><span className="text-white">);</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-yellow-400">greetUser</span><span className="text-white">(</span><span className="text-green-300">"Анна"</span><span className="text-white">);</span> <span className="text-gray-400">// Привет, Анна!</span></div>
                <div><span className="text-yellow-400">greetUser</span><span className="text-white">(</span><span className="text-green-300">"Петр"</span><span className="text-white">);</span> <span className="text-gray-400">// Привет, Петр!</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">📝 Множественные параметры:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">add</span>(<span className="text-orange-400">a, b</span>) {</div>
                <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-orange-400">a</span> + <span className="text-orange-400">b</span>;</div>
                <div>}</div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🎯 Значения по умолчанию:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">greet</span>(<span className="text-orange-400">name = "друг"</span>) {</div>
                <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-green-300">"Привет, "</span> + <span className="text-orange-400">name</span>;</div>
                <div>}</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Возвращаемые значения",
      subtitle: "Получение результата работы функции",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">📤 Оператор return</h4>
            <p className="mb-4 text-gray-700">
              Оператор <code className="bg-white px-2 py-1 rounded">return</code> возвращает значение из функции и завершает её выполнение.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">multiply</span><span className="text-white">(</span><span className="text-orange-400">x, y</span><span className="text-white">) {</span></div>
                <div className="ml-4"><span className="text-green-400">let</span> <span className="text-white">result = </span><span className="text-orange-400">x</span> <span className="text-white">* </span><span className="text-orange-400">y</span><span className="text-white">;</span></div>
                <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-white">result;</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-green-400">let</span> <span className="text-white">answer = </span><span className="text-yellow-400">multiply</span><span className="text-white">(</span><span className="text-pink-400">5, 3</span><span className="text-white">);</span></div>
                <div><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-white">answer</span><span className="text-white">);</span> <span className="text-gray-400">// 15</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">✅ С return:</h5>
              <ul className="text-sm space-y-1">
                <li>• Функция возвращает значение</li>
                <li>• Можно сохранить результат</li>
                <li>• Можно использовать в выражениях</li>
                <li>• Завершает выполнение функции</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">❌ Без return:</h5>
              <ul className="text-sm space-y-1">
                <li>• Функция возвращает undefined</li>
                <li>• Только выполняет действия</li>
                <li>• Результат нельзя сохранить</li>
                <li>• Выполняется до конца</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Область видимости",
      subtitle: "Где живут переменные",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🔍 Понятие области видимости</h4>
            <p className="mb-4 text-gray-700">
              <strong>Область видимости</strong> определяет, где в коде можно использовать переменную.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div><span className="text-green-400">let</span> <span className="text-white">globalVar = </span><span className="text-green-300">"Я глобальная"</span><span className="text-white">;</span></div>
                <div className="mt-2"></div>
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">example</span><span className="text-white">() {</span></div>
                <div className="ml-4"><span className="text-green-400">let</span> <span className="text-white">localVar = </span><span className="text-green-300">"Я локальная"</span><span className="text-white">;</span></div>
                <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-white">globalVar</span><span className="text-white">);</span> <span className="text-gray-400">// Работает</span></div>
                <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-white">localVar</span><span className="text-white">);</span> <span className="text-gray-400">// Работает</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-white">localVar</span><span className="text-white">);</span> <span className="text-red-400">// Ошибка!</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🌍 Глобальные переменные:</h5>
              <ul className="text-sm space-y-1">
                <li>• Объявлены вне функций</li>
                <li>• Доступны везде в программе</li>
                <li>• Живут все время выполнения</li>
                <li>• Используйте осторожно</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🏠 Локальные переменные:</h5>
              <ul className="text-sm space-y-1">
                <li>• Объявлены внутри функций</li>
                <li>• Доступны только в функции</li>
                <li>• Удаляются после выполнения</li>
                <li>• Предпочтительны для использования</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Типы функций",
      subtitle: "Разные способы создания",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">📚 Три основных способа</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <h5 className="font-semibold mb-2">1️⃣ Function Declaration (Объявление)</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm mb-2">
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">sayHi</span>() {</div>
                <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-green-300">"Привет!"</span>;</div>
                <div>}</div>
              </div>
              <p className="text-sm text-gray-600">✅ Поднимается наверх (hoisting), можно вызвать до объявления</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <h5 className="font-semibold mb-2">2️⃣ Function Expression (Выражение)</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm mb-2">
                <div><span className="text-green-400">const</span> <span className="text-white">sayHi = </span><span className="text-blue-400">function</span>() {</div>
                <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-green-300">"Привет!"</span>;</div>
                <div>};</div>
              </div>
              <p className="text-sm text-gray-600">⚠️ Можно вызвать только после объявления</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
              <h5 className="font-semibold mb-2">3️⃣ Arrow Function (Стрелочная)</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm mb-2">
                <div><span className="text-green-400">const</span> <span className="text-white">sayHi = () => </span><span className="text-green-300">"Привет!"</span>;</div>
              </div>
              <p className="text-sm text-gray-600">🚀 Короткий синтаксис, современный подход</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Стрелочные функции",
      subtitle: "Современный синтаксис ES6",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🏹 Arrow Functions</h4>
            <p className="mb-4 text-gray-700">
              Стрелочные функции — современный способ создания функций с более коротким синтаксисом.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">📝 Синтаксис:</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Обычная функция:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs">
                    <div><span className="text-blue-400">function</span> <span className="text-yellow-400">add</span>(<span className="text-orange-400">a, b</span>) {</div>
                    <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-orange-400">a</span> + <span className="text-orange-400">b</span>;</div>
                    <div>}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Стрелочная функция:</p>
                  <div className="bg-gray-800 text-white p-3 rounded font-mono text-xs">
                    <div><span className="text-green-400">const</span> <span className="text-white">add = (</span><span className="text-orange-400">a, b</span><span className="text-white">) => </span><span className="text-orange-400">a</span> + <span className="text-orange-400">b</span>;</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">✅ Преимущества:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Короткий синтаксис</li>
                  <li>• Неявный return для одного выражения</li>
                  <li>• Современный стандарт</li>
                  <li>• Лексический this</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📖 Варианты записи:</h5>
                <div className="bg-gray-800 text-white p-2 rounded font-mono text-xs space-y-1">
                  <div><span className="text-gray-400">// Один параметр</span></div>
                  <div><span className="text-white">x => x * 2</span></div>
                  <div><span className="text-gray-400">// Несколько строк</span></div>
                  <div><span className="text-white">(a, b) => {</span></div>
                  <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-white">a + b;</span></div>
                  <div><span className="text-white">}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Практические примеры",
      subtitle: "Полезные функции из реальной жизни",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">💡 Примеры полезных функций</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">🧮 Математические функции:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                <div className="space-y-2">
                  <div><span className="text-gray-400">// Найти максимальное число</span></div>
                  <div><span className="text-green-400">const</span> <span className="text-white">findMax = (</span><span className="text-orange-400">a, b</span><span className="text-white">) => </span><span className="text-orange-400">a</span> > <span className="text-orange-400">b</span> ? <span className="text-orange-400">a</span> : <span className="text-orange-400">b</span>;</div>
                  <div></div>
                  <div><span className="text-gray-400">// Проверить четность</span></div>
                  <div><span className="text-green-400">const</span> <span className="text-white">isEven = </span><span className="text-orange-400">num</span> => <span className="text-orange-400">num</span> % 2 === 0;</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">📝 Работа со строками:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                <div className="space-y-2">
                  <div><span className="text-gray-400">// Полное имя</span></div>
                  <div><span className="text-green-400">const</span> <span className="text-white">getFullName = (</span><span className="text-orange-400">first, last</span><span className="text-white">) => {</span></div>
                  <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-green-300">`</span><span className="text-orange-400">${first}</span> <span className="text-orange-400">${last}</span><span className="text-green-300">`</span>;</div>
                  <div>};</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold mb-2">✅ Валидация данных:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                <div className="space-y-2">
                  <div><span className="text-gray-400">// Проверка email</span></div>
                  <div><span className="text-green-400">const</span> <span className="text-white">isValidEmail = </span><span className="text-orange-400">email</span> => {</div>
                  <div className="ml-2"><span className="text-purple-400">return</span> <span className="text-orange-400">email</span>.<span className="text-yellow-400">includes</span>(<span className="text-green-300">'@'</span>) && <span className="text-orange-400">email</span>.<span className="text-yellow-400">includes</span>(<span className="text-green-300">'.'</span>);</div>
                  <div>};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Функции высшего порядка",
      subtitle: "Функции как параметры",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🔄 Функции высшего порядка</h4>
            <p className="mb-4 text-gray-700">
              Функции могут принимать другие функции как параметры или возвращать функции как результат.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div><span className="text-gray-400">// Функция, принимающая другую функцию</span></div>
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">calculate</span><span className="text-white">(</span><span className="text-orange-400">a, b, operation</span><span className="text-white">) {</span></div>
                <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-yellow-400">operation</span><span className="text-white">(</span><span className="text-orange-400">a, b</span><span className="text-white">);</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-green-400">const</span> <span className="text-white">add = (</span><span className="text-orange-400">x, y</span><span className="text-white">) => </span><span className="text-orange-400">x</span> + <span className="text-orange-400">y</span>;</div>
                <div><span className="text-green-400">const</span> <span className="text-white">multiply = (</span><span className="text-orange-400">x, y</span><span className="text-white">) => </span><span className="text-orange-400">x</span> * <span className="text-orange-400">y</span>;</div>
                <div className="mt-2"></div>
                <div><span className="text-yellow-400">calculate</span><span className="text-white">(</span><span className="text-pink-400">5, 3, add</span><span className="text-white">);</span> <span className="text-gray-400">// 8</span></div>
                <div><span className="text-yellow-400">calculate</span><span className="text-white">(</span><span className="text-pink-400">5, 3, multiply</span><span className="text-white">);</span> <span className="text-gray-400">// 15</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🎯 Применение:</h5>
              <ul className="text-sm space-y-1">
                <li>• Обработка массивов (map, filter)</li>
                <li>• Обработка событий</li>
                <li>• Асинхронные операции</li>
                <li>• Создание универсальных функций</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">✅ Преимущества:</h5>
              <ul className="text-sm space-y-1">
                <li>• Повторное использование кода</li>
                <li>• Гибкость и модульность</li>
                <li>• Функциональное программирование</li>
                <li>• Читаемость кода</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Рекурсия",
      subtitle: "Функция, вызывающая сама себя",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🔄 Рекурсивные функции</h4>
            <p className="mb-4 text-gray-700">
              <strong>Рекурсия</strong> — это когда функция вызывает сама себя для решения задачи.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div><span className="text-gray-400">// Факториал числа: 5! = 5 * 4 * 3 * 2 * 1</span></div>
                <div><span className="text-blue-400">function</span> <span className="text-yellow-400">factorial</span><span className="text-white">(</span><span className="text-orange-400">n</span><span className="text-white">) {</span></div>
                <div className="ml-4"><span className="text-gray-400">// Базовый случай - условие остановки</span></div>
                <div className="ml-4"><span className="text-blue-400">if</span> <span className="text-white">(</span><span className="text-orange-400">n</span> <= 1<span className="text-white">) </span><span className="text-purple-400">return</span> 1;</div>
                <div className="mt-1"></div>
                <div className="ml-4"><span className="text-gray-400">// Рекурсивный случай</span></div>
                <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-orange-400">n</span> * <span className="text-yellow-400">factorial</span><span className="text-white">(</span><span className="text-orange-400">n</span> - 1<span className="text-white">);</span></div>
                <div><span className="text-white">}</span></div>
                <div className="mt-2"></div>
                <div><span className="text-yellow-400">factorial</span><span className="text-white">(</span><span className="text-pink-400">5</span><span className="text-white">);</span> <span className="text-gray-400">// 120</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">⚠️ Важные правила:</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Базовый случай</strong> — условие остановки</li>
                <li>• <strong>Рекурсивный случай</strong> — вызов себя</li>
                <li>• Каждый вызов должен приближать к базовому случаю</li>
                <li>• Иначе — бесконечная рекурсия!</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🎯 Когда использовать:</h5>
              <ul className="text-sm space-y-1">
                <li>• Обход деревьев и графов</li>
                <li>• Математические вычисления</li>
                <li>• Разделяй и властвуй</li>
                <li>• Когда задача разбивается на подзадачи</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Отладка функций",
      subtitle: "Поиск и исправление ошибок",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">🐛 Отладка и тестирование</h4>
            <p className="mb-4 text-gray-700">
              Умение находить и исправлять ошибки — важный навык программиста.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <h5 className="font-semibold mb-2">🔍 Методы отладки:</h5>
              <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                <div className="space-y-1">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">divide</span><span className="text-white">(</span><span className="text-orange-400">a, b</span><span className="text-white">) {</span></div>
                  <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-green-300">'Входные данные:'</span><span className="text-white">, </span><span className="text-orange-400">a, b</span><span className="text-white">);</span></div>
                  <div className="ml-4"></div>
                  <div className="ml-4"><span className="text-blue-400">if</span> <span className="text-white">(</span><span className="text-orange-400">b</span> === 0<span className="text-white">) {</span></div>
                  <div className="ml-8"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-red-400">error</span><span className="text-white">(</span><span className="text-green-300">'Ошибка: деление на ноль!'</span><span className="text-white">);</span></div>
                  <div className="ml-8"><span className="text-purple-400">return</span> <span className="text-pink-400">null</span>;</div>
                  <div className="ml-4">}</div>
                  <div className="ml-4"></div>
                  <div className="ml-4"><span className="text-green-400">let</span> <span className="text-white">result = </span><span className="text-orange-400">a</span> / <span className="text-orange-400">b</span>;</div>
                  <div className="ml-4"><span className="text-green-400">console</span><span className="text-white">.</span><span className="text-yellow-400">log</span><span className="text-white">(</span><span className="text-green-300">'Результат:'</span><span className="text-white">, </span><span className="text-white">result</span><span className="text-white">);</span></div>
                  <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-white">result</span>;</div>
                  <div>}</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🛠️ Инструменты:</h5>
                <ul className="text-sm space-y-1">
                  <li>• <code className="bg-white px-1 rounded">console.log()</code> — вывод значений</li>
                  <li>• <code className="bg-white px-1 rounded">console.error()</code> — ошибки</li>
                  <li>• <code className="bg-white px-1 rounded">debugger;</code> — точка останова</li>
                  <li>• Инспектор браузера (F12)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📋 Типичные ошибки:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Опечатки в именах</li>
                  <li>• Неправильные типы данных</li>
                  <li>• Отсутствие return</li>
                  <li>• Неверная логика условий</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Лучшие практики",
      subtitle: "Как писать хорошие функции",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">💎 Принципы хорошего кода</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <h5 className="font-semibold mb-2">1️⃣ Принцип единственной ответственности:</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2 text-red-600">❌ Плохо:</p>
                  <div className="bg-gray-800 text-white p-2 rounded font-mono text-xs">
                    <div><span className="text-blue-400">function</span> <span className="text-yellow-400">processUser</span>() {</div>
                    <div className="ml-2"><span className="text-gray-400">// валидация</span></div>
                    <div className="ml-2"><span className="text-gray-400">// сохранение</span></div>
                    <div className="ml-2"><span className="text-gray-400">// отправка email</span></div>
                    <div>}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2 text-green-600">✅ Хорошо:</p>
                  <div className="bg-gray-800 text-white p-2 rounded font-mono text-xs">
                    <div><span className="text-blue-400">function</span> <span className="text-yellow-400">validateUser</span>() {...}</div>
                    <div><span className="text-blue-400">function</span> <span className="text-yellow-400">saveUser</span>() {...}</div>
                    <div><span className="text-blue-400">function</span> <span className="text-yellow-400">sendEmail</span>() {...}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <h5 className="font-semibold mb-2">2️⃣ Понятные имена:</h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-600 mb-2">❌ Плохие имена:</p>
                  <ul className="space-y-1">
                    <li><code className="bg-red-100 px-1 rounded">calc()</code> — что считает?</li>
                    <li><code className="bg-red-100 px-1 rounded">process()</code> — что обрабатывает?</li>
                    <li><code className="bg-red-100 px-1 rounded">doIt()</code> — что делает?</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-600 mb-2">✅ Хорошие имена:</p>
                  <ul className="space-y-1">
                    <li><code className="bg-green-100 px-1 rounded">calculateTax()</code></li>
                    <li><code className="bg-green-100 px-1 rounded">processPayment()</code></li>
                    <li><code className="bg-green-100 px-1 rounded">validateEmail()</code></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📏 Размер функций:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Функция должна помещаться на экран</li>
                  <li>• Максимум 20-30 строк</li>
                  <li>• Если больше — разбейте на части</li>
                  <li>• Одна функция = одна задача</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📝 Комментарии:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Объясняйте "почему", не "что"</li>
                  <li>• Комментируйте сложную логику</li>
                  <li>• Хороший код — самодокументируемый</li>
                  <li>• Обновляйте комментарии вместе с кодом</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Заключение",
      subtitle: "Итоги изучения функций",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🎉</div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Поздравляем! Вы изучили основы создания функций
            </h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <strong className="block mb-2">🎯 Что вы узнали:</strong>
                <ul className="space-y-1 text-left">
                  <li>• Что такое функции и зачем они нужны</li>
                  <li>• Как создавать и вызывать функции</li>
                  <li>• Работа с параметрами и return</li>
                  <li>• Область видимости переменных</li>
                  <li>• Разные типы функций</li>
                  <li>• Рекурсия и функции высшего порядка</li>
                  <li>• Отладка и лучшие практики</li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2">🚀 Следующие шаги:</strong>
                <ul className="space-y-1 text-left">
                  <li>• Практикуйтесь в создании функций</li>
                  <li>• Изучите методы массивов (map, filter)</li>
                  <li>• Освойте асинхронные функции</li>
                  <li>• Изучите замыкания (closures)</li>
                  <li>• Практикуйте функциональное программирование</li>
                  <li>• Создавайте собственные библиотеки функций</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-200">
              <p className="text-lg font-semibold text-blue-600">
                💡 Помните: функции — это основа программирования. <br />
                Чем больше практики, тем лучше результат!
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">
                  {slides[currentSlide].title}
                </CardTitle>
                <p className="text-blue-100 mt-1">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-75">Слайд</div>
                <div className="text-xl font-bold">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 min-h-[500px]">
            {slides[currentSlide].content}
          </CardContent>

          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                disabled={currentSlide === 0}
                className="flex items-center space-x-2"
              >
                <Icon name="ChevronLeft" size={16} />
                <span>Назад</span>
              </Button>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center space-x-2"
              >
                <span>Далее</span>
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>

            <div className="flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Presentation;
