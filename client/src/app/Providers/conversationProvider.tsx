"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import {
  deleteConversationThunk,
  listAllConversationsThunk,
} from "@/thunks/conversation";
import { chatSlice } from "@/state_manager/selectors";
import { getConversation } from "@/slices/chats";

const ConversationContext = createContext<{
  isDeleting: boolean;
  isDeleteModalOpen: boolean;
  conversationName: string;
  conversationId: string;
  handleCloseDeleteModal: () => void;
  handleOpenDeleteModal: (name: string, id: string) => void;
  handleDeleteConversation: () => void;
} | null>(null);

export default function ConversationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<Dispatch<any>>();
  const { conversations } = useSelector(chatSlice);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [conversationName, setConversationName] = useState<string>("");
  const [conversationId, setConversationId] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const handleFetchConversations = async () => {
      await dispatch(listAllConversationsThunk());
      if (conversations.length > 0) {
        dispatch(getConversation(conversations[0].id));
      }
    };
    handleFetchConversations();
  }, []);

  const handleOpenDeleteModal = (name: string, id: string) => {
    setConversationName(name);
    setConversationId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setConversationName("");
  };

  const handleDeleteConversation = async () => {
    try {
      setIsDeleting(true);

      await dispatch(deleteConversationThunk(conversationId));

      setIsDeleting(false);
      setIsDeleteModalOpen(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <ConversationContext.Provider
      value={{
        isDeleting,
        isDeleteModalOpen,
        handleCloseDeleteModal,
        handleOpenDeleteModal,
        conversationName,
        conversationId,
        handleDeleteConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};
