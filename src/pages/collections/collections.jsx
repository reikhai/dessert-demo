import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CollectionsProductComponent from "../../components/collectionComponents/collectionProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  bg: {
    // fontFamily: "Optima nova","sansserif",

    backgroundColor: "#ebebeb",
  },

  bcFont: {
    fontWeight: "500!important",
    fontStyle: "normal!important",
    textTransform: "uppercase!important",
    letterSpacing: "2px!important",
    fontSize: "10px!important",
    padding: "6px 0!important",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CollectionsProductComponent />
      </div>
    </>
  );
}
