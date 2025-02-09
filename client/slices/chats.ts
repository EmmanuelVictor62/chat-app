import {
  Conversation,
  CreateMessageInput,
  MessageSenderEnum,
} from "@/types/conversation";
import { getRandomConversationId } from "@/utils/helpers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatStateProps {
  loading: boolean;
  error: boolean;
  conversations: Conversation[];
  selectedConversation: Conversation;
}

const initialState: ChatStateProps = {
  loading: false,
  error: false,
  conversations: [],
  selectedConversation: null!,
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
        createdAt: new Date().toISOString(),
        messages: [
          {
            sender: MessageSenderEnum.BOT,
            text: "Hi, how can I help you?",
            conversationId: payload,
          },
        ],
      };

      state.conversations.push(newConversation);
      state.selectedConversation = newConversation;

      state.loading = false;
      state.error = false;
    },
    getConversation: (state, { payload }: PayloadAction<string>) => {
      state.selectedConversation = state.conversations.find(
        (conversation) => conversation.id === payload!
      )!;
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
  getConversation,
  deleteConversation,
  addMessageToConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
