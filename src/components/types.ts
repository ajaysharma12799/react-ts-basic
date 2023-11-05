import { ReactNode } from "react";

export type CourseGoalProps = {
  id?: string;
  title: string;
  description: string;
  handleDelete?: (x: string) => void;
};

export type CourseGoalFormProps = {
  goals: CourseGoalProps[];
  setGoals: (x: CourseGoalProps[]) => void;
};

export type CourseGoalGridProps = {
  goals: CourseGoalProps[];
  children?: ReactNode;
  handleDelete: (x: string) => void;
};

export type CourseGoalHeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
};
