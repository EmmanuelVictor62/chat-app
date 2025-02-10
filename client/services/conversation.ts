import axios from "axios";
import {
  Conversation,
  CreateMessageInput,
  Message,
} from "@/types/conversation";

export const listAllConversationsService = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/conversations`;

    const { data } = (await axios.get(url)) as { data: Conversation[] };

    return { data };
  } catch (error) {
    throw error;
  }
};

export const createConversationService = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/conversations`;

    const { data } = (await axios.post(url)) as {
      data: Conversation;
    };

    return { data };
  } catch (error) {
    throw error;
  }
};

export const deleteConversationService = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/conversations/${id}`;

    const { data } = (await axios.delete(url)) as {
      data: Conversation;
    };

    return { data };
  } catch (error) {
    console.error(error, "service failed");
    throw error;
  }
};

export const createMessageService = async (
  createMessagePayload: CreateMessageInput
) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/conversations/${createMessagePayload?.conversationId}/messages`;

    const { data } = (await axios.post(url, createMessagePayload)) as {
      data: Message;
    };

    return { data };
  } catch (error) {
    throw error;
  }
};
