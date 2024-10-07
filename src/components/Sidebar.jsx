"use client"
import { useState } from "react";


const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-[#f0f4f9] p-4  min-h-screen fixed top-0 left-0 z-20">
      <div className="mt-4">
        <img
          src="/menu_icon.png"
          className="w-8 cursor-pointer ml-2"
          alt="menu-icon"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="flex items-center gap-2 mt-12 p-3 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer">
          <img src="/plus_icon.png" className="w-6" alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <div className="flex flex-col mt-8 animate-fadeIn">
            <p className="mt-8 mb-4 text-sm">Recent</p>
            <div className="flex items-center gap-2 p-2 pr-10 bg-transparent rounded-full cursor-pointer hover:bg-[#e2e6eb]">
              <img src="/message_icon.png" className="w-6" alt="message icon" />
              <p className="text-black">Sample Prompt 1...</p>
            </div>
            <div className="flex items-center gap-2 p-2 pr-10 bg-transparent rounded-full cursor-pointer hover:bg-[#e2e6eb]">
              <img src="/message_icon.png" className="w-6 text-black" alt="message icon" />
              <p className="text-black">Sample Prompt 2...</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#e2e6eb]">
          <img src="/question_icon.png" className="w-6" alt="question icon" />
          {extended ? <p>Help Desk</p> : null}
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#e2e6eb]">
          <img src="/history_icon.png" className="w-6" alt="history icon" />
          {extended ? <p>History</p> : null}
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#e2e6eb]">
          <img src="/setting_icon.png" className="w-6" alt="settings icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;     

