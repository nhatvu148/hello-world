import React, { FC } from "react";
import { GetStaticProps } from "next";
import Movie from "components/movie";
import { useRouter } from "next/router";
import { getMoviesByCategory } from "api/themoviedb";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

// @ts-ignore
const useStyles = makeStyles(styles);

interface IMovie {
  [key: string]: any;
}
interface IProps {
  movies: IMovie[];
}

const Upcoming: FC<IProps> = ({ movies }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.container} style={{ marginTop: "70px" }}>
        <GridContainer>
          {/* @ts-ignore */}
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.title}>
              <h2>Upcoming</h2>
              <h4>
                You can see the drama and TV programs that you can enjoy online
                at a glance from the list of NextJS Movies works! You can search
                for works being distributed on monthly flat-rate video
                distribution services such as Netflix, Hulu, and Amazon Prime
                Video by narrowing down the conditions. You can also search for
                services that allow you to rent or purchase the video
                distribution version on iTunes, Google Play, etc.
              </h4>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {movies.map((movie) => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
                classes={classes}
                category={router.pathname}
              />
            );
          })}
        </GridContainer>
      </div>
    </>
  );
};

export default Upcoming;

export const getStaticProps: GetStaticProps = async () => {
  const movies = await getMoviesByCategory("upcoming");
  return {
    props: {
      movies,
    },
  };
};
