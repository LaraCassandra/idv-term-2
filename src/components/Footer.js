import React from 'react'
import { makeStyles, Divider } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    partOne: {
        width: "auto",
        height: "200px",
        backgroundImage: "black",
    },
    partTwo: {
        width: "auto",
        height: "50px",
        backgroundColor: "black",
    },
    dividerColour: {
        height: "1px",
        backgroundColor: "#484848",
        marginLeft: "20%",
        marginRight: "10%",
    },
    footerText: {
        color: "#A9A9A9",
        fontFamily: "Roboto",
        textAlign: "left",
        marginLeft: "20%",
        letterSpacing: "1px",
        fontSize: "18px",
        float: "left",
        paddingTop: "20px",
    },
    footerText2: {
        color: "#A9A9A9",
        fontFamily: "Roboto",
        textAlign: "left",
        marginLeft: "37%",
        letterSpacing: "1px",
        fontSize: "18px",
        paddingTop: "20px",
    },
});

export const Footer = props => {
    const classes = useStyles();

    return(

        <div>

            <div className={classes.partOne}>
                <Divider s={0} variant="middle" orientation="horizontal" classes={{root: classes.dividerColour}}></Divider>
                
                <div className={classes.footerText}>
                    <p>ABOUT US</p>
                    <p>CONTACT</p>
                    <p>TERMS & CONDITIONS</p>
                </div>

                <div className={classes.footerText2}>
                    <p>WORK WITH US</p>
                    <p>PRIVACY POLICIES</p>
                    <p>SERVICES</p>
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