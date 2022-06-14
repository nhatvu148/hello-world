import axios from "axios";
import Movie from "components/movie";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

const TopRated = ({ movies }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={7} md={7}>
            <div className={classes.title}>
              <h2>Dynamic Shadows™</h2>
              <h4>
                Material Kit PRO is coming with the famous colored shadows. That
                means each image from the cards is getting an unique color
                shadow. You don{"'"}t have to do anything to activate them, just
                enjoy the new look of your website.
              </h4>
              <br />
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} classes={classes} />;
          })}
        </GridContainer>
      </div>
    </>
  );
};

export default TopRated;

export const getStaticProps = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );

  return {
    props: {
      movies: response.data.results.slice(0, 3),
    },
  };
};
