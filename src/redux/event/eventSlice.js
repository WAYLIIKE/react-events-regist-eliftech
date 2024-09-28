import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './eventOps';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const eventReducer = eventSlice.reducer;
