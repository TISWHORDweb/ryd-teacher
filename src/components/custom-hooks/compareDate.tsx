export default function compareDate(inputDate: string | string | number) {
    const today = new Date();
    const dateToCompare = new Date(inputDate);

    // Remove time component for accurate comparison
    today.setHours(0, 0, 0, 0);
    dateToCompare.setHours(0, 0, 0, 0);

    if (dateToCompare === today) {
        return inputDate;
    } 
}