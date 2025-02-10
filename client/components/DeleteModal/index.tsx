"use client";
import React, { useRef } from "react";

import Icon from "../Icon";

import useClickOutside from "@/hooks/useClickOutside";
import { useConversation } from "@/src/app/Providers/conversationProvider";

const DeleteModal: React.FC = ({}) => {
  const {
    isDeleting,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    conversationName,
    handleDeleteConversation,
  } = useConversation();
  const overlayRef = useRef<HTMLDivElement>(null!);

  useClickOutside(overlayRef, handleCloseDeleteModal, false);

  if (!isDeleteModalOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="bg-modal-background flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-auto backdrop-blur-[10px]"
    >
      <div className="bg-white flex flex-col gap-6 items-center py-6 px-8 rounded-3xl w-[400px] ">
        <p className="text-[22px] text-color-dark-1 text-center">
          Are you sure you want to delete {conversationName}?
        </p>
        <div className="flex justify-between w-full gap-4">
          <button
            onClick={handleCloseDeleteModal}
            className="py-[10px] px-6 rounded-full w-full bg-color-light-blue-2 text-color-dark-1 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConversation}
            className="py-[10px] px-6 rounded-full w-full bg-color-red-1 text-white font-medium flex items-center gap-1 justify-center delete-button"
          >
            Delete
            {isDeleting && <Icon icon="loading" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
