import React from "react";
import { useNavigate } from "react-router-dom";
import { Job } from "../../components/Job";
import styles from "./JobOverviewPage.module.scss";
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { useGetJob } from "../../hooks/useGetJob.ts";

export const JobOverviewPage: React.FC = ({}) => {
  const job = useGetJob();

  if (!job) {
    return <div>Job not found</div>;
  }
  const navigate = useNavigate();
  const handleApply = () => {
    navigate({ pathname: "/job-form", search: window.location.search });
  };

  return (
    <div className={styles.JobOverviewPage}>
      <Job.Root>
        <Job.Title>{job.title}</Job.Title>
        <Job.Media>{job.media}</Job.Media>
        <Job.Description>{job.description}</Job.Description>
        <Job.Responsibilities items={job.responsibilities} />
        <Job.Requirements items={job.requirements} />
      </Job.Root>

      <MainButton text={"Apply to job"} onClick={handleApply} />
    </div>
  );
};
