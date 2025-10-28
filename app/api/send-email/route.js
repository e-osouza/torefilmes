import nodemailer from "nodemailer";

export async function POST(req) {
  const { nome, email, whatsapp, tipoProjeto } = await req.json();

  // Configure o transportador de e-mails (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // seu e-mail
      pass: process.env.EMAIL_PASS, // senha ou app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulário Tore Filmes" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO || process.env.EMAIL_USER,
      subject: `Novo contato de ${nome}`,
      html: `
        <h3>Novo contato recebido!</h3>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>WhatsApp:</b> ${whatsapp}</p>
        <p><b>Tipo de projeto:</b> ${tipoProjeto}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return new Response(JSON.stringify({ error: "Erro ao enviar e-mail" }), { status: 500 });
  }
}