import React, { useState } from "react";
import { Box, Container } from "@mui/material";

import Step from "./components/Step";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
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

  const selectedStep = () => {
    if (currentStep === 1) return <Step1 />;
    else if (currentStep === 2) return <Step2 />;
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
        <Box className={classes.wrapper_right}>{selectedStep()}</Box>
      </Box>
    </Container>
  );
}

export default App;
