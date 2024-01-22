import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Switch, Typography } from "@mui/material";

import classes from "./style.module.scss";
import ProIcon from "../../assets/icon-pro.svg";
import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";
import { setForm, setStep } from "../../pages/Home/action";
import { priceFormatter } from "../../utils/priceFormatter";

const Step2 = ({ prevStepHandler }) => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [selectedPlan, setSelectedPlan] = useState([]);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const planArr = [
    {
      type: "Arcade",
      price: 9,
      icon: ArcadeIcon,
    },
    {
      type: "Advanced",
      price: 12,
      icon: AdvancedIcon,
    },
    {
      type: "Pro",
      price: 15,
      icon: ProIcon,
    },
  ];

  const switchChangeHandler = () => {
    setIsMonthlyPlan((prevState) => !prevState);
  };

  const getSelectedPlanHandler = (plan, price) => {
    setSelectedPlan({ plan, price });
  };

  const goStep3Handler = () => {
    dispatch(
      setForm({
        ...formData,
        plan: {
          option: selectedPlan.plan,
          price: selectedPlan.price,
          isMonthlyPlan: isMonthlyPlan,
        },
      })
    );
    dispatch(setStep(currentStep + 1));
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
            <Grid
              item
              key={index}
              xl={4}
              className={classes.grid_item}
              onClick={() => getSelectedPlanHandler(data.type, data.price)}
            >
              <img src={data.icon} alt={data.type} />
              <Box className={classes.text_wrapper}>
                <Typography variant="body1" className={classes.text_type}>
                  {data.type}
                </Typography>
                <Typography variant="body1" className={classes.text_price}>
                  {priceFormatter(data.price)}
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
        <Button onClick={prevStepHandler}>Go Back</Button>
        <Button className={classes.btn_next} onClick={goStep3Handler}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
