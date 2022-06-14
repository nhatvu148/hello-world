import axios from "axios";

const Movie = ({ movie }) => {
  return (
    <>
      <h2>{movie.overview}</h2>
    </>
  );
};

export default Movie;

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { movieId: "429" },
      },
      {
        params: { movieId: "238" },
      },
      {
        params: { movieId: "19404" },
      },
    ],
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
