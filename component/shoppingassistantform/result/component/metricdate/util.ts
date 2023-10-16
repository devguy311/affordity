
export const getMonthName = (monthNumber: number) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = monthNumber % 12;
    return monthNames[monthIndex];
}
