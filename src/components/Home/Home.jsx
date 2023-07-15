import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          if (movie.title) {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Home;
