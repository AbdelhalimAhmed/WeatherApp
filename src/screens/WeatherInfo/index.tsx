import React, { useLayoutEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  Platform
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';
import { debounce, getImageURL } from '../../utils/helper';
import useFetchWeatherInfo, { WeatherForecastHourly } from '../../api/useFetchWeatherInfo';

import styles from './styles';
import { ForecastHourRow, StyledText } from '../../components';

const PLACEHOLDER = "Search by city here"

type WeatherInfoProps = NativeStackScreenProps<RootStackParamList, ROUTES.WEATHER_INFO>;

// Render ForeCastHourlyTable as component and we can export it to be reusable component if needed
export function ForecastHourlyTable({ forecastHourly }: { forecastHourly: WeatherForecastHourly[] }) {
  const renderForecastRow = (forecastHourly: WeatherForecastHourly, index: number) => {
    return <ForecastHourRow key={forecastHourly.time} weather={forecastHourly} isNow={index === 0} />
  }

  return (
    <ScrollView style={styles.table} contentInsetAdjustmentBehavior={'automatic'}>
      {forecastHourly.map(renderForecastRow)}
    </ScrollView>
  )
}

// Render initial message for hint user to start searching 
const HintUserToStartSearching = () => <StyledText>Search by city name to get weather info</StyledText>

// Render no data available text
const NoDataAvailable = () => <StyledText>No data available</StyledText>

function WeatherInfo() {
  const { setOptions } = useNavigation<WeatherInfoProps['navigation']>();
  const [cityName, setCityName] = useState("");
  const { isLoading, error, data } =
    useFetchWeatherInfo(cityName);

  //HINT: Depending of UX's decision! either trigger api when user typing city or when click search button on keyboard
  // used debounce here as a precaution for potential use of a search request API,
  // with the aim of minimizing the frequency of API calls.
  // const handleSearchWeather = debounce((city: string) => {
  //   setCityName(city)
  // }, 600);

  const handleSearchWeather = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const cityInput = e.nativeEvent.text.trim()
    if (Boolean(cityInput)) {
      setCityName(cityInput)
    }
  }

  useLayoutEffect(() => {
    // Based on this open issue https://github.com/react-navigation/react-navigation/issues/11627, the search component doesn't render properly using
    // `headerSearchBarOptions` by react-navigation in android, my workaround is by putting a text input in headerRight for android only 
    setOptions({
      headerRight: () => Platform.OS === 'android' && <TextInput placeholder={PLACEHOLDER} onSubmitEditing={handleSearchWeather} />,
      headerSearchBarOptions: {
        //HINT: Depending of UX decision! either trigger api when user typing city or when click search button on keyboard
        // onChangeText: e => handleSearchWeather(e.nativeEvent.text),
        onSearchButtonPress: handleSearchWeather,
        placeholder: PLACEHOLDER,
      },
    })
  }, [handleSearchWeather, setOptions]);

  if (isLoading || error) {
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Text>{error}</Text>}
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {!data?.location.country ?
        <HintUserToStartSearching />
        :
        data.forecastHourlyDay[0] ? (
          <View style={styles.card}>
            {/* CARD HEADER */}
            <View style={styles.cardHeader}>
              <Image source={{ uri: getImageURL(data.forecastHourlyDay[0].condition.icon) }} style={styles.weatherImage} />
              <StyledText size='l' weight='bold' color='primary'>{data.forecastHourlyDay[0].temp_c} {"°C"}</StyledText>
              <StyledText size='s' weight='bold' >{data.location.name}, {data.location.country}</StyledText>
            </View>
            {/* ForecastHourly TABLE */}
            <ForecastHourlyTable forecastHourly={data.forecastHourlyDay} />
          </View>
        ) :
          <NoDataAvailable />
      }
    </View>
  );
}

export default WeatherInfo;
