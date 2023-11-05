import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { CourseGoalProps } from "./types";

const CourseGoal = (props: CourseGoalProps) => {
  const { id, title, description, handleDelete } = props;
  return (
    <Grid item xs={12} md={6} lg={4} xl={4}>
      <Card>
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              handleDelete(id);
            }}
            variant="outlined"
            color="error"
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CourseGoal;

/**
 *
 * If we have a children prop then we have a special type for that to handle in TypeScript
 *
 * children: ReactNode
 *
 */
