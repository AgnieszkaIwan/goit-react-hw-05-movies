import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link,
  useParams,
  useLocation,
  Outlet,
  NavLink,
} from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [setCast] = useState(null);
  const [setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=c7e16231292b385d81e462e67776cee3`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c7e16231292b385d81e462e67776cee3`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c7e16231292b385d81e462e67776cee3`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchMovieDetails();
    fetchCast();
    fetchReviews();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <button className={styles.backButton}>&#8592; Go back</button>
          </Link>
        </nav>
      </header>
      <div className={styles.movieDetails}>
        <div className={styles.moviePoster}>
          <img src={posterUrl} alt={movieDetails.title} />
        </div>
        <div className={styles.movieInfo}>
          <h2>
            {movieDetails.title} ({movieDetails.release_date.substring(0, 4)})
          </h2>

          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <div className={styles.additionalInfo}>
            <NavLink
              to={`/movies/${movieId}/cast`}
              className={styles.infoLink}
              activeclassname={styles.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={styles.infoLink}
              activeclassname={styles.activeLink}
            >
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
