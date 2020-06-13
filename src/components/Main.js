import React, { Fragment } from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import About from "./About";
import Rockets from "./Rockets/Rockets";
import Ships from "./Ships/Ships";
import RocketChart from "./Rockets/RocketChart";

const useStyles = makeStyles({
  mainArea: {
    width: "auto",
    height: "3300px",
    backgroundImage: "linear-gradient(black, black)",
  },
  content: {
    width: "80%",
    marginLeft: "15%",
    color: "white",
    padding: "20px",
    float: "left",
  },
  title: {
    textAlign: "left",
    fontSize: "27px",
    marginLeft: "60px",
    marginTop: "20px",
    textTransform: "uppercase",
  },
  subtitle: {
    textAlign: "left",
    fontSize: "25px",
    marginLeft: "60px",
    marginTop: "20px",
    textTransform: "uppercase",
  },
  graph: {
    width: "50%",
    marginLeft: "20px",
  },
  dividerColour: {
    height: "1px",
    backgroundImage: "linear-gradient(130deg, #014871, #07a3b2)",
    marginLeft: "50px",
    marginTop: "20px",
    marginBottom: "60px",
  },
});

export const Main = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.mainArea}>
        {/* CONTENT 1 - ABOUT */}
        <div className={classes.content}>
          <Typography className={classes.title}>About SpaceX</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          <About />
        </div>

        {/* CONTENT 2 - SHIPS */}
        <div className={classes.content}>
          <Typography className={classes.title}>Ships</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          <Ships />
        </div>

        {/* CONTENT 2 - HEROES */}
        <div className={classes.content}>
          <Typography className={classes.title}>ROCKETS</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          <Rockets />

          <div className={classes.graph}>
            <RocketChart />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
