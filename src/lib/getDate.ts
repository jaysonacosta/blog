const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDateSuffix = (date: number) => {
  switch (date) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const suffix = getDateSuffix(day);
  const fullDate = `${month} ${day}${suffix}, ${year}`;

  return fullDate;
};

export default getDate;
