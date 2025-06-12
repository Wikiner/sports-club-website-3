const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      alt: "Тренажерный зал",
      title: "Современное оборудование",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Групповые тренировки",
      title: "Групповые занятия",
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
      alt: "Кардио зона",
      title: "Кардио зона",
    },
    {
      src: "https://images.unsplash.com/photo-1583500178690-f7b6209a8f46?w=600&h=400&fit=crop",
      alt: "Зона свободных весов",
      title: "Свободные веса",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
      alt: "Раздевалки",
      title: "Комфортные раздевалки",
    },
    {
      src: "https://images.unsplash.com/photo-1506629905607-d2968f2e2796?w=600&h=400&fit=crop",
      alt: "Студия йоги",
      title: "Студия для йоги",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Галерея нашего клуба
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Посмотрите, как выглядят наши современные залы и оборудование
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
