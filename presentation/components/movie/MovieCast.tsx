// React Native
import { 
  FlatList,
  View,
  Text
} from 'react-native';
import { Cast } from '@/infrastructure/interfaces/cast';
import { MovieActorCard } from './MovieActorCard';


interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className='mt-5 mb-52'>
      <Text className='font-bold text-2xl px-5'>Actores</Text>

      <FlatList
        data={ cast }
        keyExtractor={ (item) => item.id.toString() }
        horizontal
        showsHorizontalScrollIndicator={ false }
        renderItem={ ({ item }) => <MovieActorCard actor={ item } /> }
      />
    </View>
  );
}

export default MovieCast;
