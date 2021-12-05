const formatDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!date) {
    return "-";
  }
  if (typeof date === "string") {
    let newDate = new Date(date);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${day}-${month}-${year}`;
  } else if (date) {
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };
  }
};
export default formatDate;
