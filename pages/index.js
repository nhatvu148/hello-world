// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// sections for this page
import SectionCarousel from "pages-sections/components/SectionCarousel.js";

// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import componentsStyle from "styles/jss/nextjs-material-kit-pro/pages/componentsStyle.js";

const useStyles = makeStyles(componentsStyle);

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Parallax image="/img/nextjs_header.jpeg" className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  NextJS Movies <span className={classes.proBadge}>PRO</span>
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      <SectionCarousel />
    </div>
  );
};

export default Home;
