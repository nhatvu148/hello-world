import { getNowPlaying, getMovie } from "api/themoviedb";

const Movie = ({ movie }) => {
  return (
    <>
      <h2>{movie.overview}</h2>
    </>
  );
};

export default Movie;

export const getStaticPaths = async () => {
  const data = await getNowPlaying();
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
