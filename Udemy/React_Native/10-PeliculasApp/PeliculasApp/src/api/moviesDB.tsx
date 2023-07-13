import axios from 'axios';

const moviesDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '29ae7ede5815710001d04a89c2736fa2',
    language: 'es-ES',
  },
});

export default moviesDB;
