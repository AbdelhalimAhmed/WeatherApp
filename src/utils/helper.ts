import { ForecastDay } from "../api/useFetchWeatherInfo";

// Debounce function to control the execution frequency of the given function.
export const debounce = <T extends (...args: any[]) => void>(
  mainFunction: T,
  delay: number
) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer: NodeJS.Timeout;

  // Return an anonymous function that takes in any number of arguments
  return function (...args: Parameters<T>) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

// utils function to return next forecast for 5 hours
export function getNext5ForecastHour(forecastDay?: ForecastDay[]) {
  if (forecastDay?.length) {
    //we need to combine two days time into one array, why?
    //user might check weather at > 10 pm, so we have to get the remainder of hours from next day!
    const forecastHourly2Days = forecastDay.flatMap(
      (forecastObj) => forecastObj?.hour ?? []
    );

    /** implementation 
      - get current date
      - calculate the date and time 5 hours for now
      - filter array based on the date-time
        - by checking if date-time is within in next 5 hours
     */
    if (forecastHourly2Days.length) {
      const now = new Date();
      const priorHour = new Date(now.getTime() - 59 * 60 * 1000);
      const fiveHoursLater = new Date(priorHour.getTime() + 5 * 60 * 60 * 1000);
      const next5Hours = forecastHourly2Days.filter((forecast) => {
        const forecastDate = new Date(forecast?.time ?? "");
        return forecastDate >= priorHour && forecastDate < fiveHoursLater;
      });
      return next5Hours;
    }
  }
  return [];
}

// formate date time to HH:MM AM/PM
export function formateTime(date: string) {
  const dateTime = new Date(date);
  if (!dateTime.getTime() || !date) {
    // Here instead of throning error we could provide a third-party for bug reporting like "Sentry-Bugsnag-Instabug..etc"
    throw new Error("Invalid date provided.");
  }

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return dateFormatter.format(dateTime);
}

// get proper condition icon
export function getImageURL(url: string) {
  return `https:${url}`;
}
