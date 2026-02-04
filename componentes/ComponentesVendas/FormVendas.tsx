"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { PatternFormat } from "react-number-format";

type FormVendasState = {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
};

type Status = "idle" | "loading" | "success" | "error";

const FormVendas = () => {
  const [form, setForm] = useState<FormVendasState>({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const enviando = status === "loading";
  const enviadoComSucesso = status === "success";
  const erro = status === "error";

  // 🔧 exemplo simples para teste: transforma "(92) 99999-9999" em "+5592999999999"
  const formatWhatsappE164 = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    return `+55${digits}`;
  };

  // ✅ pega UTMs e URL atual (para teste, sem depender de outro hook/estado)
  const getSourceData = () => {
    if (typeof window === "undefined") {
      return {
        utm_source: "",
        utm_campaign: "",
        utm_medium: "",
        utm_term: "",
        utm_content: "",
        page_url: "",
      };
    }

    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      page_url: window.location.href,
    };
  };

  const canSubmit =
    form.nome.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.whatsapp.trim().length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setMessage("");

    const sourceData = getSourceData();

    // ✅ atualizado para LP TORE VENDAS
    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "LP - TORE VENDAS",

        // campos do FormVendas:
        name: form.nome.trim(),
        email: form.email.trim().toLowerCase(),
        personal_phone: formatWhatsappE164(form.whatsapp),
        company_name: form.empresa.trim(),

        // UTMs
        traffic_source: sourceData.utm_source,
        traffic_campaign: sourceData.utm_campaign,
        traffic_medium: sourceData.utm_medium,

        // custom fields (se existirem no RD)
        cf_utm_campaign: sourceData.utm_campaign,
        cf_utm_medium: sourceData.utm_medium,
        cf_utm_source: sourceData.utm_source,
        cf_utm_term: sourceData.utm_term,
        cf_utm_content: sourceData.utm_content,
        cf_url_de_conversao: sourceData.page_url,
      },

      // tags e source atualizados
      tags: ["tore-vendas"],
      source: "landing-tore-vendas",
    };

    try {
      const res = await fetch(
        "https://api.rd.services/platform/conversions?api_key=MHnWDjBYARQKdwUsfZRbjtVmPEyoHnSqtgFz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      setStatus("success");
      setForm({ nome: "", email: "", whatsapp: "", empresa: "" });

    } catch {
      setStatus("error");
      setMessage("Erro ao enviar formulário. Tente novamente.");
    }
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="mb-6 flex justify-center">
        <img
          src="/bagde-tore-filmes.svg"
          alt="Tore Filmes"
          className="h-12 w-auto"
        />
      </div>

      {/* Título */}
      <h2 className="font-bold text-center text-xl sm:text-2xl leading-tight mb-8">
        Preencha o formulário e receba uma proposta
        <br />
        <span className="font-normal text-base sm:text-lg">
          no formato ideal para sua demanda.
        </span>
      </h2>

      {/* ✅ Sucesso (no lugar do form) */}
      {enviadoComSucesso ? (
        <div className="text-center text-white p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto border border-white/20">
          <CheckCircle size={60} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold leading-tight mb-2">
            Mensagem enviada com sucesso!
          </h3>
          <p className="text-sm text-gray-300">
            Obrigado pelo contato! Nossa equipe retornará em breve com uma
            proposta no formato ideal.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome:"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
              className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm focus:border-white focus:outline-none"
            />

            <input
              type="email"
              placeholder="E-mail:"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm focus:border-white focus:outline-none"
            />

            <PatternFormat
              format="(##) #####-####"
              mask="_"
              value={form.whatsapp}
              onValueChange={(values) =>
                setForm({ ...form, whatsapp: values.formattedValue })
              }
              placeholder="Contato(WhatsApp):"
              required
              className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm focus:border-white focus:outline-none"
            />

            <input
              type="text"
              placeholder="Empresa"
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm focus:border-white focus:outline-none"
            />
          </div>

          {/* LGPD */}
          <label className="flex items-start gap-2 text-[12px] text-gray-200 max-w-2xl mx-auto">
            <input
              type="checkbox"
              required
              className="mt-[2px]"
              aria-label="Concordo com a Política de Privacidade"
            />
            <span>
              Concordo com a Política de Privacidade e o uso dos meus dados.
            </span>
          </label>

          {/* Botão */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={enviando}
              className="uppercase cursor-pointer flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition hover:opacity-90 disabled:opacity-60"
            >
              <img src="/arrow-right.svg" alt="" className="h-7 w-7" />
              <span>{enviando ? "Enviando..." : "Enviar"}</span>
            </button>
          </div>

          {erro && (
            <p className="text-center text-red-400 text-sm">
              {message || "Erro ao enviar. Tente novamente."}
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default FormVendas;
