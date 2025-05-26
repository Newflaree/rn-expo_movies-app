// React Native
import { 
  ActivityIndicator,
  View,
  Text,
  ScrollView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '@/presentation/hooks/useMovies';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';


const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
  } = useMovies();

  if ( nowPlayingQuery.isLoading ) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='blue' size={ 40 } />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

        <MainSlideshow movies={ nowPlayingQuery.data ?? [] } />

        <MovieHorizontalList
          movies={ popularQuery.data ?? [] }
          title='Populars'
          className='mb-5'
        />

        <MovieHorizontalList
          movies={ topRatedQuery.data ?? [] }
          title='Best rated'
          className='mb-5'
        />

        <MovieHorizontalList
          movies={ upcomingQuery.data ?? [] }
          title='Coming soon to theaters'
          className='mb-5'
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
