
# Диаграммы проектирования системы FitClub

## Use Case Diagram (Диаграмма вариантов использования)

```
┌─────────────────┐    ┌──────────────────────────────────────────┐
│      Гость      │    │              Система FitClub            │
└─────┬───────────┘    │                                          │
      │                │  ○ Просмотр главной страницы             │
      │─────────────────┼─ ○ Просмотр расписания                  │
      │                │  ○ Просмотр информации о тренерах        │
      │                │  ○ Просмотр новостей                     │
                       │                                          │
┌─────────────────┐    │  ○ Авторизация в системе                 │
│ Зарегистрир.    │    │  ○ Запись на занятия                     │
│  пользователь   │────┼─ ○ Отмена записи                         │
└─────┬───────────┘    │  ○ Просмотр истории тренировок           │
      │                │  ○ Обновление профиля                    │
                       │                                          │
┌─────────────────┐    │  ○ Управление тренерами                  │
│ Администратор   │    │  ○ Управление расписанием                │
└─────┬───────────┘    │  ○ Управление новостями                  │
      │─────────────────┼─ ○ Управление абонементами               │
                       │  ○ Генерация отчетов                     │
                       └──────────────────────────────────────────┘
```

## Class Diagram (Диаграмма классов)

```
┌─────────────────────────────┐
│           User              │
├─────────────────────────────┤
│ - id: string                │
│ - username: string          │
│ - role: "admin" | "user"    │
├─────────────────────────────┤
│ + login(): Promise<boolean> │
│ + logout(): void            │
│ + updateProfile(): void     │
└─────────────┬───────────────┘
              │ inherits
              ▼
┌─────────────────────────────┐
│          Trainer            │
├─────────────────────────────┤
│ - name: string              │
│ - specialization: string    │
│ - experience: string        │
│ - photo: string             │
├─────────────────────────────┤
│ + getSchedule(): Schedule[] │
│ + updateInfo(): void        │
└─────────────────────────────┘

┌─────────────────────────────┐
│       ScheduleItem          │
├─────────────────────────────┤
│ - id: string                │
│ - time: string              │
│ - title: string             │
│ - trainer: string           │
│ - duration: string          │
│ - difficulty: string        │
│ - spots: number             │
├─────────────────────────────┤
│ + bookSpot(): boolean       │
│ + cancelBooking(): void     │
│ + checkAvailability(): bool │
└─────────────────────────────┘

┌─────────────────────────────┐
│           News              │
├─────────────────────────────┤
│ - id: string                │
│ - title: string             │
│ - content: string           │
│ - type: string              │
│ - date: string              │
│ - isActive: boolean         │
├─────────────────────────────┤
│ + publish(): void           │
│ + archive(): void           │
│ + update(): void            │
└─────────────────────────────┘

┌─────────────────────────────┐
│       Subscription          │
├─────────────────────────────┤
│ - id: string                │
│ - name: string              │
│ - price: number             │
│ - duration: string          │
│ - features: string[]        │
├─────────────────────────────┤
│ + activate(): void          │
│ + suspend(): void           │
│ + renew(): void             │
└─────────────────────────────┘

┌─────────────────────────────┐
│        ApiService           │
├─────────────────────────────┤
│ - baseUrl: string           │
├─────────────────────────────┤
│ + login(): Promise<any>     │
│ + getTrainers(): Promise    │
│ + getSchedule(): Promise    │
│ + getNews(): Promise        │
│ + createNews(): Promise     │
│ + updateNews(): Promise     │
│ + deleteNews(): Promise     │
└─────────────────────────────┘
```

## ER-Diagram (Диаграмма сущность-связь)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│      Users      │ 1:1 │    Trainers     │ 1:N │    Schedule     │
├─────────────────┤─────├─────────────────┤─────├─────────────────┤
│ user_id (PK)    │     │ trainer_id (PK) │     │ schedule_id(PK) │
│ username        │     │ user_id (FK)    │     │ trainer_id (FK) │
│ password_hash   │     │ full_name       │     │ title           │
│ role            │     │ specialization  │     │ start_time      │
│ created_at      │     │ experience_years│     │ duration_min    │
│ last_login      │     │ photo_url       │     │ max_participants│
│ is_active       │     │ bio             │     │ difficulty_level│
└─────────────────┘     │ certification   │     │ room            │
         │              └─────────────────┘     │ is_recurring    │
         │                                      └─────────────────┘
         │ 1:N                                           │
         │                                               │ 1:N
         ▼                                               ▼
┌─────────────────┐                               ┌─────────────────┐
│    Bookings     │                               │      News       │
├─────────────────┤                               ├─────────────────┤
│ booking_id (PK) │                               │ news_id (PK)    │
│ user_id (FK)    │                               │ author_id (FK)  │
│ schedule_id(FK) │                               │ title           │
│ booking_date    │                               │ content         │
│ status          │                               │ news_type       │
│ attended        │                               │ publication_date│
└─────────────────┘                               │ is_published    │
                                                  │ priority        │
┌─────────────────┐     ┌─────────────────┐     └─────────────────┘
│ Subscriptions   │ 1:N │UserSubscriptions│
├─────────────────┤─────├─────────────────┤
│subscription_id  │     │user_sub_id (PK) │
│ name            │     │ user_id (FK)    │
│ description     │     │ subscription_id │
│ price           │     │ start_date      │
│ duration_days   │     │ end_date        │
│ max_visits      │     │ remaining_visits│
│ features        │     │ is_active       │
└─────────────────┘     └─────────────────┘
                                │
                                │ N:1
                                ▼
                        ┌─────────────────┐
                        │      Users      │
                        │   (reference)   │
                        └─────────────────┘
```
