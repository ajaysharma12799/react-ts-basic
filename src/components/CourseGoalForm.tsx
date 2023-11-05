import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { CourseGoalFormProps } from "./types";

const CourseGoalForm = ({ goals, setGoals }: CourseGoalFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const goalObj = {
      title,
      description,
      id: uuid(),
    };
    setGoals([...goals, goalObj]);
    setTitle("");
    setDescription("");
  };

  return (
    <Box my={1} component={"form"} onSubmit={(e) => handleSubmit(e)}>
      <Box my={2} component={"div"}>
        <TextField
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </Box>
      <Box my={2} component={"div"}>
        <TextField
          variant="outlined"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </Box>
      <Box my={2} mx={"auto"} width={"fit-content"}>
        <Button type="submit" variant="outlined" color="success">
          Add Goal
        </Button>
      </Box>
    </Box>
  );
};

export default CourseGoalForm;
