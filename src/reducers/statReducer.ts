import {
  REQUEST_STATS,
  REQUEST_STATS_SUCCESS,
  REQUEST_STATS_FAIL,
  SORT_BY_VALUE,
  SORT_BY_LABEL,
} from "../actions/types";

export interface collegeStats {
  data: any;
  loading: boolean;
}

const initialState = {
  data: [],
  loading: false,
};
const sortBy = (data: any, sort: string) => {
  if (sort === "LABEL") {
    return data.sort((a: any, b: any) =>
      a.label > b.label ? 1 : a.label < b.label ? -1 : 0
    );
  }
  return data.sort((a: any, b: any) =>
    a.value > b.value ? 1 : a.value < b.value ? -1 : 0
  );
};
type action = { type: string; payload: any };
const statReducer = (state: collegeStats = initialState, action: action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return { ...state, ...action.payload };
    case REQUEST_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case REQUEST_STATS_FAIL:
      return { ...state, ...action.payload };

    case SORT_BY_LABEL:
      let { data } = { ...state },
        { selectedIndex } = action.payload;
      let filterData =
        data[selectedIndex].data && data[selectedIndex].data.dataSet;
      let updatedState = sortBy(filterData.data, "LABEL");
      return { ...state, ...action.payload };

    case SORT_BY_VALUE:
      let ccdata:any = { ...state },
        idx  = action.payload.selectedIndex;
      let filterrData = ccdata.data[idx].data && ccdata.data[idx].data.dataSet;
      
      let updateddState = sortBy(filterrData.data, "VALUE");
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default statReducer;
