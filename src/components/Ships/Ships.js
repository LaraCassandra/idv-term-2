import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "1px solid #014871",
    width: "290px",
    height: "250px",
    padding: "20px",
    marginBottom: "30px",
    marginRight: "30px",
    color: "white",
    float: "left",
  },
  images: {
    height: "130px",
    width: "130px",
    borderRadius: "100px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    marginTop: "15px",
    marginBottom: "20px",
  },
  dividerColour: {
    height: "1px",
    backgroundImage: "linear-gradient(130deg, #014871, #07a3b2)",
    marginBottom: "10px",
  },
});

export const Ships = () => {
  const classes = useStyles();

  const [rocket, setRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then((response) => response.json())
      .then((data) => {
        setRockets(data);
      })
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  return (
    <Fragment>
      <ul>
        {rocket.length
          ? rocket.map((s) => {
              return (
                <li key={s.id} className={classes.item}>
                  <img alt="" src={s.image} className={classes.images} />
                  <Divider
                    s={0}
                    variant="middle"
                    orientation="horizontal"
                    classes={{ root: classes.dividerColour }}
                  ></Divider>
                  <Typography variant="h6">{s.ship_name}</Typography>
                  <Typography>Ship type: {s.ship_type}</Typography>
                </li>
              );
            })
          : "no ships available"}
      </ul>
    </Fragment>
  );
};

export default Ships;
