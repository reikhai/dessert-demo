import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BannerComponent from "../../components/homeComponents/banner";
import ServiceComponent from "../../components/homeComponents/service";
import BestSellerComponent from "../../components/homeComponents/bestSeller";
import CollectionComponent from "../../components/homeComponents/collection";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <BannerComponent />
        <ServiceComponent />
        <BestSellerComponent />
        <CollectionComponent />
      </div>
    </>
  );
}
