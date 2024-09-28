import { createSlice } from '@reduxjs/toolkit';
import { addParticipant, fetchEvents } from './eventOps';
import toast from 'react-hot-toast';

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
      })
      .addCase(addParticipant.fulfilled, (_, action) => {
        toast(`Successfully registred ${action.payload.name}!`, {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      })
      .addCase(addParticipant.rejected, (_, action) => {
        toast(`${action.payload.response.data.message}`, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      }),
});

export const eventReducer = eventSlice.reducer;
