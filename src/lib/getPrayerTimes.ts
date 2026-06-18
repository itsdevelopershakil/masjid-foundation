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
        currentActive,

        Fajr: {
            start: formatTo12Hour(timings.Fajr),
            end: formatTo12Hour(subtractMinutes(timings.Sunrise, 1)),
        },

        Dhuhr: {
            start: formatTo12Hour(timings.Dhuhr),
            end: formatTo12Hour(subtractMinutes(timings.Asr, 1)),
        },

        Asr: {
            start: formatTo12Hour(timings.Asr),
            // was timings.Sunset — using Maghrib since that's when the Asr window
            // actually ends, in case the two ever diverge for this method
            end: formatTo12Hour(subtractMinutes(timings.Maghrib, 1)),
        },

        Maghrib: {
            start: formatTo12Hour(timings.Maghrib),
            end: formatTo12Hour(subtractMinutes(timings.Isha, 1)),
        },

        Isha: {
            start: formatTo12Hour(timings.Isha),
            // kept the 5-minute buffer as-is — change to 1 if this wasn't intentional
            end: formatTo12Hour(subtractMinutes(timings.Fajr, 5)),
        },

        // add this
        Sunset: formatTo12Hour(timings.Sunset),

        // optional if you need sunrise separately
        Sunrise: formatTo12Hour(timings.Sunrise),
    };
}
