import { AppThunk } from "@/state_manager/store";
import {
  createMessageService,
  deleteConversationService,
  listAllConversationsService,
} from "@/services/conversation";
import {
  addMessageToConversation,
  apiCallFailed,
  deleteConversation,
  initialApiCall,
  listAllConversations,
} from "@/slices/chats";
import { CreateMessageInput } from "@/types/conversation";

export const listAllConversationsThunk = (): AppThunk => async (dispatch) => {
  try {
    dispatch(initialApiCall());

    const { data } = await listAllConversationsService();

    dispatch(listAllConversations(data));
  } catch {
    dispatch(apiCallFailed());
  }
};

export const deleteConversationThunk =
  (conversationId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(initialApiCall());

      await deleteConversationService(conversationId);

      dispatch(deleteConversation(conversationId));
    } catch {
      dispatch(apiCallFailed());
    }
  };

export const createMessageThunk =
  (createMessagePayload: CreateMessageInput): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(initialApiCall());

      await createMessageService(createMessagePayload);

      dispatch(addMessageToConversation(createMessagePayload));
    } catch {
      dispatch(apiCallFailed());
    }
  };
