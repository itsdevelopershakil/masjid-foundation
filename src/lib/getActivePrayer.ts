export const getActivePrayer = (timings: {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}) => {
  const now = new Date();

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const fajr = toMinutes(timings.Fajr);
  const sunrise = toMinutes(timings.Sunrise);
  const dhuhr = toMinutes(timings.Dhuhr);
  const asr = toMinutes(timings.Asr);
  const maghrib = toMinutes(timings.Maghrib);
  const isha = toMinutes(timings.Isha);

  if (currentMinutes >= fajr && currentMinutes < sunrise) return "Fajr";

  if (currentMinutes >= dhuhr && currentMinutes < asr) return "Dhuhr";

  if (currentMinutes >= asr && currentMinutes < maghrib) return "Asr";

  if (currentMinutes >= maghrib && currentMinutes < isha) return "Maghrib";

  return "Isha";
};
