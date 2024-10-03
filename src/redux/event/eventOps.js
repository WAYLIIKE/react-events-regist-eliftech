import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://server-events-regist-eliftech.onrender.com/api/',
});

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (obj, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/events?page=${obj.page}&limit=${obj.limit}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchEventInfo = createAsyncThunk(
  'event/fetchEventInfo',
  async (eventId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`events/${eventId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addParticipant = createAsyncThunk(
  'event/addParticipant',
  async (participant, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `participants/add`,
        participant
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getParticipants = createAsyncThunk(
  'event/getParticipants',
  async (eventId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`participants/${eventId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
