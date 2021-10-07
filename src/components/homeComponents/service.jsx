import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmojiEmotionsTwoToneIcon from "@mui/icons-material/EmojiEmotionsTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import { yellow, pink, lightBlue, orange } from "@mui/material/colors";

export default function Service() {
  return (
    <>
      <Container maxWidth="md">
        <Box mt={3} mb={1}></Box>

        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <EmojiEmotionsTwoToneIcon
              sx={{ color: yellow["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              BAKING SMILES, ONE CAKE AT A TIME
            </Typography>
            <Typography variant="caption" align="center">
              Creating sweet moments and memories for every occasion
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <VolunteerActivismTwoToneIcon
              sx={{ color: pink["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              DELIVERED DIRECTLY TO YOUR DOORSTEPS
            </Typography>
            <Typography variant="caption" align="center">
              Never compromising on the quality of ingredients we use.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <LocalShippingTwoToneIcon
              sx={{ color: lightBlue["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              BAKED FROM SCRATCH, WITH LOVE
            </Typography>
            <Typography variant="caption" align="center">
              Whether you're ordering ahead of time, or for something last
              minute.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <StorefrontTwoToneIcon
              sx={{ color: orange["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              BUY ONLINE , PICK UP IN STORE
            </Typography>
            <Typography variant="caption" align="center">
              Pick up for free at our Collection Point and save on delivery
              fees!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
