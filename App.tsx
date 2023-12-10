import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootNavigator from './src/navigation/RootNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
