import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    style: "",
    dough: "",
    toppings: [],
  },
  reducers: {
    choiceStyle: (state, action) => {
      state.style = action.payload;
    },
    choiceDough: (state, action) => {
      state.dough = action.payload;
    },
    choiceToppings: (state, action) => {
      state.toppings = action.payload;
    },
  },
});
// ACTIONS
export const { choiceStyle, choiceDough, choiceToppings } = pizzaSlice.actions;

// SELECTORS
export const selectStyle = (state) => state.style;
export const selectDough = (state) => state.dough;
export const selectToppings = (state) => state.toppings;

export default pizzaSlice.reducer;
