export const formatTo12Hour = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);

  const hour12 = hours % 12 || 12;

  return `${String(hour12).padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")}`;
};
