"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import ChatInput from "../ChatInput";
import Icon from "../Icon";

import { chatSlice } from "@/state_manager/selectors";
import { formattedDateTime } from "@/utils/helpers";
import { CreateMessageInput, MessageSenderEnum } from "@/types/conversation";
import { addMessageToConversation } from "@/slices/chats";
import { createMessageService } from "@/services/conversation";
import { useConversation } from "@/src/app/Providers/conversationProvider";

const ChatMessages: React.FC = () => {
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const { selectedConversation, isLoadingConversations } =
    useSelector(chatSlice);
  const { handleToggleSidebar } = useConversation();

  const dispatch = useDispatch<Dispatch<any>>();
  const scrollerRef = useRef<HTMLDivElement>(null!);

  const handleSendMessage = async (message: string) => {
    try {
      const conversationId = selectedConversation?.id;

      const messagePayload: CreateMessageInput = {
        text: message,
        sender: MessageSenderEnum.USER,
        conversationId,
      };

      const botMessagePayload: CreateMessageInput = {
        text: "This is an AI generated message",
        sender: MessageSenderEnum.BOT,
        conversationId,
      };

      await createMessageService(messagePayload);
      dispatch(addMessageToConversation(messagePayload));
      setIsBotTyping(true);

      setTimeout(() => {
        setIsBotTyping(false);
        dispatch(addMessageToConversation(botMessagePayload));
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [selectedConversation, isBotTyping]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden md:bg-white md:rounded-[28px]">
      <div className="flex items-center gap-3 justify-between border-y border-color-grey-1 py-2 px-4 md:m-0 mt-[29px] md:border-gray-200 md:border-b md:px-5 md:border-y-0">
        <div className="flex items-center gap-3 justify-start">
          <Image
            src={"/images/avatar.png"}
            height={48}
            width={48}
            alt="avatar"
          />
          <p className="text-[#1D1B20]">Chatbot</p>
        </div>
        <button
          onClick={handleToggleSidebar}
          className="flex items-center md:hidden"
        >
          <Icon icon="nav" />
        </button>
      </div>

      {!isLoadingConversations ? (
        <div className="flex flex-1 flex-col gap-3 pt-5 pb-3 px-5 overflow-auto h-full custom-scrollbar">
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

          {isBotTyping && (
            <div className="flex items-center gap-2 py-[10px] justify-start">
              <Image
                src={"/images/avatar.png"}
                height={48}
                width={48}
                alt="avatar"
              />
              <div className="py-2 px-4 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] bg-[#ECE6F0] ">
                <Icon icon="typing" />
              </div>
            </div>
          )}

          <div ref={scrollerRef}></div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Icon icon="loading" />
        </div>
      )}

      <div className="py-3 px-5 md:px-6">
        <ChatInput
          disabled={isBotTyping}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatMessages;
