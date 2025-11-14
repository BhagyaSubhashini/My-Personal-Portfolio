import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST ( request: Request) {
  try {

    const body = await request.json() as ContactRequestBody;
    console.log("Contact form submitted:", body);

    return NextResponse.json({message: 'Message sent successfully'}, {status: 200});
    
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        message: "Failed to send message"
      },
      {
        status: 500
      }
    )
    
  }
}