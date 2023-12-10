import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

import WeatherDetails from '../screens/WeatherDetails';
import ROUTES from './routes';

export type RootStackParamList = {
  [ROUTES.WEATHER_DETAILS]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName={ROUTES.WEATHER_DETAILS}>
      <Stack.Screen
        name={ROUTES.WEATHER_DETAILS}
        component={WeatherDetails}
        options={{
          headerTitle: 'Weather',
          headerTintColor: colors.primary,
        }}
      />
    </Stack.Navigator>
  );
}
