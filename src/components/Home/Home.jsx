import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?api_key=c7e16231292b385d81e462e67776cee3'
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {trendingMovies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Home;
