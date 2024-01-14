require('dotenv').config();
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/elements/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async (request: Request) => {
  const { name, message, email } = await request.json();

  const fromEmail = process.env.RESEND_FROM as string;
  const toEmail = process.env.RESEND_TO as string;

  try {
    await resend.sendEmail({
      from: fromEmail,
      to: toEmail,
      subject: `Message from ${name} — ${email} @Portfolio`,
      react: EmailTemplate({
        name,
        message,
        email,
      }),
    });

    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }

    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
};

export { POST };
