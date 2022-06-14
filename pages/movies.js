import axios from "axios";
import Movie from "../components/movie";
const Movies = ({ movies }) => {
  return (
    <>
      <h1>Movies</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        );
      })}
    </>
  );
};

export default Movies;

export const getStaticProps = async () => {
  const response = await axios.get(
    // `https://api.themoviedb.org/3/movie/123?api_key=${process.env.TMDB_API_KEY}`
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );
  console.log(response.data.results);
  return {
    props: {
      movies: response.data.results,
    },
  };
};
