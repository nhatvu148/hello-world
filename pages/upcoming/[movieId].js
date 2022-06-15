import { getMoviesByCategory, getMovie } from "api/themoviedb";

const Movie = ({ movie }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <h2>{movie.overview}</h2>
    </div>
  );
};

export default Movie;

export const getStaticPaths = async () => {
  const data = await getMoviesByCategory("upcoming");
  return {
    paths: data.map((result) => {
      return {
        params: { movieId: result.id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const movie = await getMovie(params.movieId);
  return {
    props: {
      movie,
    },
  };
};
