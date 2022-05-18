// const initState = {
//   search: "",
//   status: "All",
//   priorities : []
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;
// trên là code redux core

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  // nhận vào 1 obj
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    // là 1 obj
    searchFilterChange: (state, action) => {
      // mutation
      state.search = action.payload;
    }, // => { type: 'filters/searchFilterChange' là 1 action }

    statusFilterChange: (state, action) => {
      state.status = action.payload;

    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    }
  }
})