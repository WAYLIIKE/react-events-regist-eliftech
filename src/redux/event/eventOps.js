import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://server-events-regist-eliftech.onrender.com/api/',
});

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/events');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
