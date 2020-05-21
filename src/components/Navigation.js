import React from 'react'
import "../style.css";
import { AppBar, Button, makeStyles, Toolbar, Avatar, InputBase, Divider, Grid, Typography, Menu, MenuItem } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';


const useStyles = makeStyles((theme) => ({
    grow: {
        flex: 1,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: '0',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      guestButton: {
        width: "120px",
        color: "White",
      }
}));

export const Navigation = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className={classes.appbarStyle}>
            
            <AppBar position="static" color="primary">
                <Toolbar>
                    
                    <Grid item xs={1}></Grid>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />

                <LanguageIcon></LanguageIcon>
                
                <Divider variant="middle" orientation="vertical" ></Divider>

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="secondary">

                <Typography>Guest</Typography>
                <ExpandMoreIcon></ExpandMoreIcon>

                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>LOGIN</MenuItem>
                  <MenuItem onClick={handleClose}>REGISTER</MenuItem>
                </Menu>

                <Avatar></Avatar>

                </Toolbar>
            </AppBar>

        </div>
    );
};