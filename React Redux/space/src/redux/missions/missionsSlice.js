import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MISSIONS_URL = "https://api.spacexdata.com/v3/missions";

const getMissions = createAsyncThunk("missions/getMissions", async() => {
  const response = await axios.get(MISSIONS_URL);
  return response.data;
})

