import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  letterSpacing: {
    letterSpacing: ".25em",
    color: "#fb8351",
  },
}));

export default function Collections() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="md">
        <Box mt={18} mb={3} ml={5} mr={5}>
          <Typography variant="h3" align="center">
            {t("contactUs")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Box mt={3}>
              <Grid container={true} spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label={t("yourName")}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label={t("yourEmail")}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            <Box mt={3}>
              <Grid container={true} spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label={t("yourPhoneNumber")}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label={t("subject")}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            <Box mt={3}>
              <Grid container={true} spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={10}
                    variant="outlined"
                    placeholder={t("yourMessage")}
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} mb={3}>
          <Grid item xs={12} align="center">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              {t("Submit")}
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
