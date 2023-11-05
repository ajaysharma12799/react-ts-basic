import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CourseGoalHeaderProps } from "./types";

const CourseGoalHeader: FC<CourseGoalHeaderProps> = (props) => {
  return (
    <Box my={1}>
      <Box width={"10rem"} mx={"auto"} my={1}>
        <img
          src={props.image.src}
          alt={props.image.alt}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {props.title}
      </Typography>
    </Box>
  );
};

export default CourseGoalHeader;
