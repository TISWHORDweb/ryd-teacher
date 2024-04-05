export default function isToday(inputDate: string | string | number) {
    const today = new Date();
    const date = new Date(inputDate);

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}