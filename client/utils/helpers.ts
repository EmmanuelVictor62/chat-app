export const formattedDateTime = (date?: string) => {
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

export const getRandomConversationId = () => {
  return `CON-${Math.floor(10000000 + Math.random() * 90000000)}`; //Helps to generate a random conversation id with 8 digits length
};
