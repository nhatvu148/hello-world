import React, { FC } from "react";
import { GetServerSideProps, GetStaticPaths } from "next";
import { getMoviesByCategory, getMovie } from "api/themoviedb";

interface IMovie {
  [key: string]: any;
}
interface IProps {
  movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <h2>{movie.overview}</h2>
    </div>
  );
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const movie = await getMovie(params.movieId as string);
  return {
    props: {
      movie,
    },
  };
};
