import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
  email: {
    to: '',
    subject: '',
    message: '',
  },
  status: 'idle', // 'sending', 'idle' or 'success'
};

export const sendEmailToBackend = createAsyncThunk(
  'email/sendEmailToBackend',
  async (email, { rejectwithValue }) => {
    try {
      const response = await axios.post('url', email);
      return response.data;
    } catch (error) {
      const err = rejectwithValue(
        error.response?.data.toString() || 'Error sending email'
      );
      toast(err);
    }
  }
);

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    sendEmail: (state, action) => {
      state.email = 'sending';
    },
    discardEmail: (state, action) => {
      state.email = initialState.email;
      state.status = 'idle';
    },
    setEmailSuccess: (state, action) => {
      state.status = 'success';
    },
  },
});

export const { setEmail, sendEmail, discardEmail, setEmailSuccess } =
  emailSlice.actions;
export default emailSlice.reducer;
