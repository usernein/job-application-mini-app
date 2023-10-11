import React, { useRef, useState } from "react";
import styles from "./JobFormPage.module.scss";
import clsx from "clsx";
import { TextInput } from "../../components/TextInput/TextInput.tsx";
import { HorizontalStack } from "../../components/HorizontalStack/HorizontalStack.tsx";
import { VerticalStack } from "../../components/VerticalStack/VerticalStack.tsx";
import { EmailInput } from "../../components/EmailInput/EmailInput.tsx";
import { TextAreaInput } from "../../components/TextAreaInput/TextAreaInput.tsx";
import { useGetJob } from "../../hooks/useGetJob.ts";
import { MainButton, useWebApp } from "@vkruglikov/react-telegram-web-app";
import { TelegramBackButtonNavigator } from "../../components/TelegramBackButtonNavigator/TelegramBackButtonNavigator.tsx";

export type JobFormPageProps = {
  className?: string;
};

const alphaNumericAndWhiteSpaceValidator = (value: string) => {
  if (!value.match(/^[\w\s]*$/)) {
    return "Only alphanumeric characters are allowed";
  }
  return null;
};
const notEmptyValidator = (value: string) => {
  if (!value) {
    return "This field is required";
  }
  return null;
};
const nameValidator = (value: string) => {
  return notEmptyValidator(value) ?? alphaNumericAndWhiteSpaceValidator(value);
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

  const requiredInputs = [nameRef, lastNameRef, emailRef, locationRef];

  const checkSubmittable = () => {
    const isAnyRequiredInputEmpty = requiredInputs.some((ref) => {
      if (!ref.current) return true;

      const input = ref.current;
      return !input?.value;
    });

    const isAnyRequiredInputInvalid = requiredInputs.some((ref) => {
      if (!ref.current) return true;

      const input = ref.current;
      return input?.validationMessage;
    });

    return !isAnyRequiredInputEmpty && !isAnyRequiredInputInvalid;
  };

  const [isSubmittable, setIsSubmittable] = useState(false);

  const checkSubmittableAndSetState = () => {
    setIsSubmittable(checkSubmittable());
  };

  const composeFormData = () => ({
    name: nameRef.current?.value ?? "",
    last_name: lastNameRef.current?.value ?? "",
    email: emailRef.current?.value ?? "",
    location: locationRef.current?.value ?? "",
    about: aboutRef.current?.value ?? "---",
  });

  const WebApp = useWebApp();
  const handleSubmit = () => {
    const formData = composeFormData();
    WebApp.sendData(JSON.stringify(formData));
  };

  return (
    <div className={clsx(styles.JobFormPage, className)}>
      <VerticalStack className={"gap-2"}>
        <h1 className={styles.title}>Applying for {job.title}</h1>
        <HorizontalStack className={"gap-2"}>
          <TextInput
            inputRef={nameRef}
            label="First name"
            validator={nameValidator}
            onChange={checkSubmittableAndSetState}
          />
          <TextInput
            inputRef={lastNameRef}
            label="Last name"
            validator={nameValidator}
            onChange={checkSubmittableAndSetState}
          />
        </HorizontalStack>
        <EmailInput
          inputRef={emailRef}
          label="Email"
          onChange={checkSubmittableAndSetState}
        />
        <TextInput
          inputRef={locationRef}
          label="Location (City, Country)"
          validator={notEmptyValidator}
          onChange={checkSubmittableAndSetState}
        />
        <TextAreaInput
          inputRef={aboutRef}
          label="About you (optional)"
          onChange={checkSubmittableAndSetState}
        />
      </VerticalStack>

      {isSubmittable && <MainButton text={"Submit"} onClick={handleSubmit} />}
      <TelegramBackButtonNavigator />
    </div>
  );
};
