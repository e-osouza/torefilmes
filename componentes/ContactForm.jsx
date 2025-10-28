"use client";
import { useState } from "react";
import { MoveRight, CheckCircle } from "lucide-react";
import { PatternFormat } from "react-number-format";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setErro(false);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setEnviadoComSucesso(true);
      setForm({ nome: "", email: "", whatsapp: "", tipoProjeto: "" });
    } else {
      setErro(true);
    }

    setEnviando(false);
  }

  // ✅ Se o envio foi bem-sucedido, mostra a mensagem de sucesso no lugar do form
  if (enviadoComSucesso) {
    return (
      <div className="text-center border-1 text-white p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
        <CheckCircle size={60} className="text-[var(--azul)] mx-auto mb-4" />
        <h2 className="text-2xl font-[600] leading-[1.2] mb-2">Mensagem enviada com sucesso!</h2>
        <p className="text-sm text-gray-300">
          Obrigado pelo contato! Nossa equipe retornará em breve para dar vida ao seu projeto.
        </p>
      </div>
    );
  }

  // Formulário padrão
  return (
    <form onSubmit={handleSubmit} className="mx-auto text-white">
      <input
        type="text"
        placeholder="Nome completo"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
        required
        className="w-full mb-3 p-3 bg-black/30 text-white border border-white focus:outline-none rounded-lg backdrop-blur-sm"
      />

      <input
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="w-full mb-3 p-3 bg-black/30 text-white border border-white focus:outline-none rounded-lg backdrop-blur-sm"
      />

      <PatternFormat
        format="(##) #####-####"
        mask="_"
        value={form.whatsapp}
        onValueChange={(values) =>
          setForm({ ...form, whatsapp: values.formattedValue })
        }
        className="w-full mb-3 p-3 bg-black/30 text-white border border-white focus:outline-none rounded-lg backdrop-blur-sm"
        placeholder="Contato (WhatsApp)"
        required
      />

      <div className="border border-white p-5 rounded-lg backdrop-blur-sm bg-black/30">
        <label className="block mb-3 font-semibold">Tipo de projeto:</label>
        {[
          "Vídeo institucional",
          "Filme publicitário",
          "Cobertura de evento",
          "Brand film",
          "Conteúdo digital (Reels, Shorts etc.)",
          "Outro",
        ].map((tipo) => (
          <label key={tipo} className="flex items-center mt-2 text-[13px]">
            <input
              type="radio"
              name="tipoProjeto"
              value={tipo}
              checked={form.tipoProjeto === tipo}
              onChange={(e) =>
                setForm({ ...form, tipoProjeto: e.target.value })
              }
              className="mr-2"
            />
            {tipo}
          </label>
        ))}
      </div>

      <div className="mt-4">
        <label className="flex items-center text-[12px]">
          <input type="checkbox" required className="mr-2" />
          Concordo com a Política de Privacidade e o uso dos meus dados.
        </label>
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="flex gap-2 items-center mx-auto rounded-full border-2 border-white w-fit uppercase font-[600] text-sm text-white px-6 py-1 mt-6 cursor-pointer hover:bg-white/10 transition"
      >
        <MoveRight />
        {enviando ? "Enviando..." : "ENVIAR"}
      </button>

      {erro && (
        <p className="mt-3 text-center text-red-400 text-sm">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </form>
  );
}