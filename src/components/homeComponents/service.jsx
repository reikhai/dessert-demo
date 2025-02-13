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
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();

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
              {t("slogan1")}
            </Typography>
            <Typography variant="caption" align="center">
              {t("slogan1Desc")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <VolunteerActivismTwoToneIcon
              sx={{ color: pink["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              {t("slogan2")}
            </Typography>
            <Typography variant="caption" align="center">
              {t("slogan2Desc")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <LocalShippingTwoToneIcon
              sx={{ color: lightBlue["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              {t("slogan3")}
            </Typography>
            <Typography variant="caption" align="center">
              {t("slogan3Desc")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} style={{ textAlign: "center" }}>
            <StorefrontTwoToneIcon
              sx={{ color: orange["A700"] }}
              style={{ fontSize: 80 }}
            />
            <Typography variant="body1" align="center">
              {t("slogan4")}
            </Typography>
            <Typography variant="caption" align="center">
              {t("slogan4Desc")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
