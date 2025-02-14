import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addItem } from "../../app/actions";
import SnackbarComponent from "../snackBarComponents";
import React, { useState } from "react";

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
  const { t } = useTranslation();

  // Access dispatch function with correct types
  const dispatch = useDispatch();
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "info" | "warning">("info");

  const prd = [
    {
      caption: t("sameDayDelivery"),
      name: t("Boxof12AssortedMacarons"),
      price: `RM69`,
      path_1: `${
        require("../../images/MACARON_ELEVETE-11_1296x.webp").default
      }`,
      id: 1,
    },
    {
      caption: t("sameDayDelivery"),
      name: t("TheLocaleCakePandanGulaMelaka"),
      price: `RM69`,
      path_1: `${
        require("../../images/TheLocalePandanGulaMelaka-2_370x.webp").default
      }`,
      id: 2,
    },
    {
      caption: t("sameDayDelivery"),
      name: t("MixandMatchCakeBites9Inch1.2kg"),
      price: `RM69`,
      path_1: `${
        require("../../images/mix-and-match-cake-bites-2_740x.webp").default
      }`,
      id: 3,
    },
    {
      caption: t("sameDayDelivery"),
      name: t("MiniTheLocaleCake(Pandan Gula Melaka)5Inch(0.6kg)"),
      price: `RM69`,
      path_1: `${require("../../images/MiniCakes-003b_370x.webp").default}`,
      id: 4,
    },
    {
      caption: t("sameDayDelivery"),
      name: t("MixandMatchCakeSlices"),
      price: `RM69`,
      path_1: `${
        require("../../images/mix-and-match-slices-3_740x.webp").default
      }`,
      id: 5,
    },
    {
      caption: t("sameDayDelivery"),
      name: t("MacaronTowerof25AssortedMacarons"),
      price: `RM69`,
      path_1: `${
        require("../../images/macaron-tower-with-flowers_900x.webp").default
      }`,
      id: 6,
    },
  ];

  const handleAddToCart = (data: any) => {
    dispatch(addItem(data));
    setOpenSnack(true);
    setMessage(t("added to cart"));
    setType("success");
  };

  const handleCloseSnack = (event?: any, reason?: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box mt={7} mb={1}>
          <Typography
            variant="h5"
            align="center"
            className={classes.letterSpacing}
          >
            {t("yourFavouriteMalaysiaCakeShop")}
          </Typography>
        </Box>
        <Box mt={3} mb={3} ml={5} mr={5}>
          <Typography
            variant="body1"
            align="center"
            style={{
              paddingRight: "24%",
              paddingLeft: "24%",
              color: "#7d7979",
            }}
          >
            {t("ourBestSellers")}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {prd.map((data, row) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={row}
              className={classes.imgBox}
            >
              <Box
                className={classes.projectThumbnail}
                onClick={() => handleAddToCart(data)}
              >
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
                <Typography
                  variant="subtitle1"
                  align="center"
                >
                  {data.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button
            component={Link}
            to="/best-seller"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            {t("viewAll")}
          </Button>
        </Box>
      </Container>

      {/* Snackbar Component */}
      <SnackbarComponent
        open={openSnack}
        message={message}
        type={type}
        onClose={handleCloseSnack}
      />
    </>
  );
}
