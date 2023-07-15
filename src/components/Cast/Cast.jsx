import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c7e16231292b385d81e462e67776cee3`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map(actor => (
        <div key={actor.id}>{actor.name}</div>
      ))}
    </div>
  );
};

export default Cast;
