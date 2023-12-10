import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

import WeatherInfo from '../screens/WeatherInfo';
import ROUTES from './routes';

export type RootStackParamList = {
  [ROUTES.WEATHER_INFO]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName={ROUTES.WEATHER_INFO}>
      <Stack.Screen
        name={ROUTES.WEATHER_INFO}
        component={WeatherInfo}
        options={{
          headerTitle: 'Weather',
          headerTintColor: colors.primary,
        }}
      />
    </Stack.Navigator>
  );
}
