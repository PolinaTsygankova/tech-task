import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6525931567cfb1e59ce77a58.mockapi.io";

export const fetchCars = createAsyncThunk("fetchCars", async (_, thunkAPI) => {
   try {
      const data = await axios.get("/cars");
      return data.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const toggleFavourite = createAsyncThunk(
   "toggleFavourite",
   async (car, thunkAPI) => {
      console.log(car);
      try {
         const response = await axios.put(`/cars/${car.сarId}`, {
            favourite: !car.favourite,
         });
         console.log(response);
         return response.data;
      } catch (e) {
         return thunkAPI.rejectWithValue(e.message);
      }
   }
);
