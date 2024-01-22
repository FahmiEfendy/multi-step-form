import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Divider, Link, Typography } from "@mui/material";

import classes from "./style.module.scss";
import ThankYouIcon from "../../assets/icon-thank-you.svg";
import { priceFormatter } from "../../utils/priceFormatter";

const Step4 = ({ prevStepHandler }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const formData = useSelector((state) => state.homeReducer.form);
  const totalPrice = useSelector((state) => state.homeReducer.totalPrice);

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
                <Typography variant="body1">
                  {formData.plan.option} (
                  {formData.plan.isMonthlyPlan ? "Monthly" : "Yearly"})
                </Typography>
                <Link>Change</Link>
              </Box>
              <Typography variant="body1" className={classes.summary_price}>
                {priceFormatter(
                  formData.plan.price,
                  true,
                  formData.plan.isMonthlyPlan ? false : true
                )}
              </Typography>
            </Box>
            <Divider />
            <React.Fragment>
              {formData.addOns.map((data, index) => {
                return (
                  <Box
                    className={classes.summary_container__inner_sub}
                    key={index}
                  >
                    <Typography
                      variant="body1"
                      className={classes.summary_title}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.summary_price}
                    >
                      {formData.plan.isMonthlyPlan
                        ? priceFormatter(data.monthlyPrice, true)
                        : priceFormatter(data.yearlyPrice, true, true)}
                    </Typography>
                  </Box>
                );
              })}
            </React.Fragment>
          </Box>
          <Box className={classes.summary_total}>
            <Typography variant="body1">
              Total (per {formData.plan.isMonthlyPlan ? "month" : "year"})
            </Typography>
            <Typography variant="h5">
              {priceFormatter(
                totalPrice,
                true,
                formData.plan.isMonthlyPlan ? false : true
              )}
            </Typography>
          </Box>
          <Box className={classes.btn_wrapper}>
            <Button onClick={prevStepHandler}>Go Back</Button>
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
