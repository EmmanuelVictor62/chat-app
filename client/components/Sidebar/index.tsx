import React from "react";

import Icon from "../Icon";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden h-full">
      <button className="flex items-center justify-center gap-3  bg-purple-1 rounded-2xl bg-c shadow-custom-3 py-4 px-5 text-sm text-[#21005D]">
        <Icon icon="plusIcon" />
        Conversations
      </button>
      <div className="flex flex-col gap-4 overflow-auto flex-1">
        <button className="flex items-center justify-between py-3 px-4 rounded-2xl bg-[rgba(29,27,32,0.12)] text-[#1D1B20] text-sm hover:bg-purple-1 transition">
          Conversation 1
          <Icon icon="bin" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
