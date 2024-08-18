import { NextRequest, NextResponse } from 'next/server';
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create a ReadableStream to handle the streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Call the groq chat completions create method
          const chatCompletion = await groq.chat.completions.create({
            "messages": [
              {
                "role": "user",
                "content": body.prompt || "You are the assistant at a law firm called Raj Gill Law corporation. ",
              }
            ],
            "model": "llama3-8b-8192",
            "temperature": 0.7,
            "max_tokens": 50,
            "top_p": 1,
            "stream": true,
            "stop": null,
          });

          // Stream the response to the client
          for await (const chunk of chatCompletion) {
            const content = chunk.choices[0]?.delta?.content || '';
            controller.enqueue(new TextEncoder().encode(content));
          }
          
          // Close the stream
          controller.close();
        } catch (error) {
          console.error("Error streaming response:", error);
          controller.error(error);
        }
      },
    });

    // Return the streaming response
    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: 'An error occurred while processing the request.' }, { status: 500 });
  }
}
