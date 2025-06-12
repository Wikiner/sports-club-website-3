import { useState, useEffect } from "react";
import { toast } from "sonner";
import { TrainingSession } from "@/types/training";

export interface Booking {
  id: string;
  sessionId: string;
  training: string;
  trainer: string;
  date: string;
  time: string;
  type: string;
  bookingDate: string;
  status: "active" | "completed" | "cancelled";
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const saveBookings = (bookingsData: Booking[]) => {
    localStorage.setItem("bookings", JSON.stringify(bookingsData));
    setBookings(bookingsData);
  };

  const addBooking = (session: TrainingSession) => {
    // Проверяем авторизацию
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      toast.error("Войдите в систему для записи на тренировку");
      return false;
    }

    // Проверяем, не записан ли уже на эту тренировку
    const existingBooking = bookings.find(
      (booking) =>
        booking.sessionId === session.id && booking.status === "active",
    );

    if (existingBooking) {
      toast.error("Вы уже записаны на эту тренировку");
      return false;
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      sessionId: session.id,
      training: session.title,
      trainer: session.trainer,
      date: session.date,
      time: session.time,
      type: session.type,
      bookingDate: new Date().toISOString(),
      status: "active",
    };

    const updatedBookings = [...bookings, newBooking];
    saveBookings(updatedBookings);
    toast.success(`Вы записаны на "${session.title}"`);
    return true;
  };

  const cancelBooking = (bookingId: string) => {
    const booking = bookings.find((b) => b.id === bookingId);
    if (!booking) return;

    const updatedBookings = bookings.map((b) =>
      b.id === bookingId ? { ...b, status: "cancelled" as const } : b,
    );

    saveBookings(updatedBookings);
    toast.success(`Запись на "${booking.training}" отменена`);
  };

  const getActiveBookings = () => {
    return bookings.filter((booking) => booking.status === "active");
  };

  const getBookingHistory = () => {
    return bookings.filter((booking) => booking.status !== "active");
  };

  return {
    bookings,
    addBooking,
    cancelBooking,
    getActiveBookings,
    getBookingHistory,
  };
};
