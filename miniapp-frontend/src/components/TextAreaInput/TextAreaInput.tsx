import React from "react";
import styles from "./TextAreaInput.module.scss";
import clsx from "clsx";
import { Textarea } from "@nextui-org/react";

export type TextAreaInputProps = {
  className?: string;
  label: string;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (value: string) => void;
};
export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  className,
  inputRef,
  label,
  onChange,
}) => {
  return (
    <Textarea
      className={clsx(styles.TextAreaInput, className)}
      size={"sm"}
      variant={"bordered"}
      ref={inputRef}
      label={label}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};
