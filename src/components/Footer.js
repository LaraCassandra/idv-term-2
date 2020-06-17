import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  partOne: {
    width: "auto",
    height: "200px",
    backgroundImage: "black",
  },
  partTwo: {
    height: "28px",
    backgroundColor: "black",
    margin: "0 20px 0 1700px",
    paddingBottom: "20px",
  },
  dividerColour: {
    margin: "0 4% 0 18%",
    height: "3px",
    backgroundImage: "linear-gradient(130deg, #014871, purple, red, orange)",
  },
  footerText: {
    color: "#A9A9A9",
    fontFamily: "Roboto",
    textAlign: "left",
    marginLeft: "20%",
    letterSpacing: "1px",
    fontSize: "15px",
    float: "left",
    paddingTop: "20px",
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
      color: "white",
    },
  },
  footerText2: {
    color: "#A9A9A9",
    fontFamily: "Roboto",
    textAlign: "left",
    marginLeft: "37%",
    letterSpacing: "1px",
    fontSize: "15px",
    paddingTop: "20px",
  },
});

export const Footer = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.partOne}>
        <Divider
          s={0}
          variant="middle"
          orientation="horizontal"
          classes={{ root: classes.dividerColour }}
        ></Divider>

        <div className={classes.footerText}>
          <p className={classes.hover}>ABOUT US</p>
          <p className={classes.hover}>CONTACT</p>
          <p className={classes.hover}>TERMS & CONDITIONS</p>
        </div>

        <div className={classes.footerText2}>
          <p className={classes.hover}>WORK WITH US</p>
          <p className={classes.hover}>PRIVACY POLICIES</p>
          <p className={classes.hover}>SERVICES</p>
        </div>
      </div>

      <div className={classes.partTwo}>
        <FacebookIcon color="secondary"></FacebookIcon>
        <TwitterIcon color="secondary"></TwitterIcon>
        <InstagramIcon color="secondary"></InstagramIcon>
      </div>
    </div>
  );
};
