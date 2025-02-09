export const formattedDateTime = (date: Date) => {
  const createdAtTimestamp = new Date(date!);

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDateTime = createdAtTimestamp.toLocaleString("en-US", options);

  return formattedDateTime;
};
