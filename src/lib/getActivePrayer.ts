export const getActivePrayer = (timings: {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}) => {
  const now = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    }),
  );
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const prayers = [
    { name: "Fajr", time: toMinutes(timings.Fajr) },
    { name: "Sunrise", time: toMinutes(timings.Sunrise) },
    { name: "Dhuhr", time: toMinutes(timings.Dhuhr) },
    { name: "Asr", time: toMinutes(timings.Asr) },
    { name: "Maghrib", time: toMinutes(timings.Maghrib) },
    { name: "Isha", time: toMinutes(timings.Isha) },
  ];

  // Default covers midnight -> Fajr, which is still last night's Isha window
  let active = "Isha";

  for (const prayer of prayers) {
    if (currentMinutes >= prayer.time) {
      active = prayer.name;
    }
  }

  return active;
};
