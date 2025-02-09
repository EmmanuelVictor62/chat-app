import { Conversation, CreateMessageInput } from "@/types/conversation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatStateProps {
  loading: boolean;
  error: boolean;
  conversations: Conversation[];
}

const initialState: ChatStateProps = {
  loading: false,
  error: false,
  conversations: [],
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
    listAllConversations: (
      state,
      { payload }: PayloadAction<Conversation[]>
    ) => {
      state.conversations = payload;
      state.loading = false;
      state.error = false;
    },
    createConversation: (state, { payload }: PayloadAction<string>) => {
      const newConversation: Conversation = {
        id: payload,
        messages: [],
      };
      state.conversations.push(newConversation);
    },
    deleteConversation: (state, { payload }: PayloadAction<string>) => {
      const filteredConversations = state.conversations?.filter(
        (conversation) => conversation?.id !== payload
      );

      state.conversations = filteredConversations;
      state.loading = false;
      state.error = false;
    },
    addMessageToConversation: (
      state,
      { payload }: PayloadAction<CreateMessageInput>
    ) => {
      const conversationIndex = state.conversations?.findIndex(
        (con) => con?.id === payload?.conversationId
      );

      if (conversationIndex !== -1) {
        state.conversations[conversationIndex].messages = [
          ...state.conversations[conversationIndex].messages,
          payload,
        ];
      }
    },
  },
});

export const {
  initialApiCall,
  apiCallFailed,
  listAllConversations,
  createConversation,
  deleteConversation,
  addMessageToConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
