import React from "react";
import styles from "./Job.module.scss";
import clsx from "clsx";

export const Media: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={clsx(styles.Media)}>{children}</div>;
};
