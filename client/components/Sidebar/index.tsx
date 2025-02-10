"use client";
import React, { useRef } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../Icon";
import { useConversation } from "@/src/app/Providers/conversationProvider";

import { chatSlice } from "@/state_manager/selectors";
import { createConversation, getConversation } from "@/slices/chats";
import { createConversationService } from "@/services/conversation";
import useClickOutside from "@/hooks/useClickOutside";

const Sidebar: React.FC = () => {
  const {
    conversations,
    selectedConversation,
    isLoadingConversations,
    loading,
  } = useSelector(chatSlice);
  const { handleOpenDeleteModal, handleToggleSidebar, toggleSidebar } =
    useConversation();

  const dispatch = useDispatch<Dispatch<any>>();
  const overlayRef = useRef<HTMLDivElement>(null!);

  useClickOutside(overlayRef, handleToggleSidebar, false);

  const isMobileScreen = window.innerWidth < 768;

  const handleGetConversation = (conversationId: string) => {
    dispatch(getConversation(conversationId));
    handleToggleSidebar();
  };

  const handleAddConversation = async () => {
    try {
      const { data } = await createConversationService();

      if (data) dispatch(createConversation(data?.id));

      handleToggleSidebar();
    } catch (error) {
      throw error;
    }
  };

  if (!toggleSidebar && isMobileScreen) return null;

  return (
    <div
      className={`${
        toggleSidebar ? "flex" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 bg-modal-background backdrop-blur-[20px] w-full md:flex md:static md:bg-inherit md:backdrop-blur-0`}
      ref={overlayRef}
    >
      <div className="flex flex-col bg-color-grey-2 py-6 px-4 gap-4 overflow-hidden h-full w-[85%] rounded-r-[28px] md:w-full md:rounded-r-none md:py-0 md:px-0 md:bg-inherit">
        <button
          className="flex items-center justify-center gap-3  bg-purple-1 rounded-2xl bg-c shadow-custom-3 py-4 px-5 text-sm text-[#21005D]"
          onClick={handleAddConversation}
        >
          {loading ? (
            <Icon icon="loading" className="delete-button" />
          ) : (
            <Icon icon="plusIcon" />
          )}
          Conversations
        </button>
        {!isLoadingConversations ? (
          <div className="flex flex-col gap-4 overflow-auto flex-1">
            {conversations?.map((conversation, index) => {
              const isSelected = conversation?.id === selectedConversation?.id;

              return (
                <div
                  key={index + 1}
                  onClick={() => handleGetConversation(conversation?.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded-2xl  text-[#1D1B20] text-sm transition ${
                    isSelected
                      ? "bg-color-light-blue-3"
                      : "bg-color-light-blue-2"
                  }`}
                >
                  Conversation {index + 1}
                  <button
                    onClick={() =>
                      handleOpenDeleteModal(
                        `Conversation ${index + 1}`,
                        conversation?.id
                      )
                    }
                  >
                    <Icon icon="bin" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Icon icon="loading" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
