import React, { useState } from "react";
import styles from "./TextInput.module.scss";
import clsx from "clsx";
import { Input } from "@nextui-org/react";

export type TextInputProps = {
  className?: string;
  inputRef: React.Ref<HTMLInputElement>;
  label: string;
  validator?: (value: string) => null | string;
  onChange?: (value: string) => void;
};
export const TextInput: React.FC<TextInputProps> = ({
  className,
  inputRef,
  label,
  validator,
  onChange,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const validateAndSetError = (value: string) => {
    if (validator) {
      const errorMessage = validator(value);
      if (!errorMessage) {
        setIsInvalid(false);
        setErrorMessage(null);
        return;
      }
      setIsInvalid(true);
      setErrorMessage(errorMessage);
    }
  };

  const handleChange = (value: string) => {
    validateAndSetError(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Input
      type="text"
      variant="bordered"
      size={"sm"}
      ref={inputRef}
      label={label}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={(e) => handleChange(e.target.value)}
      className={clsx(styles.TextInput, className)}
    />
  );
};
