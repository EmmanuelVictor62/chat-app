"use client";
import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../Icon";
import { chatSlice } from "@/state_manager/selectors";
import { createConversation, getConversation } from "@/slices/chats";
import { getRandomConversationId } from "@/utils/helpers";

const Sidebar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<Dispatch<any>>();
  const { conversations, selectedConversation } = useSelector(chatSlice);

  const handleGetConversation = (conversationId: string) => {
    dispatch(getConversation(conversationId));
  };

  const handleAddConversation = () => {
    const conversationId = getRandomConversationId();
    dispatch(createConversation(conversationId));
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden h-full">
      <button
        className="flex items-center justify-center gap-3  bg-purple-1 rounded-2xl bg-c shadow-custom-3 py-4 px-5 text-sm text-[#21005D]"
        onClick={handleAddConversation}
      >
        <Icon icon="plusIcon" />
        Conversations
      </button>
      <div className="flex flex-col gap-4 overflow-auto flex-1">
        {conversations?.map((conversation, index) => {
          const isSelected = conversation?.id === selectedConversation?.id;

          return (
            <div
              key={index + 1}
              onClick={() => handleGetConversation(conversation?.id)}
              className={`flex items-center justify-between py-3 px-4 rounded-2xl  text-[#1D1B20] text-sm hover:bg-purple-1 transition ${
                isSelected ? "bg-purple-1" : "bg-[rgba(29,27,32,0.12)]"
              }`}
            >
              Conversation {index + 1}
              <button>
                <Icon icon="bin" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
