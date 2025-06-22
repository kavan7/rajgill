'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatBox from './ChatBox';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-zinc-700 bg-opacity-55 p-3 rounded-full border border-white text-white shadow-lg hover:scale-105 transition-transform"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="relative w-[22rem]">
          <div className=" right-0 w-full h-full">
            <ChatBox />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-black text-lg font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
