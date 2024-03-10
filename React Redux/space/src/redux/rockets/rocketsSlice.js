import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rocketsData: [],
  status: 'idle',
  error: null
}

const ROCKET_URL = "https://api.spacexdata.com/v4/rockets"

export const getRockets = createAsyncThunk('rockets/getRockets', async() => {
  const response = await axios.get(ROCKET_URL);
  return response.data.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickerImage: rocket.flickerImage,
    reserved: false
  }));
})

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: ((state, action) => {
      const { id } = action.payload;
      state.rocketsData = state.rocketsData.map((rocket) => (rocket.id === id) ? {...rocket, reserved: true} : rocket);
    }),
    cancelReserveRocket: ((state, action) => {
      const { id } = action.payload;
      state.rocketsData =  state.rocketsData.map((rocket) => (rocket.id === id) ? {...rocket, reserved: false} : rocket);
    })
  },
})

export const selectAllRockets = ((state) => state.rockets.rocketsData)

export const { reserveRocket, cancelReserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;