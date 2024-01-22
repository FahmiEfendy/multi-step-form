import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";

import AntSwitch from "../Switch";
import classes from "./style.module.scss";
import ProIcon from "../../assets/icon-pro.svg";
import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";
import { setForm, setStep } from "../../pages/Home/action";
import { priceFormatter } from "../../utils/priceFormatter";

const Step2 = ({ prevStepHandler }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [isError, setIsError] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(formData.plan);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(
    formData.plan.isMonthlyPlan
  );

  const planArr = [
    {
      type: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: ArcadeIcon,
    },
    {
      type: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: AdvancedIcon,
    },
    {
      type: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      icon: ProIcon,
    },
  ];

  const switchChangeHandler = () => {
    setIsMonthlyPlan((prevState) => !prevState);
    setSelectedPlan((prevState) => ({ ...prevState, option: "" }));
  };

  const getSelectedPlanHandler = (plan, price) => {
    setSelectedPlan({ isMonthlyPlan, option: plan, price });
  };

  const formValidation = () => {
    let isValid = true;

    if (selectedPlan.option === "") {
      setIsError(true);
      isValid = false;
    } else {
      setIsError(false);
      isValid = true;
    }

    return isValid;
  };

  const goStep3Handler = () => {
    const isFormValid = formValidation();

    if (!isFormValid) return;

    dispatch(
      setForm({
        ...formData,
        plan: {
          option: selectedPlan.option,
          price: selectedPlan.price,
          isMonthlyPlan: isMonthlyPlan,
        },
      })
    );
    dispatch(setStep(currentStep + 1));
  };

  const activePlanStyle = (data) => {
    if (selectedPlan.option === data.type) {
      return classes.grid_item_active;
    } else {
      return classes.grid_item;
    }
  };

  const getActivePlanStyle = (data) => {
    if (selectedPlan.option !== "" && formData.plan.option !== "") {
      if (
        selectedPlan.option === formData.plan.option &&
        formData.plan.option === data.type
      ) {
        return classes.grid_item_active;
      }
    }
    return classes.grid_item;
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
        wrap={matchMediumScreen ? "nowrap" : "wrap"}
        columnGap={4}
        className={classes.grid_container}
      >
        {planArr.map((data, index) => {
          return (
            <Grid
              item
              key={index}
              lg={4}
              xs={12}
              className={activePlanStyle(data) + " " + getActivePlanStyle(data)}
              onClick={() =>
                getSelectedPlanHandler(
                  data.type,
                  isMonthlyPlan ? data.monthlyPrice : data.yearlyPrice
                )
              }
            >
              <img src={data.icon} alt={data.type} />
              <Box className={classes.text_wrapper}>
                <Typography variant="body1" className={classes.text_type}>
                  {data.type}
                </Typography>
                <Typography variant="body1" className={classes.text_price}>
                  {isMonthlyPlan
                    ? priceFormatter(data.monthlyPrice)
                    : priceFormatter(data.yearlyPrice, false, true)}
                </Typography>
                <Typography variant="body1" className={classes.text_free}>
                  {!isMonthlyPlan && "2 months free"}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      {isError && (
        <Typography variant="body1" className={classes.error}>
          You should pick at least one plan above!
        </Typography>
      )}
      <Box className={classes.switcher_wrapper}>
        <Typography
          variant="body1"
          className={
            isMonthlyPlan ? classes.switcher_text_active : classes.switcher_text
          }
        >
          Monthly
        </Typography>
        <AntSwitch
          className={classes.switch}
          checked={!isMonthlyPlan}
          onChange={switchChangeHandler}
        />
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
        <Button className={classes.btn_back} onClick={prevStepHandler}>
          Go Back
        </Button>
        <Button className={classes.btn_next} onClick={goStep3Handler}>
          Next Step
        </Button>
      </Box>
      <Box className={classes.btn_backdrop} />
    </Box>
  );
};

export default Step2;
