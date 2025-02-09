export type Conversation = {
  id: string;
  messages: Message[];
  createdAt?: Date;
};

export type Message = {
  id?: string;
  conversationId: string;
  text: string;
  createdAt?: Date;
  sender?: MessageSenderEnum;
};

export enum MessageSenderEnum {
  BOT = "bot",
  USER = "user",
}

export type CreateMessageInput = {
  text: string;
  sender: MessageSenderEnum;
  conversationId: string;
};
