import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inbox: [],
  sent: [],
  emailToSend: {
    email: { to: '', subject: '', message: '' },
    status: 'idle',
  },
  status: 'idle',
  error: null,
};

const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {
    setEmailToSend(state, action) {
      state.emailToSend = { ...state.emailToSend, ...action.payload };
    },
    resetEmailToSend(state) {
      state.emailToSend = initialState.emailToSend;
    },
  },
});

export const {
  setInboxEmails,
  setSentEmails,
  setEmailToSend,
  resetEmailToSend,
} = emailSlice.actions;

export default emailSlice.reducer;
