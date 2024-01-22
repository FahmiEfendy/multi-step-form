import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { setForm, setStep } from "../../pages/Home/action";

const Step1 = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const goStep2Handler = () => {
    dispatch(
      setForm({
        ...formData,
        info: {
          name: name,
          email: email,
          phone: phone,
        },
      })
    );
    dispatch(setStep(currentStep + 1));
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Personal info
      </Typography>
      <Typography variant="body1" className={classes.sub_heading}>
        Please provide your name,email address, and phone number.
      </Typography>
      <Box className={classes.input_container}>
        {/* TODO: Add Form Label When Error */}
        <Box className={classes.input_wrapper}>
          <FormLabel>Name</FormLabel>
          <TextField
            type="text"
            placeholder="e.g. Stephen King"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Box className={classes.input_wrapper}>
          <FormLabel>Email Address</FormLabel>
          <TextField
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box className={classes.input_wrapper}>
          <FormLabel>Phone Number</FormLabel>
          <TextField
            type="number"
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        className={classes.btn_next}
        onClick={goStep2Handler}
      >
        Next Step
      </Button>
    </Box>
  );
};

export default Step1;
