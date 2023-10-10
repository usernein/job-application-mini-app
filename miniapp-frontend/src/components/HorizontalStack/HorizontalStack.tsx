import React, { PropsWithChildren } from "react";
import styles from "./HorizontalStack.module.scss";
import clsx from "clsx";

export type HorizontalStackProps = PropsWithChildren & {
  className?: string;
};
export const HorizontalStack: React.FC<HorizontalStackProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.HorizontalStack, className)}>{children}</div>
  );
};
