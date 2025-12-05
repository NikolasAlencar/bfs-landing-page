"use client";

import { useState } from "react";
import "./contato.css";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Erro ao enviar mensagem.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <main className="page-container">
      {/* Hero Interno */}
      <section className="contact-hero">
        <p>
          Estamos prontos para atender sua empresa com agilidade e segurança.
        </p>
      </section>

      {/* Cards de Contato */}
      <section className="contact-cards container">
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <p>Fale diretamente com um especialista.</p>
          <a href="https://wa.me/5511940770068" target="_blank">
            Enviar Mensagem
          </a>
        </div>

        <div className="contact-card">
          <h3>Instagram</h3>
          <p>Acompanhe novidades, atualizações e conteúdo exclusivo.</p>
          <a
            href="https://www.instagram.com/businessfastsolution/"
            target="_blank"
          >
            Visitar Perfil
          </a>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>Envie sua solicitação e retornaremos rapidamente.</p>
          <a href="mailto:businessfastsolutions04@gmail.com">Enviar Email</a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>Conecte-se conosco para oportunidades e relações profissionais.</p>
          <a
            href="https://www.linkedin.com/in/nikolas-alencar-234474182/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <h3>Endereço</h3>
          <p>Av. Paulista, 1636 - Bela Vista - São Paulo, SP</p>
          <a href="https://www.google.com/maps" target="_blank">
            Ver no Mapa
          </a>
        </div>
      </section>

      {/* Formulário */}
      <section className="contact-form container">
        <h2>Envie uma Mensagem</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <input
              type="email"
              placeholder="Seu email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <input
            type="text"
            placeholder="Assunto"
            required
            value={form.assunto}
            onChange={(e) => setForm({ ...form, assunto: e.target.value })}
          />

          <textarea
            placeholder="Mensagem"
            rows={6}
            required
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </section>
    </main>
  );
}
