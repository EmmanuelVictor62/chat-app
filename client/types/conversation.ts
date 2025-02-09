export type Conversation = {
  id: string;
  messages: Message[];
  createdAt?: string;
};

export type Message = {
  id?: string;
  conversationId: string;
  text: string;
  createdAt?: string;
  sender?: MessageSenderEnum;
};

export enum MessageSenderEnum {
  BOT = "BOT",
  USER = "USER",
}

export type CreateMessageInput = {
  text: string;
  sender: MessageSenderEnum;
  conversationId: string;
};
