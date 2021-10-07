import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  bannerImage: {
    backgroundPosition: "center center",
    backgroundImage:
      "url(https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/ASSORTED_ELEVETE-4.jpg?v=1603326956)",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "300px",
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
    minHeight: "300px",
  },

  font: {
    position: "absolute",
    top: "50%",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
    fontWeight: "bold",
    fontSize: "55px",
  },
}));

export default function BestSellerBannerComponent() {
  const classes = useStyles();

  var banner = [
    {
      path: "https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/ASSORTED_ELEVETE-4.jpg?v=1603326956",
    },
  ];

  function BestSellerBanner() {
    return (
      <>
        <div className={classes.bannerImage}>
          <div className={classes.overlay} />
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            className={classes.font}
          >
            Best Seller
          </Typography>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={classes.root}>
        {banner.map((item, i) => (
          <BestSellerBanner key={i} item={item} />
        ))}
      </div>
    </>
  );
}
