// React Native
import { 
  View,
  Text
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';


const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  getMovieByIdAction( +id );
   

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
}

export default MovieScreen;
