import React from "react";
import styles from "./Job.module.scss";
import clsx from "clsx";

export const Description: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={clsx(styles.Description)}>
      <div className={styles.label}>Description</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
