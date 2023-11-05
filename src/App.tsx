import React, { FC, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { Box, Container } from "@mui/material";
import CourseGoalGrid from "./components/CourseGoalGrid";
import CourseGoalHeader from "./components/CourseGoalHeader";
import GoalsImage from "/goal.png";
import CourseGoalForm from "./components/CourseGoalForm";
import { CourseGoalProps } from "./components/types";

const App: FC = () => {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleDelete = (id: string) => {
    const filterGoals = goals.filter((g) => g.id !== id);
    console.log(filterGoals);

    setGoals(filterGoals);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl" component={"main"}>
        <Box my={2}>
          <CourseGoalHeader
            title="Your Course Goals"
            image={{
              src: GoalsImage,
              alt: "Goal Profile Image",
            }}
          />
          <CourseGoalForm goals={goals} setGoals={setGoals} />
          <CourseGoalGrid goals={goals} handleDelete={handleDelete} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
