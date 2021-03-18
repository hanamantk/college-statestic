import React from "react";
import styles from "./tabel.module.css";
import { TITLE, CTITLE } from "./card";

type tabelProps = {
  tTitle: Array<string>;
  tData: Array<CTITLE>;
  cTitle: TITLE;
};
export const ValueTabel: React.FC<tabelProps> = ({ cTitle, tTitle, tData }) => {
  return (
    <React.Fragment>
      <div className={styles.title}>
        <div className={styles.label}>{cTitle.label}</div>

        <div className={styles.percentage}>{cTitle.value}%</div>
      </div>
      <table width="85%">
        <thead>
          <tr className={styles.tr}>
            <th>{tTitle[0]}</th>
            <th>{tTitle[1]}</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((tr) => {
            return (
              <tr className={styles.tr}>
                <td style={{ color: tr.color }}>{tr.label}</td>
                <td style={{ color: tr.color }}>{tr.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
