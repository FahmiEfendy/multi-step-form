import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";

const Step = ({ currentStep, step, title }) => {
  return (
    <Box className={classes.wrapper_step}>
      <Box
        className={
          classes.circle + " " + (currentStep === step && classes.circle_active)
        }
      >
        <Typography variant="body1">{step}</Typography>
      </Box>
      <Box className={classes.detail}>
        <Typography variant="body1" className={classes.sub_text}>
          STEP {step}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Step;
