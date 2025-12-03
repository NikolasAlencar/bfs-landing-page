"use client";

import "./contato.css";

export default function ContatoPage() {
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
          <p>Av. Paulista, 1636 - Pavmto15 Conj 4 Sala 1504 - Bela Vista - São Paulo, SP</p>
          <a href="https://www.google.com/maps" target="_blank">
            Ver no Mapa
          </a>
        </div>
      </section>

      {/* Formulário */}
      <section className="contact-form container">
        <h2>Envie uma Mensagem</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
          </div>

          <input type="text" placeholder="Assunto" required />

          <textarea placeholder="Mensagem" rows={6} required />

          <button type="submit" className="btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </main>
  );
}
