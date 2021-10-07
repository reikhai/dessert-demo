import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BestSellerBannerComponent from "../../components/bestSellerComponents/bestSeller-banner";
import BestSellerProductComponent from "../../components/bestSellerComponents/bestSeller-product";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@material-ui/core";

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

  const breadcrumbs = [
    <Typography
      component={Link}
      to={"/"}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      Home
    </Typography>,
    <Typography>Best Seller</Typography>,
  ];

  return (
    <>
      <div className={classes.root}>
        <BestSellerBannerComponent />
        <Container className={classes.bg}>
          <Stack spacing={2}>
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              sx={{
                textTransform: "uppercase!important",
                letterSpacing: "2px!important",
              }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>

        <BestSellerProductComponent />
      </div>
    </>
  );
}
