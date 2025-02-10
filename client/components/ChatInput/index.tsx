import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Icon from "../Icon";

type FormValues = {
  message: string;
};

interface ChatInputProps {
  disabled: boolean;
  handleSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  disabled,
  handleSendMessage,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { touchedFields },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.message.trim()) return;
    handleSendMessage(data.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex items-center justify-between gap-2 bg-color-light-blue-1  rounded-full px-5 py-4  ${
        touchedFields.message ? "border-color-dark-3 border" : ""
      }  `}
    >
      <input
        {...register("message")}
        type="text"
        autoFocus
        disabled={disabled}
        placeholder="Reply to Chatbot..."
        className="flex-1 bg-transparent border-none outline-none text-sm text-[#171a1f] "
      />

      <button type="submit">
        <Icon icon="paperPlane" />
      </button>
    </form>
  );
};

export default ChatInput;
