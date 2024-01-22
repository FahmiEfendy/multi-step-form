import React, { useState } from "react";
import { Box, Container } from "@mui/material";

import Step from "./components/Step";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
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

  const prevStepHandler = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const nextStepHandler = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const selectedStep = () => {
    if (currentStep === 1) return <Step1 nextStepHandler={nextStepHandler} />;
    else if (currentStep === 2)
      return (
        <Step2
          prevStepHandler={prevStepHandler}
          nextStepHandler={nextStepHandler}
        />
      );
    else if (currentStep === 3)
      return (
        <Step3
          prevStepHandler={prevStepHandler}
          nextStepHandler={nextStepHandler}
        />
      );
    else if (currentStep === 4) return <Step4 />;
  };

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
}

export default App;
