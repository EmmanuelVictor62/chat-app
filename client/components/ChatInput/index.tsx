import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Icon from "../Icon";

type FormValues = {
  message: string;
};

interface ChatInputProps {
  handleSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ handleSendMessage }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data.message.trim()) return;
    handleSendMessage(data.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-2 bg-[#f5f5fa] border border-[#ccc] rounded-full px-4 py-2"
      style={{ boxShadow: "0px 2px 5px rgba(23, 26, 31, 0.1)" }}
    >
      <input
        {...register("message")}
        type="text"
        placeholder="Type a message..."
        className="flex-1 bg-transparent border-none outline-none text-sm text-[#171a1f]"
      />

      <button
        type="submit"
        className="text-[#171a1f] hover:text-[#65558f] transition-all"
      >
        <Icon icon="paperPlane" />
      </button>
    </form>
  );
};

export default ChatInput;
