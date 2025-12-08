import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, assunto, mensagem, captchaToken } = await req.json();

    // 1️⃣ VALIDAR RECAPTCHA
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const data = await captchaRes.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, error: "Captcha inválido" },
        { status: 400 }
      );
    }

    // 2️⃣ Enviar email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contato BFS" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de contato: ${assunto}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Erro ao enviar email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
