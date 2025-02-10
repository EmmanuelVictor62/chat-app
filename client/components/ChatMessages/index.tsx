"use client";
import React from "react";
import Image from "next/image";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import ChatInput from "../ChatInput";

import { chatSlice } from "@/state_manager/selectors";
import { formattedDateTime } from "@/utils/helpers";
import { CreateMessageInput, MessageSenderEnum } from "@/types/conversation";
import { createMessageThunk } from "@/thunks/conversation";
import { addMessageToConversation } from "@/slices/chats";

const ChatMessages: React.FC = () => {
  const { selectedConversation } = useSelector(chatSlice);
  const dispatch = useDispatch<Dispatch<any>>();

  const handleSendMessage = async (message: string) => {
    try {
      const messagePayload: CreateMessageInput = {
        text: message,
        sender: MessageSenderEnum.USER,
        conversationId: selectedConversation?.id,
      };

      if (selectedConversation?.messages?.length <= 1) {
        // await createConversationService(message);
        dispatch(addMessageToConversation(messagePayload));
        // dispatch(getConversation(messagePayload?.conversationId));
      } else {
        dispatch(createMessageThunk(messagePayload));
      }

      setTimeout(() => {
        const botReply: CreateMessageInput = {
          text: "This is an AI generated message",
          sender: MessageSenderEnum.BOT,
          conversationId: messagePayload.conversationId,
        };
        dispatch(addMessageToConversation(botReply));
      }, 120000);
    } catch {}
  };

  return (
    <div className="flex flex-1 flex-col rounded-[28px] bg-white overflow-hidden">
      <div className="flex items-center gap-3 justify-start border-b border-gray-200 py-2 px-5">
        <Image src={"/images/avatar.png"} height={48} width={48} alt="avatar" />
        <p className="text-[#1D1B20]">Chatbot</p>
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-5 pb-3 px-5 overflow-auto h-full">
        <p className="self-center text-sm text-color-dark-1">
          {formattedDateTime(selectedConversation?.createdAt) ?? "N/A"}
        </p>

        {selectedConversation?.messages?.map((message, index) => {
          return (
            <React.Fragment key={index + 1}>
              {message?.sender?.toUpperCase() === MessageSenderEnum.BOT ? (
                <div
                  className={`flex items-center gap-2  py-[10px] justify-start`}
                >
                  <Image
                    src={"/images/avatar.png"}
                    height={48}
                    width={48}
                    alt="avatar"
                  />
                  <p className="py-2 px-4 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] bg-[#ECE6F0] text-color-dark-2">
                    {message?.text}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2 justify-end  py-[10px]">
                  <p className="py-2 px-4 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[8px] rounded-bl-[20px] bg-[#625B71] text-white">
                    {message?.text}
                  </p>
                  <Image
                    src={"/images/user_avatar.png"}
                    height={48}
                    width={48}
                    alt="user_avatar"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="py-3 px-6">
        <ChatInput handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatMessages;
