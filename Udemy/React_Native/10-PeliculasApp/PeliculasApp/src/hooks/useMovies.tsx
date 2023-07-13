import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const nowPlayingPromise = moviesDB.get<MovieDBMoviesResponse>('/now_playing');
    const PopularPromise = moviesDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = moviesDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = moviesDB.get<MovieDBMoviesResponse>('/upcoming');

    const resps = await Promise.all([
      nowPlayingPromise,
      PopularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });
    setIsLoading(false);
  };

  return {
    ...moviesState,
    isLoading,
  };
};
