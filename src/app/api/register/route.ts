import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, productInterest } = body;
    console.log("Received data:", body);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Đăng ký mới từ ${fullName}`,
      html: `
        <h3>Thông tin đăng ký</h3>
        <p><strong>Họ tên:</strong> ${fullName}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Quan tâm:</strong> ${productInterest}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
