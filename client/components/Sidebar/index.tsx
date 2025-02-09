"use client";
import React from "react";

import Icon from "../Icon";
import { useSelector } from "react-redux";
import { chatSlice } from "@/state_manager/selectors";

const Sidebar: React.FC = () => {
  const { conversations } = useSelector(chatSlice);

  return (
    <div className="flex flex-col gap-4 overflow-hidden h-full">
      <button className="flex items-center justify-center gap-3  bg-purple-1 rounded-2xl bg-c shadow-custom-3 py-4 px-5 text-sm text-[#21005D]">
        <Icon icon="plusIcon" />
        Conversations
      </button>
      <div className="flex flex-col gap-4 overflow-auto flex-1">
        {conversations?.map((conversation, index) => {
          return (
            <div
              key={index + 1}
              className="flex items-center justify-between py-3 px-4 rounded-2xl bg-[rgba(29,27,32,0.12)] text-[#1D1B20] text-sm hover:bg-purple-1 transition"
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
