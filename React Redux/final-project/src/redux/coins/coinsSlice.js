/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const COINS_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const response = await axios.get(COINS_URL);
  return response.data.map((coin) => ({
    coinId: coin.id,
    coinName: coin.name,
    coinImage: coin.image,
    coinPrice: coin.current_price,
  }));
});

const coinsSlice = createSlice({
  initialState,
  name: 'coins',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCoins.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.coins = action.payload;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCoins = state => state.coins.coins;

export default coinsSlice.reducer;
