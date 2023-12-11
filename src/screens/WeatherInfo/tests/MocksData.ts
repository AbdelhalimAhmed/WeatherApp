import { WeatherResponse } from "../../../api/useFetchWeatherInfo";

// This use case mocking server response which has a forecastDay with one day array
export const UseCase1 = {
  location: {
    name: "Berlin",
    country: "Germany",
  },
  forecast: {
    forecastday: [
      {
        hour: [
          {
            time: "2023-12-10 00:00",
            temp_c: 3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 01:00",
            temp_c: 1.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 02:00",
            temp_c: -3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 03:00",
            temp_c: -34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 04:00",
            temp_c: 34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 05:00",
            temp_c: 19,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 06:00",
            temp_c: 89,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 07:00",
            temp_c: -8.9,
            condition: {
              text: "snow",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
        ],
      },
    ],
  },
};

// This use case mocking server response which has a forecastDay with two days array
export const UseCase2 = {
  location: {
    name: "Berlin",
    country: "Germany",
  },
  forecast: {
    forecastday: [
      {
        hour: [
          {
            time: "2023-12-10 00:00",
            temp_c: 3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 01:00",
            temp_c: 1.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 02:00",
            temp_c: -3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 03:00",
            temp_c: -34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 04:00",
            temp_c: 34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 05:00",
            temp_c: 19,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 06:00",
            temp_c: 89,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 07:00",
            temp_c: -8.9,
            condition: {
              text: "snow",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 22:00",
            temp_c: -9,
            condition: {
              text: "rain",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 23:00",
            temp_c: -29,
            condition: {
              text: "snow",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-10 00:00",
            temp_c: -22,
            condition: {
              text: "cloud",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
        ],
      },
      {
        hour: [
          {
            time: "2023-12-11 00:00",
            temp_c: 3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 01:00",
            temp_c: 1.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 02:00",
            temp_c: -3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 03:00",
            temp_c: -34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 04:00",
            temp_c: 34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 05:00",
            temp_c: 19,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 06:00",
            temp_c: 89,
            condition: {
              text: "cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "2023-12-11 07:00",
            temp_c: -8.9,
            condition: {
              text: "snow",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
        ],
      },
    ],
  },
};

// This use case mocking server response which has a forecastDay with invalid date
export const UseCase3 = {
  location: {
    name: "Berlin",
    country: "Germany",
  },
  forecast: {
    forecastday: [
      {
        hour: [
          {
            time: "Invalid date",
            temp_c: 3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "Invalid date",
            temp_c: 1.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "Invalid date",
            temp_c: -3.4,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "Invalid date",
            temp_c: -34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
          {
            time: "Invalid date",
            temp_c: 34,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
            },
          },
        ],
      },
    ],
  },
};

export const MockUseCase1WhenHasTwoDaysFormattedData = [
  {
    condition: {
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
      text: "Light drizzle",
    },
    temp_c: 3.4,
    time: "2023-12-10 00:00",
  },
  {
    condition: {
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
      text: "Light drizzle",
    },
    temp_c: 1.4,
    time: "2023-12-10 01:00",
  },
  {
    condition: {
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
      text: "Light drizzle",
    },
    temp_c: -3.4,
    time: "2023-12-10 02:00",
  },
  {
    condition: {
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
      text: "Light drizzle",
    },
    temp_c: -34,
    time: "2023-12-10 03:00",
  },
  {
    condition: {
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
      text: "Light drizzle",
    },
    temp_c: 34,
    time: "2023-12-10 04:00",
  },
];

export const MockUseCase2WhenHasTwoDaysFormattedData = [
  {
    time: "2023-12-10 22:00",
    temp_c: -9,
    condition: {
      text: "rain",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
  {
    time: "2023-12-10 23:00",
    temp_c: -29,
    condition: {
      text: "snow",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
  {
    time: "2023-12-11 00:00",
    temp_c: 3.4,
    condition: {
      text: "Light drizzle",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
  {
    time: "2023-12-11 01:00",
    temp_c: 1.4,
    condition: {
      text: "Light drizzle",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
  {
    time: "2023-12-11 02:00",
    temp_c: -3.4,
    condition: {
      text: "Light drizzle",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
];

export const MockUseCase1WhenNoEnoughDataFound = [
  {
    time: "2023-12-10 06:00",
    temp_c: 89,
    condition: {
      text: "cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
  {
    time: "2023-12-10 07:00",
    temp_c: -8.9,
    condition: {
      text: "snow",
      icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
    },
  },
];
