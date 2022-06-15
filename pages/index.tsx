import { NextPage } from "next";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// sections for this page
import SectionCarousel from "pages-sections/components/SectionCarousel.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import componentsStyle from "styles/jss/nextjs-material-kit-pro/pages/componentsStyle.js";

// @ts-ignore
const useStyles = makeStyles(componentsStyle);

const videoList = [
  "EZdXGkqnpeQ",
  "HSzx-zryEgM",
  "j1WHIgwZfQE",
  "X0tOpBuYasI",
  "giXco2jaZ_4",
  "Axmg1E4HrVE",
  "DtQycgMD4HQ",
];

const Home: NextPage = () => {
  const classes = useStyles();
  const videoId = videoList[Math.floor(Math.random() * videoList.length)];

  return (
    <div>
      {/* <SectionCarousel /> */}
      <div className={classes.container} style={{ marginTop: "70px" }}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1>
                Welcome to NextJS Movies{" "}
                <span className={classes.proBadge}>PRO</span>
              </h1>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <video
          id="background-video"
          loop
          autoPlay
          muted
          style={{
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          <source src="vid/animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default Home;
