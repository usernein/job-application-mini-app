import React, { useState } from "react";
import styles from "./EmailInput.module.scss";
import clsx from "clsx";
import { Input } from "@nextui-org/react";

export type EmailInputProps = {
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label: string;
  onChange?: (value: string) => void;
};
export const EmailInput: React.FC<EmailInputProps> = ({
  className,
  inputRef,
  label,
  onChange,
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

  const handleChange = (value: string) => {
    validateAndSetError(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Input
      type="email"
      variant="bordered"
      size={"sm"}
      ref={inputRef}
      label={label}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={(e) => handleChange(e.target.value)}
      className={clsx(styles.EmailInput, className)}
    />
  );
};
