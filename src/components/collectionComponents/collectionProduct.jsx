import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  letterSpacing: {
    letterSpacing: ".25em",
    color: "#fb8351",
  },
  projectThumbnail: {
    float: "left",
    position: "relative",
    margin: "0 auto",
    width: "100%",
    cursor: "pointer",
  },

  imgBox: {
    "&:hover": {
      opacity: "0.6",
      transform: "scale(1.1)",
    },
  },

  projectTitle: {
    position: "absolute",
    bottom: "3px",
    color: "#ffffff",
    backgroundColor: "#87b6a7!important",
    textAlign: "center",
    height: "30px",
    width: "100%",
    overflow: "hidden",
    transition: "all 200ms ease",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
}));

export default function Collections() {
  const classes = useStyles();

  const prd = [
    {
      caption: `Same Day Delivery`,
      name: `Burnt Cheesecake with Berries`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/burnt-cheesecake-with-fruits_590x.jpg?v=1603173576`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Popstar 7inch (1kg) (Salted Caramel Chocolate)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/popstar-salted-caramel-chocolate-3_590x.jpg?v=1602897856`,
    },
    {
      caption: `Same Day Delivery`,
      name: `The Locale Cake (Pandan Gula Melaka)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/pandan-gula-melaka-2_590x.jpg?v=1602898379`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Popstar 9Inch (2kg) (Salted Caramel Chocolate)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/salted-caramel-chocolate-popcorn-2_590x.jpg?v=1602897910`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Tokeru Cheesecake (New York Baked Cheesecake)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/nutella-fudge-4_590x.jpg?v=1602897559`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Lemon Poppyseed Cake`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/chocolate-tuxedo-2_590x.jpg?v=1603165185`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Old Fashioned Butterscotch Cookies Cake`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/chocolate-truffle-2_590x.jpg?v=1603171988`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mix and Match Cake Slices`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/burnt-cheesecake-2_590x.jpg?v=1603174106`,
    },
  ];

  const prd2 = [
    {
      caption: `Same Day Delivery`,
      name: `Mini Butterscotch Cookies Cake 5 Inch (0.6kg)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/mini-cake-butterscotch-cookies_590x.jpg?v=1603166594`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mini Popstar 5 Inch (Salted Caramel Chocolate) (0.6kg)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/mini-cake-salted-caramel-chocolate-popcorn_590x.jpg?v=1602897333`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mini The Locale Cake (Pandan Gula Melaka) 5 Inch (0.6kg)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/mini-cake-pandan-gula-melaka-2_590x.jpg?v=1602897457`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mini Salted Caramel Chocolate 5 Inch (0.6kg)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/mini-cake-salted-caramel-chocolate-drizzle_590x.jpg?v=1602897401`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mini Death By Chocolate Cake 5 Inch (0.6kg)`,
      price: `RM69`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/products/mini-cake-death-by-chocolate_590x.jpg?v=1603166732`,
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Box mt={18} mb={3} ml={5} mr={5}>
          <Typography variant="h2" align="center">
            COLLECTIONS
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4" align="center">
            Artisanal Cakes
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {prd.map((data, row) => (
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              key={row}
              className={classes.imgBox}
            >
              <Box className={classes.projectThumbnail}>
                <img
                  alt="best seller img"
                  src={data.path_1}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "15px",
                  }}
                />
                <Box className={classes.projectTitle}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    display="inline"
                  >
                    {data.caption}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="caption" align="center">
                  {data.name}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box mt={5} mb={2}>
          <Typography variant="h4" align="center">
            MINI CAKES
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {prd2.map((data, row) => (
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              key={row}
              className={classes.imgBox}
            >
              <Box className={classes.projectThumbnail}>
                <img
                  alt="best seller img"
                  src={data.path_1}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "15px",
                  }}
                />
                <Box className={classes.projectTitle}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    display="inline"
                  >
                    {data.caption}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="caption" align="center">
                  {data.name}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
