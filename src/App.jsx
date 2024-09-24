import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey = "94351fff";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };
 const randomMove = 
  useEffect(() => {
    getMovie("godfather");
    
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

