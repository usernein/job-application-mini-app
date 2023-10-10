import React from "react";
import styles from "./TextAreaInput.module.scss";
import clsx from "clsx";
import { Textarea } from "@nextui-org/react";

export type TextAreaInputProps = {
  className?: string;
  label: string;
  ref?: React.Ref<HTMLInputElement>;
};
export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  className,
  ref,
  label,
}) => {
  return (
    <Textarea
      className={clsx(styles.TextAreaInput, className)}
      size={"sm"}
      variant={"bordered"}
      ref={ref}
      label={label}
    />
  );
};
