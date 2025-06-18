import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Фитнес-приложение FitnessPro",
      subtitle: "Пошаговое создание функций",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">💪</div>
          <p className="text-xl text-gray-600">
            Полный цикл разработки современного фитнес-приложения
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-blue-100 px-4 py-2 rounded-full">React</div>
            <div className="bg-green-100 px-4 py-2 rounded-full">
              TypeScript
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-full">Tailwind</div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 1: Архитектура проекта",
      subtitle: "Основа приложения",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📁 Структура файлов</h4>
              <ul className="text-sm space-y-1">
                <li>• /components - UI компоненты</li>
                <li>• /pages - Страницы приложения</li>
                <li>• /hooks - Пользовательские хуки</li>
                <li>• /types - TypeScript типы</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">⚙️ Конфигурация</h4>
              <ul className="text-sm space-y-1">
                <li>• Vite для сборки</li>
                <li>• React Router для навигации</li>
                <li>• Tailwind CSS для стилей</li>
                <li>• LocalStorage для данных</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2: Система авторизации",
      subtitle: "Безопасность пользователей",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔐 Функции авторизации</h4>
            <ul className="space-y-2">
              <li>• Регистрация новых пользователей</li>
              <li>• Вход в систему</li>
              <li>• Роли пользователей (клиент/админ)</li>
              <li>• Защищённые маршруты</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🛡️ Безопасность</h4>
            <p className="text-sm">
              Валидация данных, хранение в localStorage, проверка прав доступа
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3: Управление тренерами",
      subtitle: "CRUD операции",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">👨‍💼 Функции тренеров</h4>
              <ul className="text-sm space-y-1">
                <li>• Добавление тренера</li>
                <li>• Редактирование профиля</li>
                <li>• Удаление тренера</li>
                <li>• Просмотр списка</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📊 Данные тренера</h4>
              <ul className="text-sm space-y-1">
                <li>• Имя и фото</li>
                <li>• Специализация</li>
                <li>• Опыт работы</li>
                <li>• Контактная информация</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 4: Расписание тренировок",
      subtitle: "Планирование занятий",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📅 Создание расписания</h4>
            <ul className="space-y-2">
              <li>• Выбор даты и времени</li>
              <li>• Назначение тренера</li>
              <li>• Тип тренировки</li>
              <li>• Максимальное количество мест</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🎯 Типы тренировок</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 px-2 py-1 rounded text-xs">
                Кардио
              </span>
              <span className="bg-blue-100 px-2 py-1 rounded text-xs">
                Силовая
              </span>
              <span className="bg-green-100 px-2 py-1 rounded text-xs">
                Йога
              </span>
              <span className="bg-purple-100 px-2 py-1 rounded text-xs">
                Пилатес
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 5: Система бронирования",
      subtitle: "Запись на тренировки",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📝 Процесс бронирования</h4>
            <ol className="space-y-2 text-sm">
              <li>1. Выбор тренировки из расписания</li>
              <li>2. Проверка доступных мест</li>
              <li>3. Подтверждение записи</li>
              <li>4. Уведомление пользователя</li>
            </ol>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ Управление записями</h4>
            <ul className="text-sm space-y-1">
              <li>• Просмотр активных записей</li>
              <li>• Отмена бронирования</li>
              <li>• История посещений</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 6: Фильтры и поиск",
      subtitle: "Удобная навигация",
      content: (
        <div className="space-y-4">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔍 Фильтрация расписания</h4>
            <ul className="space-y-2">
              <li>• Фильтр по дате</li>
              <li>• Фильтр по типу тренировки</li>
              <li>• Фильтр по тренеру</li>
              <li>• Поиск по названию</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📊 Состояния тренировок</h4>
            <div className="flex space-x-2">
              <div className="bg-green-100 px-2 py-1 rounded text-xs">
                Доступно
              </div>
              <div className="bg-red-100 px-2 py-1 rounded text-xs">Занято</div>
              <div className="bg-yellow-100 px-2 py-1 rounded text-xs">
                Мало мест
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 7: Новости и события",
      subtitle: "Информирование клиентов",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📰 Система новостей</h4>
            <ul className="space-y-2">
              <li>• Создание объявлений</li>
              <li>• Редактирование новостей</li>
              <li>• Категории новостей</li>
              <li>• Даты публикации</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🎉 Типы событий</h4>
            <ul className="text-sm space-y-1">
              <li>• Новые программы</li>
              <li>• Специальные акции</li>
              <li>• Изменения в расписании</li>
              <li>• Праздничные мероприятия</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 8: Абонементы",
      subtitle: "Управление подписками",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">💳 Типы абонементов</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded border">
                <div className="font-semibold">Базовый</div>
                <div className="text-sm text-gray-600">8 занятий</div>
              </div>
              <div className="bg-white p-2 rounded border">
                <div className="font-semibold">Премиум</div>
                <div className="text-sm text-gray-600">Безлимит</div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚙️ Управление</h4>
            <ul className="text-sm space-y-1">
              <li>• Создание тарифных планов</li>
              <li>• Установка цен</li>
              <li>• Сроки действия</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 9: Профиль пользователя",
      subtitle: "Персональные данные",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">👤 Личная информация</h4>
            <ul className="space-y-2">
              <li>• Редактирование профиля</li>
              <li>• Загрузка фотографии</li>
              <li>• Контактные данные</li>
              <li>• Цели тренировок</li>
            </ul>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📈 Статистика</h4>
            <ul className="text-sm space-y-1">
              <li>• Количество тренировок</li>
              <li>• Любимые программы</li>
              <li>• Активность по месяцам</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 10: Административная панель",
      subtitle: "Управление системой",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🛠️ Админ функции</h4>
            <div className="grid grid-cols-2 gap-2">
              <ul className="text-sm space-y-1">
                <li>• Управление пользователями</li>
                <li>• Настройка расписания</li>
                <li>• Статистика посещений</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• Управление контентом</li>
                <li>• Настройки системы</li>
                <li>• Резервное копирование</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📊 Аналитика</h4>
            <p className="text-sm">
              Отчёты по посещаемости, популярные тренировки, загрузка тренеров
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 11: Уведомления",
      subtitle: "Коммуникация с пользователями",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔔 Типы уведомлений</h4>
            <ul className="space-y-2">
              <li>• Подтверждение записи</li>
              <li>• Напоминание о тренировке</li>
              <li>• Отмена занятия</li>
              <li>• Новости и акции</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📱 Каналы доставки</h4>
            <div className="flex space-x-2">
              <span className="bg-white px-2 py-1 rounded text-xs">Toast</span>
              <span className="bg-white px-2 py-1 rounded text-xs">Email</span>
              <span className="bg-white px-2 py-1 rounded text-xs">SMS</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 12: Мобильная адаптация",
      subtitle: "Адаптивный дизайн",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📱 Responsive дизайн</h4>
            <ul className="space-y-2">
              <li>• Адаптация под мобильные</li>
              <li>• Оптимизация для планшетов</li>
              <li>• Touch-friendly интерфейс</li>
              <li>• Быстрые действия</li>
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚡ Производительность</h4>
            <ul className="text-sm space-y-1">
              <li>• Ленивая загрузка</li>
              <li>• Минимизация запросов</li>
              <li>• Кэширование данных</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 13: Тестирование",
      subtitle: "Контроль качества",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🧪 Виды тестирования</h4>
            <ul className="space-y-2">
              <li>• Функциональное тестирование</li>
              <li>• Тестирование UI/UX</li>
              <li>• Тестирование безопасности</li>
              <li>• Кроссбраузерность</li>
            </ul>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">✅ Критерии качества</h4>
            <ul className="text-sm space-y-1">
              <li>• Стабильность работы</li>
              <li>• Скорость загрузки</li>
              <li>• Удобство использования</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 14: Развёртывание",
      subtitle: "Публикация приложения",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 Процесс деплоя</h4>
            <ol className="space-y-2 text-sm">
              <li>1. Сборка production версии</li>
              <li>2. Оптимизация ресурсов</li>
              <li>3. Настройка хостинга</li>
              <li>4. Мониторинг работы</li>
            </ol>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔧 Настройка окружения</h4>
            <ul className="text-sm space-y-1">
              <li>• Переменные окружения</li>
              <li>• SSL сертификаты</li>
              <li>• Резервное копирование</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Итоги проекта",
      subtitle: "Готовое решение",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🎉</div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Создано полнофункциональное фитнес-приложение
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Основные возможности:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Система авторизации</li>
                  <li>• Управление тренерами</li>
                  <li>• Бронирование тренировок</li>
                  <li>• Административная панель</li>
                </ul>
              </div>
              <div>
                <strong>Технические решения:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• React + TypeScript</li>
                  <li>• Адаптивный дизайн</li>
                  <li>• Современный UI/UX</li>
                  <li>• Готово к продакшену</li>
                </ul>
              </div>
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
