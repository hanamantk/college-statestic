import React, { ChangeEvent, useState } from "react";
import styles from "./card.module.css";
import { ValueTabel } from "./tabel";
import { Stats } from "./stats";
import { sortBy } from "../actions/stats";
import { useSelector, useDispatch } from "react-redux";

interface CARD_TITLE {
  title: string;
  toggleScreen: any;
  selectedValue: string;
  index: number;
  expand: boolean;
}
export const sortable = ["Sort by Label", "Sort by Value"];
export const TitleBar: React.FC<CARD_TITLE> = ({
  title,
  toggleScreen,
  index,
  expand,
}) => {
  const [selectedValue, setValue] = useState("Sort by Label");

  const dispatch = useDispatch();
  const change = (e: ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    dispatch(sortBy(value, index));
    setValue(value);
  };

  const toggleWindow = (
    e: React.MouseEvent<HTMLSpanElement>,
    selectedIndex: number
  ) => {
    //toggleScreen(!expand, selectedIndex);
  };

  return (
    <React.Fragment>
      <div className={styles.title}>
        <div className={styles.label}>{title}</div>
        <div>
          <span className={styles.dropDown}>
            <select
              className={styles.select}
              onChange={(e) => change(e)}
              value={selectedValue}
            >
              <option>{sortable[0]}</option>
              <option>{sortable[1]}</option>
            </select>
          </span>
          <span
            className={`${styles.expandIcon}`}
            onClick={(e) => toggleWindow(e, index)}
          ></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export interface TITLE {
  label: string;
  value: number;
}

export interface CTITLE {
  label: string;
  value: number;
  color: string;
}

type CardProps = {
  title: TITLE;
  stats: Array<CTITLE>;
  tabelHeader: Array<string>;
  attributes: TITLE;
  cardTitle: string;
  sortBy: any;
  selectedValue: string;
  index: number;
};
export const Card: React.FC<CardProps> = ({
  title,
  stats,
  tabelHeader,
  attributes,
  cardTitle,
  sortBy,
  selectedValue,
  index,
}) => {
  const [expand, setExpand] = useState(false);
  const [selectedIndex, setIndex] = useState(5);
  const toggleScreen = (expand: any, index: number) => {
  };
  return (
    <React.Fragment>
      <div
        className={styles.card }
      >
        <div className={styles.bar}>
          <TitleBar
            title={cardTitle}
            index={index}
            toggleScreen={toggleScreen}
            expand={expand}
            selectedValue={selectedValue}
          />
        </div>
        <div className={styles.panel}>
          <div className={styles.left}>
            <Stats attributes={attributes} />
          </div>
          <div className={styles.right}>
            <ValueTabel tTitle={tabelHeader} cTitle={title} tData={stats} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
