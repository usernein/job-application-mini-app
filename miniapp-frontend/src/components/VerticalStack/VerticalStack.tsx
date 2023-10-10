import React, { PropsWithChildren } from "react";
import styles from "./VerticalStack.module.scss";
import clsx from "clsx";

export type VerticalStackProps = PropsWithChildren & {
  className?: string;
};
export const VerticalStack: React.FC<VerticalStackProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.VerticalStack, className)}>{children}</div>
  );
};
