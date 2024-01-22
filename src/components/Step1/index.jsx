import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

import classes from "./style.module.scss";

const Step1 = ({ nextStepHandler }) => {
  return (
    <Box className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Personal info
      </Typography>
      <Typography variant="body1" className={classes.sub_heading}>
        Please provide your name,email address, and phone number.
      </Typography>
      <Box className={classes.input_container}>
        <Box className={classes.input_wrapper}>
          <FormLabel>Name</FormLabel>
          <TextField type="text" placeholder="e.g. Stephen King" />
        </Box>
        <Box className={classes.input_wrapper}>
          <FormLabel>Email Address</FormLabel>
          <TextField type="email" placeholder="e.g. stephenking@lorem.com" />
        </Box>
        <Box className={classes.input_wrapper}>
          <FormLabel>Phone Number</FormLabel>
          <TextField type="number" placeholder="e.g. +1 234 567 890" />
        </Box>
      </Box>
      <Button
        variant="contained"
        className={classes.btn_next}
        onClick={nextStepHandler}
      >
        Next Step
      </Button>
    </Box>
  );
};

export default Step1;
