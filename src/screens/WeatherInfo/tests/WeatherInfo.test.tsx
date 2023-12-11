import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { ForecastHourlyTable } from '../index';
import { MockUseCase1WhenHasTwoDaysFormattedData, MockUseCase2WhenHasTwoDaysFormattedData, MockUseCase1WhenNoEnoughDataFound } from './MocksData';
import App from '../../../../App';

describe('OpeningHours component', () => {
  it('renders correctly when data not fetched', () => {
    render(
      <App />
    );
    expect(screen.getByText("Search by city name to get weather info")).toBeTruthy();
  });
});

describe('ForecastHourlyTable component', () => {
  it("renders correctly when providing MockUseCase1WhenHasTwoDaysFormattedData which contains next 5 hours when there's only one day's data", () => {
    const forecastHourlyTable = render(<ForecastHourlyTable forecastHourly={MockUseCase1WhenHasTwoDaysFormattedData} />).toJSON();
    expect(screen.getByText("Now")).toBeTruthy();
    expect(forecastHourlyTable).toMatchSnapshot();
  });

  it("renders correctly when providing MockUseCase2WhenHasTwoDaysFormattedData which contains next 5 hours when there are two days' data", () => {
    const forecastHourlyTable = render(<ForecastHourlyTable forecastHourly={MockUseCase2WhenHasTwoDaysFormattedData} />).toJSON();
    expect(screen.getByText("Now")).toBeTruthy();
    expect(forecastHourlyTable).toMatchSnapshot();
  });

  it("renders correctly when providing MockUseCase1WhenNoEnoughDataFound which contains available data if there isn't enough data", () => {
    const forecastHourlyTable = render(<ForecastHourlyTable forecastHourly={MockUseCase1WhenNoEnoughDataFound} />).toJSON();
    expect(screen.getByText("Now")).toBeTruthy();
    expect(forecastHourlyTable).toMatchSnapshot();
  });

  it("renders correctly when providing empty array", () => {
    const forecastHourlyTable = render(<ForecastHourlyTable forecastHourly={[]} />).toJSON();
    expect(forecastHourlyTable).toMatchSnapshot();
  });
});

