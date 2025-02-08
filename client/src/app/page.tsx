"use client";
import ChatMessages from "@/components/ChatMessages";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const handleSendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex py-[10px] px-[21px] bg-c shadow-custom-2 flex-shrink-0">
        <div className="rounded-xl bg-[#65558F] py-[18px] px-[5px] text-[9px] font-medium uppercase text-white">
          CHATBOT
        </div>
      </div>
      <div className="grid grid-cols-[350px_1fr] gap-6 p-8 bg-[#FEF7FF] h-full flex-1">
        <Sidebar />
        <ChatMessages handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
