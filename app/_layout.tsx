// React Native
import { 
  View,
  Text
} from 'react-native';
import { Stack } from 'expo-router';
// Tanstack
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
// Styles
import '../global.css';


const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={ queryClient }>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  );
}

export default RootLayout;
