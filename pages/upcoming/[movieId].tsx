import React, { FC } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMoviesByCategory, getMovie } from "api/themoviedb";

interface IMovie {
  [key: string]: any;
}
interface IProps {
  movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ marginTop: "70px" }}>
      <h2>{movie.overview}</h2>
    </div>
  );
};

export default Movie;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getMoviesByCategory("upcoming");

  return {
    paths: data.slice(0, 3).map((result) => {
      return {
        params: { movieId: result.id.toString() },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const movie = await getMovie(params.movieId as string);

    return {
      props: {
        movie,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
