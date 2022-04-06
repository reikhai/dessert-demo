import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  letterSpacing: {
    letterSpacing: ".25em",
    color: "#fb8351",
  },
}));

export default function Collections() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Box mt={18} mb={3} ml={5} mr={5}>
          <Typography variant="h3" align="center">
            Contact Us
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Box mt={3}>
              <Grid container={true} spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Your Email"
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
                    label="Your Mobile.No"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Subject"
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
                    placeholder="Your Message"
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
              Submit
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
