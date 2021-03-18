import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "./components/card";
import styles from "./App.module.css";
import { getStats } from "./actions/stats";
import { collegeStats } from "./reducers/statReducer";
const STATS = ["Highlights", "Buyers", "Countries", "Income"];

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className={styles.header}>ABC College Of Engineeringhk</h1>
    </React.Fragment>
  );
};


function App() {
  const dispatch = useDispatch();
  const [selectedValue, setValue] = useState("Sort by Labe");
  const [error, setError] = useState("");
  const { data, loading } = useSelector((state: collegeStats) => state);
  useEffect(() => {
 
    if (data.length == 0) {
      dispatch(getStats());
    } else {   
      
    }
  }, []);
  const sortBy = (value: any, index: number) => {
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.panel}>
        {!loading
          ? data.map((item: any, i: number) => {
              const { dataSet, filter, stats } = item.data;

              return (
                <Card
                  title={filter}
                  stats={dataSet.data}
                  tabelHeader={dataSet.header}
                  attributes={stats}
                  cardTitle={STATS[i]}
                  sortBy={sortBy}
                  index={i}
                  selectedValue={selectedValue}
                />
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}

export default App;
