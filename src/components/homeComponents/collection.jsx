import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  letterSpacing: {
    letterSpacing: ".25em",
    color: "#fb8351",
  },

  imgBox: {
    "&:hover": {
      opacity: "0.6",
      transform: "scale(1.01)",
    },
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

export default function Collections() {
  const classes = useStyles();

  const prd = [
    {
      name: `Artisanal Cakes`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/BURNT_CHEESE_W__FRUITS_ELEVETE-4_1080x.jpg?v=1603325474`,
    },
    {
      name: `Macarons`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/new-macaron-box_1296x.jpg?v=1604255796`,
    },
  ];

  const prd2 = [
    {
      name: `Mini Cakes`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/LOCALLE_MINI_ELEVETE-1_720x.jpg?v=1603326727`,
    },
    {
      name: `Cupcakes`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/ASSORTED_CUPCAKE_ELEVETE-3_720x.jpg?v=1603325957`,
    },
    {
      name: `Cake Bites & Brownies`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/ASSORTED_CAKEBITES_ELEVETE-2_720x.jpg?v=1606662136`,
    },
    {
      name: `Designer Cakes`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/IMG_20191031_090403crop_720x.jpg?v=1603325843`,
    },
    {
      name: `Dessert table`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/dt_classic_1_720x.jpg?v=1618183016`,
    },
    {
      name: `Virtual Celebration with Elevete`,
      path_1: `https://cdn.shopify.com/s/files/1/0046/1969/8210/collections/Elevete-NOV_v5_Banner_1080x.jpg?v=1608118012`,
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Box mt={10} mb={1}>
          <Typography
            variant="h5"
            align="center"
            className={classes.letterSpacing}
          >
            "A PARTY WITHOUT DESSERTS, IS JUST A MEETING"
          </Typography>
        </Box>
        <Box mt={3} mb={7}>
          <Typography
            variant="body1"
            align="center"
            style={{
              color: "#7d7979",
            }}
          >
            YOU DESERVE TO BE SPOILED WITH ALL THESE CHOICES!
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {prd.map((data, row) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={row}
              className={classes.imgBox}
            >
              <Card sx={{ maxWidth: 550, position: "relative" }} elevation={0}>
                <div className={classes.overlay} />
                <CardMedia
                  component="img"
                  alt="collection image"
                  height="280"
                  image={data.path_1}
                />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  className={classes.font}
                >
                  {data.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          {prd2.map((data, row) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={row}
              className={classes.imgBox}
            >
              <Card sx={{ maxWidth: 550, position: "relative" }} elevation={0}>
                <div className={classes.overlay} />
                <CardMedia
                  component="img"
                  alt="collection image"
                  height="280"
                  image={data.path_1}
                />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  className={classes.font}
                >
                  {data.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={5} sx={{ textAlign: "center" }}>
          <Button
            component={Link}
            to="/collections"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            View All Collections
          </Button>
        </Box>
      </Container>
    </>
  );
}
