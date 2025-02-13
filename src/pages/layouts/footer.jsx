import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Container } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { amber } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textWhite: {
    color: "black",
    fontSize: "0.675rem",
  },
  iconWhite: {
    color: "black",
    minWidth: "35px",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
    background: "#ebebeb",
    color: "black",
    padding: "25px 0",
  },
  subHeader: {
    padding: theme.spacing(7),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },

  footer2: {
    color: "#FFF",
    background: "#4B5A5F",
    padding: "1em 0px",
    display: "flex",
    flexDirection: "column",
    left: "0",
    bottom: "0",
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.footer}>
        <Container maxWidth="lg">
          <Box>
            <Grid container>
              <Grid item xs={12} sm={3} md={3}>
                <ListItem dense={true}>
                  <ListItemText
                    disableTypography
                    primary={<Typography type="h5">{t('quickLinks')}</Typography>}
                  />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemText primary={t('aboutUs')} />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemText primary={t('contactUs')} />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemText primary={t('FAQ')} />
                </ListItem>
              </Grid>

              <Grid item xs={12} sm={3} md={3}>
                <ListItem dense={true}>
                  <ListItemText
                    disableTypography
                    primary={<Typography type="h5">{t('storePolicy')}</Typography>}
                  />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemText primary={t('termsAndConditions')} />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemText primary={t('privacyPolicy')} />
                </ListItem>
              </Grid>

              <Grid item xs={12} sm={2} md={2}>
                <ListItem dense={true}>
                  <ListItemText
                    disableTypography
                    primary={<Typography type="h5">{t('followUs')}</Typography>}
                  />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemIcon className={classes.iconWhite}>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facebook" />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemIcon className={classes.iconWhite}>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText primary="Instagram" />
                </ListItem>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <ListItem dense={true}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="h5">
                        {t('subscribeToOurNewsletter')}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" className={classes.textWhite}>
                        {t('getLatestPromotionsAndNews')}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem dense={true}>
                  <TextField
                    variant="outlined"
                    label={t('email')}
                    InputProps={{
                      endAdornment: (
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ backgroundColor: amber["A700"] }}
                        >
                          {t('Submit')}
                        </Button>
                      ),
                    }}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div className={classes.footer2}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box ml={3}>
                <Box>© 2021 Company. All Rights Reserved.</Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
