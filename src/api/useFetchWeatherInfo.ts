import { useQuery } from "@tanstack/react-query";

import { slowLittleBit } from "../utils/mockFns";
import { getNext5ForecastHour } from "../utils/helper";

import mapError, { ResponseError } from "./mapError";
import { BASE_URL } from "./constants";

type WeatherLocation = {
  name: string;
  country: string;
};

type WeatherForecastHourly = {
  time: string;
  condition: {
    text: string;
    icon: string;
  };
};

type Weather = {
  location: WeatherLocation;
  forecastHourlyDay: WeatherForecastHourly[];
};

export type ForecastDay = {
  hour?: WeatherForecastHourly[];
};

type WeatherResponse =
  | {
      location?: WeatherLocation;
      forecast?: {
        forecastday?: ForecastDay[];
      };
    }
  | undefined
  | null;

// manipulate data response to usable suit data
const mapWeatherData = (
  weatherResponse?: WeatherResponse
): Weather | undefined => {
  if (weatherResponse) {
    return {
      location: weatherResponse?.location ?? {
        name: "Can't detect location",
        country: "",
      },
      forecastHourlyDay: getNext5ForecastHour(
        weatherResponse?.forecast?.forecastday
      ),
    };
  }
  return undefined;
};

// request function for fetching weather info
const fetchWeatherInfoRequest = async (
  city: string
): Promise<WeatherResponse> => {
  const response = await fetch(`${BASE_URL}&q=${city}`);
  const data = await response.json();
  if (!response.ok || data?.error?.code) {
    throw new ResponseError("Failed to fetch weather", data.error);
  }
  await slowLittleBit();
  return data;
};

// custom hook for fetching weather info
const useFetchWeatherInfo = (city?: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["weatherInfo", city],
    queryFn: async () => {
      const weatherResponse = await fetchWeatherInfoRequest(city ?? "Berlin");
      const weatherData = mapWeatherData(weatherResponse);
      return weatherData;
    },
    enabled: !!city,
  });

  return {
    isLoading,
    error: mapError(error),
    data,
  };
};

export default useFetchWeatherInfo;
