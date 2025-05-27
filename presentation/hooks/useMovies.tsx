// Tanstack
import {
  useQuery,
  useInfiniteQuery
} from '@tanstack/react-query';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.action';
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.action';


export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useInfiniteQuery({
    queryKey: ['movies', 'popular'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return popularMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: ( lastPage, pages ) => pages.length + 1,
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ['movies', 'top-rated'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return topRatedMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: ( lastPage, pages ) => pages.length + 1,
  });

  const upcomingQuery = useInfiniteQuery({
    queryKey: ['movies', 'upcoming'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return upcomingMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: ( lastPage, pages ) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  }
}
