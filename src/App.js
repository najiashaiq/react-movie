import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.REACT_APP_OMDB_API_KEY || "98e3fb1f"; 
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
      const data = await response.json();
      if (data.Response === "False") {
        
        console.error("Movie not found:", data.Error);
        setMovie(null);
      } else {
        setMovie(data);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovie(null); 
    }
  };

  useEffect(() => {
    
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}