const Movie = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
    </>
  );
};

export default Movie;
