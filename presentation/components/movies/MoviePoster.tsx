// React Native
import { 
  View,
  Text,
  Pressable,
  Image
} from 'react-native';


interface Props {
  id: number;
  poster: string;
  isSmallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, isSmallPoster = false, className }: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${ className }`}
    >
      <Image
        source={{ uri: poster }}
        className='shadow-lg rounded-2xl w-full h-full'
        style={{
          width: isSmallPoster ? 85 : 150,
          height: isSmallPoster ? 130 : 250,
        }}
        resizeMode='cover'
      />
    </Pressable>
  );
}

export default MoviePoster;
