import axios from "axios";

const Movie = ({ movie }) => {
  return (
    <>
      <h2>{movie.overview}</h2>
    </>
  );
};

export default Movie;

export const getStaticPaths = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );

  return {
    paths: response.data.results.map((result) => {
      console.log(result);
      return {
        params: { movieId: result.id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log("movieId ", params.movieId);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  console.log(response.data);

  return {
    props: {
      movie: response.data,
    },
  };
};
