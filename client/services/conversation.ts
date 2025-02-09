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

export const deleteConversationService = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/conversations`;

    const { data } = (await axios.delete(url, {
      params: id,
    })) as { data: Conversation };

    return { data };
  } catch (error) {
    throw error;
  }
};

export const createMessageService = async (
  createMessagePayload: CreateMessageInput
) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_CHAT_API_URL}/api/messages`;

    const { data } = (await axios.post(url, {
      params: createMessagePayload,
    })) as { data: Message };

    return { data };
  } catch (error) {
    throw error;
  }
};
