export default function MovieDisplay({ movie }) {
    if (!movie) {
      return <h1>Loading...</h1>; 
    }
  
    return (
      <div>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Year}</h3>
      </div>
    );
  }