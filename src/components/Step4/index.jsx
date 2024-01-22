import React, { useState } from "react";
import { Box, Button, Divider, Link, Typography } from "@mui/material";

import classes from "./style.module.scss";
import ThankYouIcon from "../../assets/icon-thank-you.svg";

const Step4 = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const confirmHandler = () => {
    setIsSuccess(true);
  };

  return (
    <React.Fragment>
      {!isSuccess ? (
        <Box className={classes.container}>
          <Typography variant="h5" className={classes.heading}>
            Finishing up
          </Typography>
          <Typography variant="body1" className={classes.sub_heading}>
            Double-check everything looks OK before confirming.
          </Typography>
          <Box className={classes.summary_container}>
            <Box className={classes.summary_container__inner}>
              <Box className={classes.summary_text}>
                <Typography variant="body1">Arcade (Monthly)</Typography>
                <Link>Change</Link>
              </Box>
              <Typography variant="body1" className={classes.summary_price}>
                $9/mo
              </Typography>
            </Box>
            <Divider />
            <Box className={classes.summary_container__inner_sub}>
              <Typography variant="body1" className={classes.summary_title}>
                Online Service
              </Typography>
              <Typography variant="body1" className={classes.summary_price}>
                +$1/mo
              </Typography>
            </Box>
          </Box>
          <Box className={classes.summary_total}>
            <Typography variant="body1">Total (per month)</Typography>
            <Typography variant="h5">+$12/mo</Typography>
          </Box>
          <Box className={classes.btn_wrapper}>
            <Button>Go Back</Button>
            <Button className={classes.btn_next} onClick={confirmHandler}>
              Confirm
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className={classes.container_success}>
          <img src={ThankYouIcon} alt="Thank You Icon" />
          <Typography variant="h5">Thank you!</Typography>
          <Typography variant="body1">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Step4;
