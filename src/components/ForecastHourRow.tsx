import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { COLORS, SPACING } from '../attributes';
import { WeatherForecastHourly } from '../api/useFetchWeatherInfo';

import StyledText from './StyledText';
import { formateTime, getImageURL } from '../utils/helper';

interface ForecastHourRowProps {
  weather: WeatherForecastHourly;
  isNow?: boolean;
}

const ForecastHourRow: React.FC<ForecastHourRowProps> = ({
  weather,
  isNow,
}) => {
  return (
    <View style={styles.row}>
      {/* TIME  */}
      <View style={styles.box}>
        <StyledText
          weight='bold'
        >
          {isNow ? "Now" : formateTime(weather.time)}
        </StyledText>
      </View>
      {/* TEMPERATURE */}
      <StyledText
        size='s'
        color='primary'
        weight='bold'
        style={styles.conditionText}
      >
        {weather.temp_c.toFixed(0)}{"°C"}
      </StyledText>
      {/* CONDITION ICON */}
      <Image source={{ uri: getImageURL(weather.condition.icon) }} style={styles.conditionIcon} />
      {/* CONDITION TEXT */}
      <View style={styles.box}>
        <StyledText
          size='s'
          color='primary'
          weight='bold'
          transform='uppercase'
          align='right'
          style={styles.conditionText}
        >
          {weather.condition.text}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.m,
    gap: SPACING.l,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.primary,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
  },
  conditionText: {
    textTransform: 'capitalize',
  },
  dayContainer: {
    flexDirection: 'row',
    gap: SPACING.m,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  conditionIcon: {
    width: 30,
    height: 30,
  }
});

export default ForecastHourRow;
