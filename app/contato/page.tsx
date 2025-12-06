"use client";

import { useState, useCallback } from "react";
import "./contato.css";

import { Modal } from "@/components/Modal/Modal";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";

import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setModal({
        open: true,
        type: "success",
        message: "Sua mensagem foi enviada com sucesso!",
      });
      setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    } else {
      setModal({
        open: true,
        type: "error",
        message: "Ocorreu um erro ao enviar sua mensagem.",
      });
    }
  };

  const contatos = [
    {
      icon: <IoLogoWhatsapp size={30} />,
      title: "WhatsApp",
      desc: "Fale diretamente com um especialista.",
      link: "https://wa.me/5511940770068",
      label: "Enviar Mensagem",
    },
    {
      icon: <IoLogoInstagram size={30} />,
      title: "Instagram",
      desc: "Acompanhe novidades, atualizações e conteúdo exclusivo.",
      link: "https://www.instagram.com/businessfastsolution/",
      label: "Visitar Perfil",
    },
    {
      icon: <AiOutlineMail size={30} />,
      title: "Email",
      desc: "Envie sua solicitação e retornaremos rapidamente.",
      link: "mailto:businessfastsolutions04@gmail.com",
      label: "Enviar Email",
    },
    {
      icon: <IoLogoLinkedin size={30} />,
      title: "LinkedIn",
      desc: "Conecte-se conosco para oportunidades e relações profissionais.",
      link: "https://www.linkedin.com/in/nikolas-alencar-234474182/",
      label: "Acessar LinkedIn",
    },
    {
      icon: <CiLocationOn size={30} />,
      title: "Endereço",
      desc: "Av. Paulista, 1636 – Bela Vista – São Paulo, SP",
      link: "https://www.google.com/maps",
      label: "Ver no Mapa",
    },
  ];

  return (
    <main className="page-container">
      <Modal
        open={modal.open}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, open: false })}
      />

      <section className="contact-hero">
        <p>Estamos prontos para atender sua empresa com agilidade e segurança.</p>
      </section>

      <section className="contact-cards container">
        {contatos.map((item, i) => (
          <div className="contact-card" key={i}>
            <h3>
              {item.icon}
              {item.title}
            </h3>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              {item.label}
            </a>
          </div>
        ))}
      </section>

      <section className="contact-form container">
        <h2>Envie uma Mensagem</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              value={form.nome}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="assunto"
            placeholder="Assunto"
            required
            value={form.assunto}
            onChange={handleChange}
          />

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={6}
            required
            value={form.mensagem}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Enviar Mensagem"}
          </button>
        </form>
      </section>
    </main>
  );
}
