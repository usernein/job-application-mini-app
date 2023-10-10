import React, { useRef } from "react";
import styles from "./JobFormPage.module.scss";
import clsx from "clsx";
import { TextInput } from "../../components/TextInput/TextInput.tsx";
import { HorizontalStack } from "../../components/HorizontalStack/HorizontalStack.tsx";
import { VerticalStack } from "../../components/VerticalStack/VerticalStack.tsx";
import { EmailInput } from "../../components/EmailInput/EmailInput.tsx";
import { TextAreaInput } from "../../components/TextAreaInput/TextAreaInput.tsx";
import { useGetJob } from "../../hooks/useGetJob.ts";
import { MainButton, useWebApp } from "@vkruglikov/react-telegram-web-app";

export type JobFormPageProps = {
  className?: string;
};

const onlyAlphanumericValidator = (value: string) => {
  if (!value.match(/^\w*$/)) {
    return "Only alphanumeric characters are allowed";
  }
  return null;
};
export const JobFormPage: React.FC<JobFormPageProps> = ({ className }) => {
  const job = useGetJob();

  if (!job) {
    return <div>Job not found</div>;
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);

  const composeFormData = () => ({
    name: nameRef.current?.value,
    last_name: lastNameRef.current?.value,
    email: emailRef.current?.value,
    location: locationRef.current?.value,
    about: aboutRef.current?.value,
  });

  const WebApp = useWebApp();
  const handleSubmit = () => {
    const formData = composeFormData();
    WebApp.sendData(formData);
  };

  return (
    <div className={clsx(styles.JobFormPage, className)}>
      <VerticalStack className={"gap-2"}>
        <h1 className={styles.title}>Applying for {job.title}</h1>
        <HorizontalStack className={"gap-2"}>
          <TextInput
            ref={nameRef}
            label="First name"
            validator={onlyAlphanumericValidator}
          />
          <TextInput
            ref={lastNameRef}
            label="Last name"
            validator={onlyAlphanumericValidator}
          />
        </HorizontalStack>
        <EmailInput ref={emailRef} label="Email" />
        <TextInput ref={locationRef} label="Location (City, Country)" />
        <TextAreaInput ref={aboutRef} label="About you" />
      </VerticalStack>

      <MainButton text={"Submit"} onClick={handleSubmit} />
    </div>
  );
};