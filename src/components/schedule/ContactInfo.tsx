import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  return (
    <div className="text-center mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Нужна помощь с записью?</h3>
      <p className="text-gray-600 mb-6">
        Свяжитесь с нами для индивидуального расписания или групповых занятий
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
        <a
          href="tel:+79991234567"
          className="flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <Icon name="Phone" size={16} className="mr-2" />
          +7 (999) 123-45-67
        </a>
        <a
          href="mailto:info@fitclub.ru"
          className="flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <Icon name="Mail" size={16} className="mr-2" />
          info@fitclub.ru
        </a>
        <span className="flex items-center text-gray-600">
          <Icon name="Clock" size={16} className="mr-2" />
          Ежедневно 6:00 - 23:00
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
