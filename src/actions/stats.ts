import {
  REQUEST_STATS,
  REQUEST_STATS_SUCCESS,
  REQUEST_STATS_FAIL,
  SORT_BY_VALUE,
  SORT_BY_LABEL,
} from "./types";
import { sortable } from "../components/card";

import { Dispatch } from "redux";

export const END_POINTS = [
  { url: "get_highlight" },
  { url: "get_buyer" },
  { url: "get_country" },
  { url: "get_income" }
];

export const getStats = () => async (dispatch: Dispatch) => {
  const URL = `http://13.232.99.42:80/`;
  const API_DATA = [];
  dispatch({ type: REQUEST_STATS, payload: { data: [] } });

  try {
    for (let endpoint of END_POINTS) {
      const response = await fetch(`${URL}${endpoint.url}`, { mode: "cors" });
      const data = await response.json();
      API_DATA.push(data);
    }
    dispatch({ type: REQUEST_STATS_SUCCESS, payload: { data: API_DATA } });
  } catch (error) {
    dispatch({ type: REQUEST_STATS_FAIL, payload: { error: error } });
  }
};

export const sortBy = (value: any, index: number) => async (
  dispatch: Dispatch
) => {
  if (sortable[0] == value) {
    dispatch({ type: SORT_BY_LABEL, payload: { selectedIndex: index } });
  } else {
    dispatch({ type: SORT_BY_VALUE, payload: { selectedIndex: index } });
  }
};
