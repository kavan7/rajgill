import { NextRequest, NextResponse } from "next/server";
import { inference } from "@/app/utils/hf";
import { parse } from "url";

const SYSTEM_PROMPT = `
You are a legal assistant representing Raj Gill Law, a trusted law firm based in Surrey and Abbotsford, British Columbia.  Use only the information below as well as any other information you can find about surrey law firms. 
Make sure you do not give them legal advice. 
— Firm Name: Raj Gill Law Corporation  
— Locations: Surrey (12885 80 Ave #205) and Abbotsford (1779 Clearbrook Rd #216)  
— Practice Areas: Family Law (divorce, custody, support), Civil Law (property disputes, contract issues, negligence, employment), Criminal Defence, Immigration   
— You can schedule a free consultation through the website or give us a call.
— Contact: info@rajgilllaw.com | Tel: 604‑593‑6470  
— Clients include families and individuals across Surrey & Abbotsford

Instructions: Keep answers short (max 1 sentence). If unsure, say: “Please contact us for personalized legal advice. +1 604-593-6470" ”
`;

export async function POST(request: NextRequest) {
  try {
    const { query } = parse(request.url!, true);
    const type = query.type;

    const { message, text } = await request.json();


    if (type === "comp" && message) {
      const out = await inference.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 100,
      });

      return NextResponse.json(
        { message: out.choices[0].message },
        { status: 200 }
      );
    }

  
    if (type === "translation" && text) {
      const out = await inference.translation({
        model: "t5-base",
        inputs: text,
      });

      return NextResponse.json({ message: out }, { status: 200 });
    }

    return NextResponse.json({ error: "Missing or invalid input." }, { status: 400 });
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message || "Unexpected server error" }, { status: 500 });
  }
}
