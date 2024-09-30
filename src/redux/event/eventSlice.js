import { createSlice } from '@reduxjs/toolkit';
import {
  addParticipant,
  fetchEventInfo,
  fetchEvents,
  getParticipants,
} from './eventOps';
import toast from 'react-hot-toast';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    loading: false,
    error: false,
    participants: [],
    participantFilter: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.participantFilter = action.payload;
    },
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
      .addCase(addParticipant.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
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
      .addCase(addParticipant.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        toast(`${action.payload.response.data.message}`, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      })
      .addCase(fetchEventInfo.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchEventInfo.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchEventInfo.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getParticipants.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getParticipants.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.participants = action.payload;
      })
      .addCase(getParticipants.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { changeFilter } = eventSlice.actions;

export const eventReducer = eventSlice.reducer;
