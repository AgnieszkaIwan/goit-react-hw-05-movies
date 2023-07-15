import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c7e16231292b385d81e462e67776cee3`
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>There are no reviews.</p>
      ) : (
        <div>
          {reviews.map(review => (
            <div key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
