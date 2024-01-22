import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { setForm, setStep } from "../../pages/Home/action";

const Step1 = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [name, setName] = useState({
    value: formData.info.name,
    isError: false,
  });
  const [email, setEmail] = useState({
    value: formData.info.email,
    isError: false,
  });
  const [phone, setPhone] = useState({
    value: formData.info.phone,
    isError: false,
  });

  const formValidation = () => {
    let isValid = true;

    if (name.value === "") {
      setName((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (email.value === "") {
      setEmail((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (phone.value === "") {
      setPhone((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    return isValid;
  };

  const goStep2Handler = () => {
    const isFormValid = formValidation();

    if (!isFormValid) return;

    dispatch(
      setForm({
        ...formData,
        info: {
          name: name.value,
          email: email.value,
          phone: phone.value,
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
        <Box className={classes.input_wrapper}>
          <Box className={classes.input_label}>
            <FormLabel>Name</FormLabel>
            {name.isError && (
              <FormLabel className={classes.label_error}>
                This field is required
              </FormLabel>
            )}
          </Box>
          <TextField
            className={name.isError ? classes.error : ""}
            type="text"
            placeholder="e.g. Stephen King"
            value={name.value}
            onChange={(e) => {
              setName({
                value: e.target.value,
                isError: e.target.value.length === 0 ? true : false,
              });
            }}
          />
        </Box>
        <Box className={classes.input_wrapper}>
          <Box className={classes.input_label}>
            <FormLabel>Email Address</FormLabel>
            {email.isError && (
              <FormLabel className={classes.label_error}>
                This field is required
              </FormLabel>
            )}
          </Box>
          <TextField
            className={email.isError ? classes.error : ""}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email.value}
            onChange={(e) => {
              setEmail({
                value: e.target.value,
                isError: e.target.value.length === 0 ? true : false,
              });
            }}
          />
        </Box>
        <Box className={classes.input_wrapper}>
          <Box className={classes.input_label}>
            <FormLabel>Phone Number</FormLabel>
            {phone.isError && (
              <FormLabel className={classes.label_error}>
                This field is required
              </FormLabel>
            )}
          </Box>
          <TextField
            className={phone.isError ? classes.error : ""}
            type="number"
            placeholder="e.g. +1 234 567 890"
            value={phone.value}
            onChange={(e) => {
              setPhone({
                value: e.target.value,
                isError: e.target.value.length === 0 ? true : false,
              });
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
      <Box className={classes.btn_backdrop} />
    </Box>
  );
};

export default Step1;
