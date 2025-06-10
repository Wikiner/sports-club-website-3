import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-purple-600 to-purple-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Твой путь к
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              идеальной форме
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Современный фитнес-клуб с персональным подходом к каждому клиенту.
            Профессиональные тренеры, новейшее оборудование, уютная атмосфера.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на тренировку
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Icon name="Users" size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-purple-200">Довольных клиентов</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Icon name="Trophy" size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-purple-200">Видов тренировок</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Icon name="Clock" size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-purple-200">Время работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
