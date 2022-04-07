import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  bannerImage: {
    backgroundPosition: "center center",
    backgroundImage: `url(${require("../../images/home.png").default})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "600px",
  },

  overlay: {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#5c5c5c",
    opacity: ".4",
    minHeight: "600px",
  },
}));

export default function BannerComponent() {
  const classes = useStyles();

  var banner = [
    {
      path: `${require("../../images/home.png").default}`,
    },
  ];

  function Banner() {
    return (
      <>
        <div className={classes.bannerImage}>
          <div className={classes.overlay} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={classes.root}>
        {banner.map((item, i) => (
          <Banner key={i} item={item} />
        ))}
      </div>
    </>
  );
}
