import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMoviesByCategory, getMovie } from "api/themoviedb";

interface IMovie {
  [key: string]: any
}
interface IProps {
  movie: IMovie
}

const Movie: FC<IProps> = ({ movie }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <h2>{movie.overview}</h2>
    </div>
  );
};

export default Movie;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getMoviesByCategory("now_playing");
  return {
    paths: data.map((result) => {
      return {
        params: { movieId: result.id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movie = await getMovie(params.movieId);
  return {
    props: {
      movie,
    },
  };
};
