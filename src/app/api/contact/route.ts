import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  try {
    const { subject, message, from } = await request.json();
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: from,
      to: SMTP_EMAIL,
      subject,
      html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${from}</p>
    `,
    };

    await transport.sendMail(mailOption);

    return NextResponse.json(
      { message: "메세지가 전송되었습니다!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "메세지 전송 실패" }, { status: 500 });
  }
}
