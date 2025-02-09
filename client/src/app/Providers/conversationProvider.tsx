"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { listAllConversationsThunk } from "@/thunks/conversation";

export default function ConversationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(listAllConversationsThunk());
  }, [dispatch]);

  return <>{children}</>;
}
