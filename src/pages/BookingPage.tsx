import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Запись на тренировку
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите удобное время и тип тренировки. Мы поможем вам достичь
              ваших целей!
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
