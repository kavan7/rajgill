"use client";

import { PlaceholdersAndVanishInput } from "./aceternityinput";

export function SimpleForm() {
  const placeholders = [
    "Divorce",
    "Property Dispute",
    "Family Lawyer",
    "Legal Advice",
    
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=" flex flex-col justify-center  items-center px-4">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
