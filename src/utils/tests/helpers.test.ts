import {
  UseCase1,
  MockUseCase1WhenHasTwoDaysFormattedData,
  MockUseCase2WhenHasTwoDaysFormattedData,
  MockUseCase1WhenNoEnoughDataFound,
  UseCase2,
  UseCase3,
} from "../../screens/WeatherInfo/tests/MocksData";
import { getNext5ForecastHour, formateTime } from "../helper";

describe("getNext5ForecastHour function", () => {
  jest.useFakeTimers();

  test("returns the correct array for the next 5 hours when there's only one day's data", () => {
    jest.setSystemTime(new Date("2023-12-10 00:00").getTime());

    expect(getNext5ForecastHour(UseCase1.forecast.forecastday)).toStrictEqual(
      MockUseCase1WhenHasTwoDaysFormattedData
    );
    jest.setSystemTime(new Date().getTime());
  });

  test("returns the correct array for the next 5 hours when there are two days' data", () => {
    jest.setSystemTime(new Date("2023-12-10 22:00").getTime());

    expect(getNext5ForecastHour(UseCase2.forecast.forecastday)).toStrictEqual(
      MockUseCase2WhenHasTwoDaysFormattedData
    );
    jest.setSystemTime(new Date().getTime());
  });

  test("returns an empty array if no matching date is found", () => {
    jest.setSystemTime(new Date("2023-12-10 08:00").getTime());

    expect(getNext5ForecastHour(UseCase1.forecast.forecastday)).toStrictEqual(
      []
    );
    jest.setSystemTime(new Date().getTime());
  });

  test("returns the available array even if there isn't enough data", () => {
    jest.setSystemTime(new Date("2023-12-10 06:00").getTime());

    expect(getNext5ForecastHour(UseCase1.forecast.forecastday)).toStrictEqual(
      MockUseCase1WhenNoEnoughDataFound
    );
    jest.setSystemTime(new Date().getTime());
  });

  test("returns an empty array if the date in the forecast is an invalid date", () => {
    jest.setSystemTime(new Date("2023-12-10 00:00").getTime());

    expect(getNext5ForecastHour(UseCase3.forecast.forecastday)).toStrictEqual(
      []
    );
    jest.setSystemTime(new Date().getTime());
  });

  test("returns an empty array if there's no forecastday data", () => {
    expect(getNext5ForecastHour([])).toStrictEqual([]);
  });

  test("returns an empty array if there's no hour data", () => {
    expect(getNext5ForecastHour([{ hour: [] }])).toStrictEqual([]);
  });
});

describe("formateTime function", () => {
  it("returns the formatted time as HH:MM AM formate", () => {
    expect(formateTime("2023-12-10 01:00")).toBe("01:00 AM");
  });

  it("returns the formatted time as HH:MM PM formate", () => {
    expect(formateTime("2023-12-10 16:00")).toBe("04:00 PM");
  });

  it("throw an error for an invalid date time (empty string)", () => {
    expect(() => formateTime("")).toThrow("Invalid date provided.");
  });

  it("throw an error for an invalid date time (non-date string)", () => {
    expect(() => formateTime("asd")).toThrow("Invalid date provided.");
  });
});
