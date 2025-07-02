// components/StickyChatIcon.tsx
"use client";


import Image from "next/image";

export default function StickyChatIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed flex bg-zinc-900 bg-opacity-70 flex-fow bottom-6 right-6 z-50 bg-transparent text-white p-3 rounded-full shadow-lg hover:scale-125 transition-transform"
      aria-label="Chat"
    >
       <Image src="chat.svg" width={74} height={12} alt="chat"/>
   
    </button>
  );
}
