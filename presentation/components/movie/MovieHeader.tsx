import { Fragment } from 'react';
// React Native
import { 
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <Fragment>
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'transparent']}
        start={[0,0]}
        style={{
          height: screenHeight * 0.4,
          width: '100%',
          position: 'absolute',
          zIndex: 1
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10
        }}
      >
        <Pressable onPress={ () => router.dismiss() }>
          <Ionicons
            name='arrow-back'
            size={ 30 }
            color='white'
            className='shadow'
          />
        </Pressable>
      </View>

      <View
        style={{ height: screenHeight * 0.7 }}
        className='shadow-xl shadow-black'
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            className='flex-1'
            source={{ uri: poster }}
            resizeMode='cover'
          />
        </View>
      </View>

      <View className='px-5 mt-5'>
        <Text className='font-normal'>{ originalTitle }</Text>
        <Text className='font-semibold text-2xl'>{ title }</Text>
      </View>
    </Fragment>
  );
}

export default MovieHeader;
