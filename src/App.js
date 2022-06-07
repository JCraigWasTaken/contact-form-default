import React from "react";
import { Box, Grid, Button, makeStyles } from "@material-ui/core";
import UserContact from "./UserContact";

const useStyles = makeStyles({
  saveButton: {
    color: "#e37f1c",
    fontWeight: 700,
    border: "1.5px solid #e37f1c",
    borderRadius: 0,
    padding: "7px 30px",
    marginTop: "20px"
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>Contacts</h1>

      <Box>
        <Grid container>
          <UserContact />
        </Grid>
      </Box>

      <Box>
        <Grid container justifyContent="flex-end">
          <Button variant="outlined" className={classes.saveButton}>
            Save
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
