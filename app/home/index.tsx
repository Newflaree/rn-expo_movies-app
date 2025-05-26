// React Native
import { 
  ActivityIndicator,
  View,
  Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '@/presentation/hooks/useMovies';
import MainSlideshow from '@/presentation/components/MainSlideshow';


const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if ( nowPlayingQuery.isLoading ) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='blue' size={ 40 } />
      </View>
    )
  }

  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>

      <MainSlideshow movies={ nowPlayingQuery.data ?? [] } />
    </View>
  );
}

export default HomeScreen;
