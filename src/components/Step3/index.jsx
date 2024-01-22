import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import classes from "./style.module.scss";

const Step3 = ({ prevStepHandler, nextStepHandler }) => {
  const addOnsArr = [
    {
      title: "Online Service",
      desc: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      title: "Larger Storage",
      desc: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

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
          return (
            // TODO: Fix Styling When Selected
            <ListItem key={index} className={classes.list_wrapper}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <Box className={classes.text_wrapper}>
                <ListItemText primary={data.title} className={classes.title} />
                <ListItemText primary={data.desc} className={classes.desc} />
              </Box>
              <ListItemText primary={data.price} className={classes.price} />
            </ListItem>
          );
        })}
      </List>
      <Box className={classes.btn_wrapper}>
        <Button onClick={prevStepHandler}>Go Back</Button>
        <Button className={classes.btn_next} onClick={nextStepHandler}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;
