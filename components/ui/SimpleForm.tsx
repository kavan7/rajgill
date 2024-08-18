"use client";

import { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "./aceternityinput";
import { Progress } from "./progress";

export function SimpleForm() {
  const placeholders = [
    "Divorce",
    "Property Dispute",
    "Family Lawyer",
    "Legal Advice",
  ];

  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([]); // State to hold chat messages
  const [value, setValue] = useState<string>(""); // State to hold input value
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Handle input change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const formatBotResponse = (text: string) => {
    // Basic formatting by converting raw text into HTML elements
    return text
      .replace(/###\s*(.*)/g, "<h3>$1</h3>") // Convert ### into <h3>
      .replace(/####\s*(.*)/g, "<h4>$1</h4>") // Convert #### into <h4>
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Convert **text** into <b>
      .replace(/- (.*?)/g, "<li>$1</li>") // Convert - items into <li>
      .replace(/\n/g, "<br>"); // Convert newlines into <br>
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!value.trim()) return; // Prevent empty submissions

    // Add user message to chat and clear previous bot messages
    setMessages([{ type: "user", text: formatBotResponse(value) }]);
    
    // Clear input field
    setValue("");

    setLoading(true);
    setError(null);

    try {
      // Make API request to fetch bot response with streaming
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: value }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let botResponse = "";

      // Read streaming data
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value);
        botResponse += chunk;

        // Replace previous bot response with the new one
        setMessages((prevMessages) => {
          return [...prevMessages.filter(msg => msg.type !== "bot"), { type: "bot", text: botResponse }];
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to get a response from the chatbot.");
    } finally {
      setLoading(false);
    }
  };
  const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
     <div className="flex flex-col items-center justify-center h-[40rem]  ">
          {/* Chat Messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                msg.type === "user" ? "bg-black-100 text-right text-white rounded-full" : "bg-white rounded-full text-black-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p><Progress value={progress} className="w-[60%]" /></p>}
          {error && <p className="text-red-500">{error}</p>}
     

       
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={onChange}
          onSubmit={handleSubmit}  // This triggers the fetch request
        />
   </div>
  );
}
