import { useState } from "react";
import { Box, Button, Grid, Switch, Typography } from "@mui/material";

import classes from "./style.module.scss";
import ProIcon from "../../assets/icon-pro.svg";
import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";

const Step2 = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const planArr = [
    {
      type: "Arcade",
      price: "$9/mo",
      icon: ArcadeIcon,
    },
    {
      type: "Advanced",
      price: "$2/mo",
      icon: AdvancedIcon,
    },
    {
      type: "Pro",
      price: "$15/mo",
      icon: ProIcon,
    },
  ];

  const switchChangeHandler = () => {
    setIsMonthlyPlan((prevState) => !prevState);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Select your plan
      </Typography>
      <Typography variant="body1" className={classes.sub_heading}>
        You have the option of monthly or yearly billing.
      </Typography>
      <Grid
        container
        wrap="nowrap"
        columnGap={4}
        className={classes.grid_container}
      >
        {planArr.map((data, index) => {
          return (
            <Grid item key={index} xl={4} className={classes.grid_item}>
              <img src={data.icon} alt={data.type} />
              <Box className={classes.text_wrapper}>
                <Typography variant="body1" className={classes.text_type}>
                  {data.type}
                </Typography>
                <Typography variant="body1" className={classes.text_price}>
                  {data.price}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box className={classes.switcher_wrapper}>
        <Typography
          variant="body1"
          className={
            isMonthlyPlan ? classes.switcher_text_active : classes.switcher_text
          }
        >
          Monthly
        </Typography>
        {/* TODO: Fix Styling */}
        <Switch onChange={switchChangeHandler} />
        <Typography
          variant="body1"
          className={
            isMonthlyPlan ? classes.switcher_text : classes.switcher_text_active
          }
        >
          Yearly
        </Typography>
      </Box>
      <Box className={classes.btn_wrapper}>
        <Button>Go Back</Button>
        <Button className={classes.btn_next}>Next Step</Button>
      </Box>
    </Box>
  );
};

export default Step2;
