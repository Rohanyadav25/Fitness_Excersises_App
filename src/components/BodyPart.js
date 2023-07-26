import React from "react";
import Icon from "../assets/icons/gym.png";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid red" : "",
        borderBottomLeftRadius: "20px",
        background: "white",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "40px",
      }}
      onClick={()=>setBodyPart(item)}
    >
      <img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
