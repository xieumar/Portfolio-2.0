import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Configure SMTP transporter (example with Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'xieumar@gmail.com',
      subject: `New message from ${name} via Portfolio`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
