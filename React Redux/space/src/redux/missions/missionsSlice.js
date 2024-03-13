import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  missionsData: [],
  status: "idle",
  error: null
}

const MISSIONS_URL = "https://api.spacexdata.com/v3/missions";

const getMissions = createAsyncThunk("missions/getMissions", async() => {
  const response = await axios.get(MISSIONS_URL);
  return response.data.map((mission) => ({
    id: mission.mission_id,
    missionName: mission.mission_name,
    description: mission.description,
    joinMission: false
  }));
})

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: ((state, action) => {
      const missionId = action.payload;
      state.missionsData = state.missionsData.map((mission) => (
        (mission.id === missionId) ? {...mission, joinMission: true} : mission 
        ))
    }),
    leaveMission: ((state, action) => {
      const missionId = action.payload;
      state.missionsData = state.missionsData.map((mission) => (
        (mission.id === missionId) ? {...mission, leaveMission: false} : mission
      ))
    })
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = "succeed";
        state.booksData = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
})

export const selectAllMissions = ((state) => state.missions.missionsData)

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;