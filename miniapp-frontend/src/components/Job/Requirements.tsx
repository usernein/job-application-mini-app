import React from "react";
import styles from "./Job.module.scss";
import clsx from "clsx";

export type ResponsibilitiesProps = {
  items: string[];
};
export const Requirements: React.FC<ResponsibilitiesProps> = ({ items }) => {
  return (
    <div className={clsx(styles.Requirements)}>
      <div className={styles.label}>Requirements</div>
      <div className={styles.content}>
        {items.map((singleItem) => {
          return (
            <div className={clsx(styles.SingleRequirement)}>{singleItem}</div>
          );
        })}
      </div>
    </div>
  );
};
