import {
  Conversation,
  CreateMessageInput,
  MessageSenderEnum,
} from "@/types/conversation";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface ChatStateProps {
  loading: boolean;
  error: boolean;
  isLoadingConversations: boolean;
  conversations: Conversation[];
  selectedConversation: Conversation;
}

const initialState: ChatStateProps = {
  loading: false,
  error: false,
  isLoadingConversations: false,
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
    initialConversationApiCall: (state) => {
      state.isLoadingConversations = true;
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
      state.isLoadingConversations = false;
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

      state.conversations = [...state.conversations, newConversation];
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
      const conversations = current(state.conversations);

      const conversationIndex = conversations?.findIndex(
        (con) => con?.id === payload?.conversationId
      );

      const updatedConversation = {
        ...state.conversations[conversationIndex],
        messages: [...state.conversations[conversationIndex].messages, payload],
      };

      state.conversations[conversationIndex] = updatedConversation;

      if (state.selectedConversation?.id === payload.conversationId) {
        state.selectedConversation = updatedConversation;
      }
    },
    updateConversationId: (state, { payload }: PayloadAction<string>) => {
      if (state.selectedConversation) {
        state.selectedConversation.id = payload;
        console.log("con id", state.selectedConversation?.id);
        console.log("payload", payload);
      }
    },
  },
});

export const {
  initialApiCall,
  initialConversationApiCall,
  apiCallFailed,
  listAllConversations,
  createConversation,
  getConversation,
  deleteConversation,
  updateConversationId,
  addMessageToConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
