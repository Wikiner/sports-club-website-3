import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Icon from "@/components/ui/icon";

const contactSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  subject: z.string().min(5, "Тема должна содержать минимум 5 символов"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Имитация отправки формы
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form data:", data);
      toast.success(
        "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
      );
      reset();
    } catch (error) {
      toast.error("Произошла ошибка при отправке сообщения. Попробуйте позже.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <Icon
          name="MessageSquare"
          size={48}
          className="text-primary mx-auto mb-3"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Свяжитесь с нами
        </h3>
        <p className="text-gray-600">
          Заполните форму ниже и мы ответим в течение 24 часов
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Ваше имя"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Тема обращения *</Label>
          <Input
            id="subject"
            {...register("subject")}
            placeholder="Краткое описание вопроса"
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Сообщение *</Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Подробно опишите ваш вопрос или предложение..."
            rows={6}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
              Отправляем...
            </>
          ) : (
            <>
              <Icon name="Send" size={18} className="mr-2" />
              Отправить сообщение
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Время ответа</p>
            <p>
              Мы отвечаем на все обращения в течение 24 часов в рабочие дни.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
