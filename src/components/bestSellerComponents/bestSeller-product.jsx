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

export default function Home() {
  const classes = useStyles();

  const prd = [
    {
      caption: `Same Day Delivery`,
      name: `Box of 12 Assorted Macarons`,
      price: `RM69`,
      path_1: `${
        require("../../images/MACARON_ELEVETE-11_1296x.webp").default
      }`,
    },
    {
      caption: `Same Day Delivery`,
      name: `The Locale Cake (Pandan Gula Melaka)`,
      price: `RM69`,
      path_1: `${
        require("../../images/TheLocalePandanGulaMelaka-2_370x.webp").default
      }`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mix & Match Cake Bites 9 Inch (1.2kg)`,
      price: `RM69`,
      path_1: `${
        require("../../images/mix-and-match-cake-bites-2_740x.webp").default
      }`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mini The Locale Cake (Pandan Gula Melaka) 5 Inch (0.6kg)`,
      price: `RM69`,
      path_1: `${require("../../images/MiniCakes-003b_370x.webp").default}`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Mix and Match Cake Slices`,
      price: `RM69`,
      path_1: `${
        require("../../images/mix-and-match-slices-3_740x.webp").default
      }`,
    },
    {
      caption: `Same Day Delivery`,
      name: `Macaron Tower of 25 Assorted Macarons`,
      price: `RM69`,
      path_1: `${
        require("../../images/macaron-tower-with-flowers_900x.webp").default
      }`,
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Box mt={3} mb={3} ml={5} mr={5}>
          <Typography variant="h2" align="center">
            Our Best Sellers
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
      </Container>
    </>
  );
}
