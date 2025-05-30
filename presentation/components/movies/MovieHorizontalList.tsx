// React
import {
  useEffect,
  useRef
} from 'react';
// React Native
import { 
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text
} from 'react-native';
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {
  const isLoading = useRef( false );

  useEffect( () => {
    setTimeout( () => {
      isLoading.current = false;
    }, 200 );
  }, [movies] );

  const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent> ) => {
    if ( isLoading.current ) return;
    const {
      contentOffset,
      layoutMeasurement,
      contentSize
    } = event.nativeEvent;

    const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width;

    if ( !isEndReached ) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
  }

  return (
    <View className={ `${ className }` }>
      { title && <Text className='text-3xl font-bold px-4 mb-2'>{ title }</Text> }

      <FlatList
        horizontal
        data={ movies }
        showsHorizontalScrollIndicator={ false }
        keyExtractor={ ( item, i ) => `${ item.id }-${ i }` }
        renderItem={ ({ item }) => <MoviePoster 
          id={ item.id }
          poster={ item.poster }
          isSmallPoster={ true }
        /> }
        onScroll={ onScroll }
      />
    </View>
  );
}

export default MovieHorizontalList;
