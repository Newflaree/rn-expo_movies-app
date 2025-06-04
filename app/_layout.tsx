// React Native
import { 
  View,
  Text
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    <GestureHandlerRootView>
      <QueryClientProvider client={ queryClient }>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default RootLayout;
