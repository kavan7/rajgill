"use client";
import { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "./aceternityinput";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

 const placeholders = [
    "Divorce",
    "Property Dispute",
    "Family Lawyer",
    "Legal Advice",
  ];
export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(1); // Initially show 5 FAQs
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch the FAQ data from the JSONL file
    fetch("/training_with_messages.jsonl")
      .then((response) => response.text())
      .then((text) => {
        const jsonlArray = text.split("\n").filter(Boolean).map((line) => JSON.parse(line));

        // Map the parsed data to our FAQItem structure
        const parsedFaqs: FAQItem[] = jsonlArray.map((item: any, index: number) => ({
          id: index + 1,
          question: item.messages[0].client_query,
          answer: item.messages[0].assistant_response,
        }));

        // Set the parsed FAQs into state
        setFaqs(parsedFaqs);
        setFilteredFaqs(parsedFaqs); // Initialize filtered FAQs with all data
      })
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  useEffect(() => {
    // Filter FAQs based on the search term
    if (searchTerm === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
    // Reset visible count when search term changes
    setVisibleCount(1);
  }, [searchTerm, faqs]);

  // Function to load more FAQs
  const loadMoreFaqs = () => {
    setVisibleCount((prevCount) => prevCount + 1); // Show 5 more FAQs each time
  };

  return (
    <div style={containerStyle}>
      <h1 className="text-center tracking-widest mb-10 underline underline-offset-4">FREQUENTLY ASKED QUESTIONS</h1>
      
      <div className="mb-5">
      <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e) => setSearchTerm(e.target.value)}
           // This triggers the fetch request
           
         
        />
        </div>
    

      {/* FAQ List */}
      <div>
        {filteredFaqs.slice(0, visibleCount).map((faq) => (
          <div key={faq.id} className=" flex flex-col items-center">
           
            <div className="absolute dark:bg-black bg-white h-60 w-60 lg:h-40  md:h-40 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between">
            <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredFaqs.length && (
        <button onClick={loadMoreFaqs} style={buttonStyle}>
          Load More
        </button>
      )}
    </div>
  );
}

// Styles for the components
const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
};

const searchInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #ddd",
};

const faqStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "16px",
  marginBottom: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const buttonStyle: React.CSSProperties = {
  display: "block",
  margin: "20px auto",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
