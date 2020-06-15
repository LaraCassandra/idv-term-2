import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 335,
    borderRadius: 0,
    backgroundColor: "#232323",
    color: "white",
    margin: "0 0 30px 30px",
    display: "incline",
    width: "335px",
    float: "left",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    float: "left",
    margin: "0 0 30px 30px",
    width: "1430px",
    color: "orange",
    border: "2px solid #232323",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const Cards = () => {
  const classes = useStyles();

  //Create variables to store data from API
  const [ship, setShip] = useState([]);
  //Call API and set data to the variables
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then((response) => response.json())
      .then((data) => {
        setShip(data);
      })
      //Send an error if API call fails
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Use the variables to display API data
  return (
    <Fragment>
      <Button
        className={clsx(classes.expand)}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        Show More{" "}
        <ExpandMoreIcon
          className={{
            [classes.expandOpen]: expanded,
          }}
        />
      </Button>
      {ship.length
        ? ship.map((s) => {
            return (
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={s.image} />

                <CardContent>
                  <Typography variant="h6" component="p">
                    {s.ship_name}
                  </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="subtitle1">{s.home_port}</Typography>
                    <Typography paragraph>Ship Type: {s.ship_type}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })
        : "no ships available"}
    </Fragment>
  );
};

export default Cards;
