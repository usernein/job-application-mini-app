import React, { useState } from "react";
import styles from "./EmailInput.module.scss";
import clsx from "clsx";
import { Input } from "@nextui-org/react";

export type EmailInputProps = {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
};
export const EmailInput: React.FC<EmailInputProps> = ({
  className,
  ref,
  label,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const validateAndSetError = (value: string) => {
    if (value.match(/^\S+@\S+\.\S+$/g)) {
      setIsInvalid(false);
      setErrorMessage(null);
      return;
    }
    setIsInvalid(true);
    setErrorMessage("Invalid email");
  };

  return (
    <Input
      type="email"
      variant="bordered"
      size={"sm"}
      ref={ref}
      label={label}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={(e) => validateAndSetError(e.target.value)}
      className={clsx(styles.EmailInput, className)}
    />
  );
};
