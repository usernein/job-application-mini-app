import React from "react";
import styles from "./Job.module.scss";
import clsx from "clsx";

export type ResponsibilitiesProps = {
  items: string[];
};
export const Responsibilities: React.FC<ResponsibilitiesProps> = ({
  items,
}) => {
  return (
    <div className={clsx(styles.Responsibilities)}>
      <div className={styles.label}>Responsibilities</div>
      <div className={styles.content}>
        {items.map((singleItem) => {
          return (
            <div className={clsx(styles.SingleResponsibility)}>
              {singleItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};
