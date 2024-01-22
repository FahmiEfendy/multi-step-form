import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setStep } from "../../pages/Home/action";
import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import classes from "./style.module.scss";
import { priceFormatter } from "../../utils/priceFormatter";

const Step3 = ({ prevStepHandler }) => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.homeReducer.form);
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [checked, setChecked] = useState(formData.addOns);

  const addOnsArr = [
    {
      title: "Online Service",
      desc: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      title: "Larger Storage",
      desc: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const getAddOnsHandler = (value) => {
    let valueExist = checked.find((data) => data.title === value.title);

    if (valueExist) {
      setChecked((prevState) =>
        prevState.filter((data) => data.title === value.title)
      );
    } else {
      setChecked([...checked, value]);
    }
  };

  const goStep4Handler = () => {
    dispatch(
      setForm({
        ...formData,
        addOns: checked,
      })
    );
    dispatch(setStep(currentStep + 1));
  };

  const activeAddOnStyle = (isSelected) => {
    return !isSelected ? classes.list_wrapper : classes.list_wrapper_active;
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Pick add-ons
      </Typography>
      <Typography variant="body1" className={classes.sub_heading}>
        Add-ons helps enchance your gaming experience.
      </Typography>
      <List className={classes.list_container}>
        {addOnsArr.map((data, index) => {
          let isSelected = checked.find((c) => c.title === data.title);

          return (
            <ListItem key={index} className={activeAddOnStyle(isSelected)}>
              <ListItemButton
                className={classes.list_wrapper__inner}
                onClick={() => {
                  getAddOnsHandler(data);
                }}
              >
                <ListItemIcon>
                  <Checkbox checked={Boolean(isSelected)} />
                </ListItemIcon>
                <Box className={classes.text_wrapper}>
                  <ListItemText
                    primary={data.title}
                    className={classes.title}
                  />
                  <ListItemText primary={data.desc} className={classes.desc} />
                </Box>
                <ListItemText
                  primary={
                    formData.plan.isMonthlyPlan
                      ? priceFormatter(data.monthlyPrice, true)
                      : priceFormatter(data.yearlyPrice, true, true)
                  }
                  className={classes.price}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box className={classes.btn_wrapper}>
        <Button onClick={prevStepHandler}>Go Back</Button>
        <Button className={classes.btn_next} onClick={goStep4Handler}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;
