import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, toggleFavourite } from "./operations";

const initialState = Object.freeze({
   cars: [],
   favouritesList: [],
   isLoading: false,
   error: null,
});

const handlePending = (state) => {
   state.isLoading = true;
};
const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
};

const advertsSlice = createSlice({
   name: "cars",
   initialState,
   extraReducers: {
      [fetchCars.pending]: handlePending,

      [fetchCars.rejected]: handleRejected,

      [fetchCars.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.cars = action.payload;
      },

      [toggleFavourite.pending]: handlePending,

      [toggleFavourite.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         const updatedCar = action.payload;
         const index = state.cars.findIndex((car) => car.id === updatedCar.id);
         state.cars.splice(index, 1, updatedCar);

         if (updatedCar.favourite) {
            state.favouritesList.push(updatedCar);
         } else {
            const favIndex = state.favouritesList.findIndex(
               (car) => car.id === updatedCar.id
            );
            if (favIndex !== -1) {
               state.favouritesList.splice(favIndex, 1);
            }
         }
      },

      [toggleFavourite.rejected]: handleRejected,
   },
});

export const advertsReducer = advertsSlice.reducer;
