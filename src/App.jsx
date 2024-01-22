import React, { useState } from "react";
import { Box, Container } from "@mui/material";

import Step from "./components/Step";
import Step1 from "./components/Step1";
import classes from "./style.module.scss";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

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

  const changeStepHandler = (step) => {
    setCurrentStep(step);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.container__inner}>
        <Box className={classes.wrapper_left}>
          {stepArr.map((data) => {
            return (
              <Box
                key={data.step}
                onClick={() => {
                  changeStepHandler(data.step);
                }}
              >
                <Step
                  step={data.step}
                  title={data.title}
                  currentStep={currentStep}
                />
              </Box>
            );
          })}
        </Box>
        <Box className={classes.wrapper_right}>
          <Step1 />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
