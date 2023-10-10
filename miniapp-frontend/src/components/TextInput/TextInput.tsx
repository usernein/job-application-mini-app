import React, { useState } from "react";
import styles from "./TextInput.module.scss";
import clsx from "clsx";
import { Input } from "@nextui-org/react";

export type TextInputProps = {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  validator?: (value: string) => null | string;
};
export const TextInput: React.FC<TextInputProps> = ({
  className,
  ref,
  label,
  validator,
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

  return (
    <Input
      type="text"
      variant="bordered"
      size={"sm"}
      ref={ref}
      label={label}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={(e) => validateAndSetError(e.target.value)}
      className={clsx(styles.TextInput, className)}
    />
  );
};
