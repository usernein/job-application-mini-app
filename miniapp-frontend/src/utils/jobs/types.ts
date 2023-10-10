import { ReactNode } from "react";

export type JobInfo = {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  media: ReactNode;
};
