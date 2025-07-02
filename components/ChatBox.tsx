import { useState } from 'react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat?type=comp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }), 
      });

      const data: { message?: { content: string }; error?: string } = await res.json();

      const botMessage: Message = {
        sender: 'bot',
        text: data.message?.content || data.error || 'Sorry, something went wrong.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Failed to connect to server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded p-4 shadow bg-black md:bg-opacity-70 bg-opacity-90">
       <div className='bg-white p-2 rounded-full bg-opacity-35 '> <h1 className=' text-neutral-300 text-center tracking-wider '>This chat is not Legal Advice</h1></div>
      <div className="h-64 overflow-y-auto mb-4 p-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded text-sm ${
                msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading &&   <div className="text-gray-500 text-4xl flex gap-1 items-center">
    <span></span>
    <span className="animate-bounce [animation-delay:0ms] rounded-full">.</span>
    <span className="animate-bounce [animation-delay:200ms]  rounded-full">.</span>
    <span className="animate-bounce [animation-delay:400ms]  rounded-full">.</span>
  </div>}
      </div>
      <div className="flex gap-2">
      <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // prevents adding newline
      sendMessage();
    }
  }}
  className="flex-1 border px-3 py-2 rounded"
          placeholder="What services do you provide?"
        />
        <button
          onClick={sendMessage}
          className="bg-zinc-600 bg-opacity-60 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
