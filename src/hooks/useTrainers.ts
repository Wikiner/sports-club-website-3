export interface Trainer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  photo: string;
  description: string;
  certifications: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
}

export const useTrainers = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Александра Петрова",
      specialization: "Персональный тренинг",
      experience: "8 лет",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      description: "Специалист по силовым тренировкам и коррекции фигуры",
      certifications: ["ACSM", "NASM-CPT"],
      contactInfo: {
        phone: "+7 (999) 123-45-67",
        email: "alexandra@fitclub.ru",
      },
    },
    {
      id: 2,
      name: "Дмитрий Соколов",
      specialization: "Кроссфит",
      experience: "6 лет",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Тренер по функциональному тренингу и кроссфиту",
      certifications: ["CrossFit Level 2", "FMS"],
      contactInfo: {
        phone: "+7 (999) 234-56-78",
        email: "dmitry@fitclub.ru",
      },
    },
    {
      id: 3,
      name: "Елена Морозова",
      specialization: "Йога и стретчинг",
      experience: "10 лет",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Инструктор по хатха-йоге и растяжке",
      certifications: ["RYT-500", "Yin Yoga"],
      contactInfo: {
        phone: "+7 (999) 345-67-89",
        email: "elena@fitclub.ru",
      },
    },
    {
      id: 4,
      name: "Максим Волков",
      specialization: "Бокс и единоборства",
      experience: "12 лет",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Мастер спорта по боксу, тренер по боевым искусствам",
      certifications: ["Мастер спорта", "Тренер высшей категории"],
      contactInfo: {
        phone: "+7 (999) 456-78-90",
        email: "maxim@fitclub.ru",
      },
    },
    {
      id: 5,
      name: "Анна Красникова",
      specialization: "Пилатес и реабилитация",
      experience: "7 лет",
      photo:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      description: "Специалист по пилатесу и восстановительной терапии",
      certifications: ["PMA-CPT", "STOTT Pilates"],
      contactInfo: {
        phone: "+7 (999) 567-89-01",
        email: "anna@fitclub.ru",
      },
    },
    {
      id: 6,
      name: "Сергей Новиков",
      specialization: "Тяжелая атлетика",
      experience: "15 лет",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Кандидат в мастера спорта по тяжелой атлетике",
      certifications: ["NSCA-CSCS", "USAW Level 2"],
      contactInfo: {
        phone: "+7 (999) 678-90-12",
        email: "sergey@fitclub.ru",
      },
    },

    {
      id: 8,
      name: "Андрей Козлов",
      specialization: "Плавание",
      experience: "11 лет",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      description: "Тренер по плаванию, мастер спорта",
      certifications: ["Мастер спорта", "Water Safety Instructor"],
      contactInfo: {
        phone: "+7 (999) 890-12-34",
        email: "andrey@fitclub.ru",
      },
    },
    {
      id: 9,
      name: "Ольга Федорова",
      specialization: "Фитнес для женщин",
      experience: "5 лет",
      photo:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      description:
        "Специалист по женскому фитнесу и послеродовому восстановлению",
      certifications: ["Pre/Postnatal Exercise", "NASM-CPT"],
      contactInfo: {
        phone: "+7 (999) 901-23-45",
        email: "olga@fitclub.ru",
      },
    },
    {
      id: 10,
      name: "Игорь Петров",
      specialization: "Реабилитация и ЛФК",
      experience: "13 лет",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      description:
        "Специалист по лечебной физкультуре и восстановлению после травм",
      certifications: ["Врач ЛФК", "NCHEC Certified"],
      contactInfo: {
        phone: "+7 (999) 012-34-56",
        email: "igor@fitclub.ru",
      },
    },
  ];

  return { trainers };
};
