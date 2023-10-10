import { useSearchParams } from "react-router-dom";
import { jobsInfo } from "../utils/jobs";

export const useGetJob = () => {
  const [searchParams] = useSearchParams();

  const jobId = searchParams.get("jobId");
  return jobsInfo.find((job) => job.id === jobId);
};
