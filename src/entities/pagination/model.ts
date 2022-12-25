import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createBaseSelector } from "src/shared/lib/redux-std";

const entityName = "pagination";
const initialState = {
  page: 0,
};
type State = typeof initialState;
const slice = createSlice({
  name: entityName,
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

const baseSelector = createBaseSelector<State>(entityName);

const page = createSelector(baseSelector, (state) => state.page);

export const selectors = {
  page,
};

export const actions = {
  setPage: slice.actions.setPage,
};

export const reducer = { [entityName]: slice.reducer };
