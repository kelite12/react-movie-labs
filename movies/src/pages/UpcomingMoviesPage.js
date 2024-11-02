
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/movieCard';
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = 'YOUR_KEY_GOES_HERE';
    const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`;

    useEffect(() => {
        axios.get(UPCOMING_MOVIES_URL)
            .then(response => setMovies(response.data.results))
            .catch(error => console.error("Error fetching upcoming movies:", error));
    }, []);

    return (
        <PageTemplate
          title="UpComing Movies"
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
          }}
        />
    );
};

export default UpcomingMoviesPage;
