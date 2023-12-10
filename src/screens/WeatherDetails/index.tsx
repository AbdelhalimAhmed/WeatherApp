import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';
import { debounce } from '../../utils/helper';
import styles from './styles';

type WeatherDetailsProps = NativeStackScreenProps<RootStackParamList, ROUTES.WEATHER_DETAILS>;

function WeatherDetails() {
  const { setOptions } = useNavigation<WeatherDetailsProps['navigation']>();

  // used debounce here as a precaution for potential use of a search request API,
  // with the aim of minimizing the frequency of API calls.
  const handleSearchWeather = debounce((city: string) => {
    console.log(city)
  }, 600);

  useLayoutEffect(() => {
    setOptions({
      headerSearchBarOptions: {
        onChangeText: e => handleSearchWeather(e.nativeEvent.text),
      },
    });
  }, [handleSearchWeather, setOptions]);

  return (
    <View style={styles.container}><Text>ssssss</Text></View>
  );
}

export default WeatherDetails;
