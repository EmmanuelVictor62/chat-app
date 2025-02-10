import ChatMessages from "@/components/ChatMessages";
import Sidebar from "@/components/Sidebar";
import RootProvider from "./Providers";
import ConversationProvider from "./Providers/conversationProvider";
import DeleteModal from "@/components/DeleteModal";

export default function Home() {
  return (
    <RootProvider>
      <ConversationProvider>
        <div className="flex flex-col h-screen overflow-hidden">
          <div className="flex py-[10px] px-[21px] bg-c shadow-custom-2 flex-shrink-0 ">
            <div className="rounded-xl bg-purple-2 py-[18px] px-[5px] text-[9px] font-medium uppercase text-white">
              CHATBOT
            </div>
          </div>
          <div className="flex gap-6 bg-[#FEF7FF] h-full flex-1 overflow-hidden md:grid md:grid-cols-[350px_1fr] md:gap-6 md:p-8">
            <Sidebar />
            <ChatMessages />
          </div>
          <DeleteModal />
        </div>
      </ConversationProvider>
    </RootProvider>
  );
}
