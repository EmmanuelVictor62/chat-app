import { createSlice } from "@reduxjs/toolkit";

interface ChatStateProps {
  loading: boolean;
  error: boolean;
}

const initialState: ChatStateProps = {
  loading: false,
  error: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    initialApiCall: (state) => {
      state.loading = true;
      state.error = false;
    },
    apiCallFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { initialApiCall, apiCallFailed } = chatSlice.actions;

export default chatSlice.reducer;
