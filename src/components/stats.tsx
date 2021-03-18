import React from "react";
import styles from "./stats.module.css";

import { TITLE } from "./card";

type statProps = {
  attributes: TITLE;
};
export const Stats: React.FC<statProps> = ({ attributes }) => {
  return (
    <React.Fragment>
      <div className={styles.panel}>
        <div className={styles.stats}>STATS:</div>
        {Object.values(attributes).map((attr) => {
          return (
            <>
              <div className={styles.title}>
                <div className={styles.label}>{attr.label}</div>

                <div className={styles.percentage}>{attr.value}%</div>
              </div>
              <div className={styles.progress}>
                <span className={styles.status} style={{ width: attr.value }}></span>
              </div>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};
