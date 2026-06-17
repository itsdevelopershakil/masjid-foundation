export const subtractMinutes = (time: string, minutesToSubtract: number) => {
  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, minutes - minutesToSubtract, 0, 0);

  const newHours = String(date.getHours()).padStart(2, "0");
  const newMinutes = String(date.getMinutes()).padStart(2, "0");

  return `${newHours}:${newMinutes}`;
};
