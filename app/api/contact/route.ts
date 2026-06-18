import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.SMTP_RECEIVING_EMAIL,
            subject: `Portfolio Message from ${name.toUpperCase()}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("SMTP Transmission Error:", error);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}