import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Step from "../../components/Step";
import classes from "./style.module.scss";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";
import { setPrice, setStep } from "./action";

const Home = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const stepArr = [
    {
      step: 1,
      title: "YOUR INFO",
    },
    {
      step: 2,
      title: "SELECT PLAN",
    },
    {
      step: 3,
      title: "ADD-ONS",
    },
    {
      step: 4,
      title: "SUMMARY",
    },
  ];

  const prevStepHandler = () => {
    dispatch(setStep(currentStep - 1));
  };

  const selectedStep = () => {
    if (currentStep === 1) return <Step1 />;
    else if (currentStep === 2)
      return <Step2 prevStepHandler={prevStepHandler} />;
    else if (currentStep === 3)
      return <Step3 prevStepHandler={prevStepHandler} />;
    else if (currentStep === 4)
      return <Step4 prevStepHandler={prevStepHandler} />;
  };

  useEffect(() => {
    let price = 0;
    price += formData.plan.price;
    formData.addOns.map((data) => (price += data.price));

    dispatch(setPrice(price));
  }, [formData]);

  console.log(formData, "FORM DATA");

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.container__inner}>
        <Box className={classes.wrapper_left}>
          {stepArr.map((data) => {
            return (
              <Box key={data.step}>
                <Step
                  step={data.step}
                  title={data.title}
                  currentStep={currentStep}
                />
              </Box>
            );
          })}
        </Box>
        <Box className={classes.wrapper_right}>{selectedStep()}</Box>
      </Box>
    </Container>
  );
};

export default Home;
