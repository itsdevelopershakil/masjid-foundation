import { getPrayerTimes } from "../lib/getPrayerTimes";
import { toBengaliNumbers } from "../lib/toBengaliNumbers";

type PrayerKey = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

export const prayerTemplate = {
  bn: [
    {
      id: 1,
      key: "Fajr" as PrayerKey,
      symbol: "فجر",
      name: "ফজর",
      startTime: "০৩ : ৫০",
      endTime: "০৫ : ১০",
      isActive: false,
    },
    {
      id: 2,
      key: "Dhuhr" as PrayerKey,
      symbol: "ظهر",
      name: "যোহর",
      startTime: "০৩ : ৫০",
      endTime: "০৫ : ১০",
      isActive: false,
    },
    {
      id: 3,
      key: "Asr" as PrayerKey,
      symbol: "عصر",
      name: "আসর",
      startTime: "০৩ : ৫০",
      endTime: "০৫ : ১০",
      isActive: true,
    },
    {
      id: 4,
      key: "Maghrib" as PrayerKey,
      symbol: "مغرب",
      name: "মাগরিব",
      startTime: "০৩ : ৫০",
      endTime: "০৫ : ১০",
      isActive: false,
    },
    {
      id: 5,
      key: "Isha" as PrayerKey,
      symbol: "عشاء",
      name: "এশা",
      startTime: "০৩ : ৫০",
      endTime: "০৫ : ১০",
      isActive: false,
    },
  ],
  eng: [
    {
      id: 1,
      key: "Fajr" as PrayerKey,
      symbol: "فجر",
      name: "FAJR",
      startTime: "03 : 50",
      endTime: "03 : 50",
      isActive: false,
    },
    {
      id: 2,
      key: "Dhuhr" as PrayerKey,
      symbol: "ظهر",
      name: "DHUHR",
      startTime: "03 : 50",
      endTime: "03 : 50",
      isActive: false,
    },
    {
      id: 3,
      key: "Asr" as PrayerKey,
      symbol: "عصر",
      name: "ASR",
      startTime: "03 : 50",
      endTime: "03 : 50",
      isActive: true,
    },
    {
      id: 4,
      key: "Maghrib" as PrayerKey,
      symbol: "مغرب",
      name: "MAGHRIB",
      startTime: "03 : 50",
      endTime: "03 : 50",
      isActive: false,
    },
    {
      id: 5,
      key: "Isha" as PrayerKey,
      symbol: "عشاء",
      name: "ISHA",
      startTime: "03 : 50",
      endTime: "03 : 50",
      isActive: false,
    },
  ],
};

export const getPrayerCardData = async () => {
  const times = await getPrayerTimes();

  const prayerCardsBn = prayerTemplate.bn.map((prayer) => ({
    ...prayer,
    startTime: toBengaliNumbers(times[prayer.key].start),
    endTime: toBengaliNumbers(times[prayer.key].end),
    isActive: prayer.key === times[prayer.key].active,
  }));
  const prayerCardsEng = prayerTemplate.eng.map((prayer) => ({
    ...prayer,
    startTime: times[prayer.key].start,
    endTime: times[prayer.key].end,
    isActive: prayer.key === times[prayer.key].active,
  }));

  return {
    bn: prayerCardsBn,
    eng: prayerCardsEng,
    sunrise: times.Sunrise,
    sunset: times.Sunset,
  };
};
