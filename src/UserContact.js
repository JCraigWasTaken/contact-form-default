import { Box, Grid, TextField, Button, makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import ID from "./ID.png";

const useStyles = makeStyles({
  inputSpacing: {
    width: "100%",
    "&.MuiFormControl-root": {
      margin: "5px 0 0 0 !important"
    }
  },
  userContactContainer: {
    width: "30%",
    minWidth: "200px",
    maxWidth: "400px"
  },
  idIcon: {
    width: "100%",
    minWidth: "45px"
  },
  exitIcon: {
    color: "red"
  }
});

function UserContact() {
  const classes = useStyles();

  const renderInputField = (label, id, value) => {
    return (
      <TextField
        label={label}
        id={id}
        value={value}
        variant="outlined"
        color="primary"
        type="text"
        onChange={(e) => console.log(e.target.value)}
        className={classes.inputSpacing}
        InputLabelProps={{
          shrink: value ? true : false
        }}
      />
    );
  };

  const renderUserContact = () => {
    return (
      <Box ml={2} className={classes.userContactContainer}>
        <Grid container display="flex" justifyContent="flex-end">
          <Button>
            <CloseIcon className={classes.exitIcon} />
          </Button>
        </Grid>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item xs={3}>
            <Box mt={2}>
              <img src={ID} className={classes.idIcon} alt="ID tag" />
            </Box>
          </Grid>
          <Grid item xs={9}>
            {renderInputField("Name", "", "")}
            {renderInputField("Phone", "", "")}
            {renderInputField("E-mail", "", "")}
            {renderInputField("Job Title", "", "")}
          </Grid>
        </Grid>
      </Box>
    );
  };

  return renderUserContact();
}

export default UserContact;
