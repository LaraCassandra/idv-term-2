import React, { Fragment } from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import Launches from "./About/Launches";
import Rockets from "./Rockets/Rockets";
import RocketChart from "./Rockets/RocketChart";
import RocketSuccessChart from "./Rockets/RocketSuccessChart";
import ShipChart from "./Ships/ShipChart";
import ShipWeightChart from "./Ships/ShipWeightChart";
import CapsuleLandings from "./Capsules/CapsuleLandings";
import Missions from "./About/Missions";
import History from "./About/History";
import LaunchPads from "./About/LaunchPads";
import Info from "./About/Info";
import CapsuleMissions from "./Capsules/CapsuleMissions";
import Cards from "./Ships/Cards";

const useStyles = makeStyles({
  mainArea: {
    width: "auto",
    height: "5250px",
    backgroundImage: "linear-gradient(black, black)",
  },
  content: {
    width: "80%",

    marginLeft: "15%",
    color: "white",
    padding: "20px",
    float: "left",
    marginBottom: "20px",
  },
  title: {
    textAlign: "left",
    fontSize: "27px",
    marginLeft: "60px",
    marginTop: "10px",
    textTransform: "uppercase",
  },
  subtitle: {
    textAlign: "left",
    fontSize: "20px",
    margin: "20px 0 30px 40px",
    textTransform: "uppercase",
  },
  graph: {
    width: "43%",
    margin: "0 0 40px 35px",
    backgroundColor: "#1a1a1a",
    padding: "20px",
    float: "left",
  },
  dividerColour: {
    height: "3px",
    backgroundImage: "linear-gradient(130deg, #014871, purple, red, orange)",
    margin: "20px 0 60px 50px",
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

          <div>
            <Info />
          </div>

          {/* ABOUT TILES */}
          <Launches />
          <Missions />
          <History />
          <LaunchPads />
        </div>

        {/* CONTENT 2 - CAPSULES */}
        <div className={classes.content}>
          <Typography className={classes.title}>CAPSULES</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          {/* CAPSULE GRAPHS */}
          <div className={classes.graph}>
            <Typography className={classes.subtitle}>LANDINGS</Typography>
            <CapsuleLandings />
          </div>

          <div className={classes.graph}>
            <Typography className={classes.subtitle}>
              NUMBER OF MISSIONS
            </Typography>
            <CapsuleMissions />
          </div>
        </div>

        {/* CONTENT 3 - ROCKETS */}
        <div className={classes.content}>
          <Typography className={classes.title}>ROCKETS</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          <Rockets />

          {/* ROCKET GRAPHS */}
          <div className={classes.graph}>
            <Typography className={classes.subtitle}>ROCKET HEIGHT</Typography>
            <RocketChart />
          </div>
          <div className={classes.graph}>
            <Typography className={classes.subtitle}>SUCCESS RATE</Typography>
            <RocketSuccessChart />
          </div>
        </div>

        {/* CONTENT 4 - SHIPS */}
        <div className={classes.content}>
          <Typography className={classes.title}>Ships</Typography>
          <Divider
            s={0}
            variant="middle"
            orientation="horizontal"
            classes={{ root: classes.dividerColour }}
          ></Divider>

          {/* SHIP GRAPHS */}
          <div className={classes.graph}>
            <Typography className={classes.subtitle}>
              NUMBER OF MISSIONS
            </Typography>
            <ShipChart />
          </div>

          <div className={classes.graph}>
            <Typography className={classes.subtitle}>SHIP MASS</Typography>
            <ShipWeightChart />
          </div>

          <div className={classes.test}>
            <Cards />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
