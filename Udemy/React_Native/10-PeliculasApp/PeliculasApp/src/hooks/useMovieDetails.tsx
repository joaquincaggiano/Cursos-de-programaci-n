import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieDetailsPromise = await moviesDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await moviesDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  return {
    ...state,
  };
};
