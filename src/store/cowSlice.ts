import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cow } from "../shared/types";
import { specialHerd } from "../proxyServer/Data";

interface CowState {
  ownedCows: Cow[];
  rentedCows: Cow[];
}

const initialState: CowState = {
  ownedCows: [],
  rentedCows: [],
};

const cowsSlice = createSlice({
  name: "cows",
  initialState,
  reducers: {
    buyCow: (state, action: PayloadAction<Cow>) => {
      state.ownedCows.push(action.payload);
      specialHerd.filter((cow) => cow.name !== action.payload.name)
    },

    rentCow: (state, action: PayloadAction<Cow>) => {
      state.rentedCows.push(action.payload);
      specialHerd.filter((cow) => cow.name !== action.payload.name)
    },
  },
});

export const { buyCow, rentCow } = cowsSlice.actions;

export default cowsSlice.reducer;
