"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { listAllConversationsThunk } from "@/thunks/conversation";
import { chatSlice } from "@/state_manager/selectors";
import { getConversation } from "@/slices/chats";

export default function ConversationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<Dispatch<any>>();
  const { conversations } = useSelector(chatSlice);

  useEffect(() => {
    const handleFetchConversations = async () => {
      await dispatch(listAllConversationsThunk());
      if (conversations) {
        const firstConversationId = conversations[0]?.id;
        dispatch(getConversation(firstConversationId));
      }
    };
    handleFetchConversations();
  }, [dispatch, conversations]);

  return <>{children}</>;
}
