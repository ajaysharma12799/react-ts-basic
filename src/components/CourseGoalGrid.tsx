import { Grid, Typography } from "@mui/material";
import { CourseGoalGridProps } from "./types";
import CourseGoal from "./CourseGoal";

// const CourseGoalGrid = (props: CourseGoalGridProps) => {
//   return (
//     <Grid container spacing={2}>
//       {props.children}
//     </Grid>
//   );
// };

const CourseGoalGrid = (props: CourseGoalGridProps) => {
  return (
    <Grid container spacing={2}>
      {props.goals.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            No Goals
          </Typography>
        </Grid>
      ) : (
        props.goals.map((goal) => {
          return (
            <CourseGoal
              id={goal.id}
              key={goal.id}
              title={goal.title}
              description={goal.description}
              handleDelete={props.handleDelete}
            />
          );
        })
      )}
    </Grid>
  );
};

export default CourseGoalGrid;
