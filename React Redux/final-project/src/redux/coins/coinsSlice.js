import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
}

const coinsSlice = createSlice({
  initialState,
  name: "coins",
  reducers:{
    
  }
})