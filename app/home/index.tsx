// React Native
import { 
  View,
  Text
} from 'react-native';
import { useMovies } from '@/presentation/hooks/useMovies';


const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>
        { JSON.stringify( nowPlayingQuery.data ) }
      </Text>
    </View>
  );
}

export default HomeScreen;
