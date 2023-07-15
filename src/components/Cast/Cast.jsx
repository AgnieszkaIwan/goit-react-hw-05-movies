import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c7e16231292b385d81e462e67776cee3`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        <li className={styles.castList}>
          {cast.map(actor => (
            <div key={actor.id}>
              <img
                className={styles.actorPicture}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>
                {actor.name} - {actor.character}
              </p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Cast;
