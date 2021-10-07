import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    padding: "0",
    margin: "0",
    zIndex: "99",
  },

  root1: {
    flexGrow: 1,
    color: "white",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    padding: "0",
    margin: "0",
    zIndex: "99",
    backgroundColor: "black",
    transform: " translateY(10)",
    transition: "transform 6s ease",
    animation: `$myanimation 3s`,
  },

  "@keyframes myanimation": {
    "0%": {
      backgroundColor: "transparent",
      color: "transparent",
    },
    "35%": {
      backgroundColor: "black",
      color: "rosybrown",
    },
    "100%": {
      backgroundColor: "black",
      color: "rosybrown",
    },
  },

  navDisplayFlex: {
    justifyContent: `space-between`,
    "&.MuiList-root": {
      alignItems: "center",
    },

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: `flex`,
    },
  },

  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },

  logo: {
    flex: 1,
    order: 2,

    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },

  listItemText: {
    fontSize: "0.7em",
    fontWeight: "bold",
  },

  navItem: {
    order: 3,
    whiteSpace: "nowrap",
  },

  navIcon: {
    order: 4,
    textAlign: "right",
    flex: 1,
  },

  box: {
    height: "100%",
    display: "-ms-flexbox",
    display: "-webkit-box",
    display: "flex",
    alignItems: "center",
  },

  header: {
    height: "100px",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [headerStyle, setHeader] = useState(classes.root);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader(classes.root);
    } else if (window.scrollY > 70) {
      return setHeader(classes.root1);
    }
  };
  const location = useLocation();

  const navLinks = [
    { title: `Home`, path: `/` },
    { title: `Shop By Category`, path: `/services` },
    { title: `Ready In 4 Hours`, path: `/projects` },
    { title: `By Occasion`, path: `/about-us` },
    { title: `Contact us`, path: `/about-us` },
  ];

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Here"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div
        className={
          location.pathname !== "/collections" ? headerStyle : classes.root1
        }
      >
        <Container className={classes.header}>
          <div className={classes.box}>
            <div className={classes.logo}>
              <img
                alt="logo"
                src="https://cdn.shopify.com/s/files/1/0046/1969/8210/files/EleveteWideLogoforDarkBG_x70@2x.png?v=1595939765"
                width="250px"
              />
            </div>

            <div className={classes.navItem}>
              <List className={classes.navDisplayFlex} disablePadding={false}>
                {navLinks.map(({ title, path }) => (
                  <ListItem button alignItems="center" key={title}>
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItemText
                        primary={title}
                        classes={{ primary: classes.listItemText }}
                      />
                    </a>
                  </ListItem>
                ))}
              </List>
            </div>

            <div className={classes.navIcon}>
              <List disablePadding={false}>
                <ListItemIcon>
                  <PersonIcon sx={{ color: grey[50] }} />
                </ListItemIcon>

                <ListItemIcon>
                  <ShoppingCartIcon sx={{ color: grey[50] }} />
                </ListItemIcon>

                <ListItemIcon>
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    onClick={toggleDrawer("top", true)}
                  >
                    <SearchIcon sx={{ color: grey[50] }} />
                  </IconButton>

                  <Drawer
                    anchor="top"
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                  >
                    {list("top")}
                  </Drawer>
                </ListItemIcon>
              </List>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
