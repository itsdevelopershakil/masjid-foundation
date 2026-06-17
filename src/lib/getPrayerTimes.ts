import axios from "axios";
import { formatTo12Hour } from "./formatTo12Hour";
import { getActivePrayer } from "./getActivePrayer";
import { subtractMinutes } from "./subtractMinutes";

export async function getPrayerTimes() {
  const today = new Date().toLocaleDateString("en-GB").replaceAll("/", "-");

  const { data } = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity/${today}`,
    {
      params: {
        city: "Sylhet",
        country: "Bangladesh",
        method: 3,
        school: 1,
      },
    },
  );

  const timings = data.data.timings;
  const currentActive = getActivePrayer(timings);

  return {
    Fajr: {
      start: formatTo12Hour(timings.Fajr),
      end: formatTo12Hour(subtractMinutes(timings.Sunrise, 1)),
      active: currentActive,
    },

    Dhuhr: {
      start: formatTo12Hour(timings.Dhuhr),
      end: formatTo12Hour(subtractMinutes(timings.Asr, 1)),
      active: currentActive,
    },

    Asr: {
      start: formatTo12Hour(timings.Asr),
      end: formatTo12Hour(subtractMinutes(timings.Sunset, 1)),
      active: currentActive,
    },

    Maghrib: {
      start: formatTo12Hour(timings.Maghrib),
      end: formatTo12Hour(subtractMinutes(timings.Isha, 1)),
      active: currentActive,
    },

    Isha: {
      start: formatTo12Hour(timings.Isha),
      end: formatTo12Hour(subtractMinutes(timings.Fajr, 5)),
      active: currentActive,
    },

    // add this
    Sunset: formatTo12Hour(timings.Sunset),

    // optional if you need sunrise separately
    Sunrise: formatTo12Hour(timings.Sunrise),
  };
}
