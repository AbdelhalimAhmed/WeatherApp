import React, { useLayoutEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';
import { debounce } from '../../utils/helper';
import useFetchWeatherInfo from '../../api/useFetchWeatherInfo';

import styles from './styles';

type WeatherInfoProps = NativeStackScreenProps<RootStackParamList, ROUTES.WEATHER_INFO>;

function WeatherInfo() {
  const { setOptions } = useNavigation<WeatherInfoProps['navigation']>();
  const [cityName, setCityName] = useState("");
  const { isLoading, error, data } =
    useFetchWeatherInfo(cityName);

  console.log(JSON.stringify(data, null, 2))
  //HINT: Depending of UX decision! either trigger api when user typing city or when click search button on keyboard
  // used debounce here as a precaution for potential use of a search request API,
  // with the aim of minimizing the frequency of API calls.
  const handleSearchWeather = debounce((city: string) => {
    setCityName(city)
  }, 600);

  useLayoutEffect(() => {
    setOptions({
      headerSearchBarOptions: {
        //HINT: Depending of UX decision! either trigger api when user typing city or when click search button on keyboard
        // onChangeText: e => handleSearchWeather(e.nativeEvent.text),
        onSearchButtonPress: e => setCityName(e.nativeEvent.text)
      },
    });
  }, [handleSearchWeather, setOptions]);

  if (isLoading || error) {
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Text>{error}</Text>}
      </View>
    );
  }

  return (
    <View
      style={styles.container}>
      <Text>{data?.location.country ?? "Search by city name to get weather info"}</Text>
    </View>
  );
}

export default WeatherInfo;
