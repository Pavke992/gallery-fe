import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performFetchGalleries: () => {},
};


export const galleriesSlice = createSlice({
  name: 'galleries',
  initialState : {
    data: [] ,
  },
  reducers: {
    setGalleries : (state, action) => {
      state.data = [...action.payload];
    },
    ...middlewareActions,
  }
});

export const {setGalleries, performFetchGalleries} = galleriesSlice.actions;

export default galleriesSlice.reducer;