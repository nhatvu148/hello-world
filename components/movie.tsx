import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Warning from "components/Typography/Warning.js";

interface IMovie {
  [key: string]: any
}
interface IProps {
  movie: IMovie;
  classes: any,
  category: string
}

const Movie: FC<IProps> = ({ movie, classes, category }) => {
  return (
    // @ts-ignore
    <GridItem xs={12} sm={4} md={4}>
      <Card blog>
        <CardHeader image>
          <Link href={`${category}/${movie.id}`}>
            <a>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="..."
                width={500}
                height={500}
              />
            </a>
          </Link>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: "url('/img/examples/color2.jpg')",
              opacity: "1",
            }}
          />
        </CardHeader>
        <CardBody>
          <Warning>
            <h2 className={classes.cardCategory}>{movie.title}</h2>
          </Warning>
          <h4 className={classes.cardTitle}>{movie.overview}</h4>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default Movie;
