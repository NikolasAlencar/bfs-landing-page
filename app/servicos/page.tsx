"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import "./servicos.css";

export default function ServicosPage() {
  const { theme } = useTheme();

  const servicos = [
    {
      icon: "escritorio",
      title: "Legalização Empresarial",
      desc: "Abertura, alterações, regularização completa e reativação de empresas de todos os portes.",
    },
    {
      icon: "certificacao",
      title: "Certificação Digital",
      desc: "Emissão de e-CPF, e-CNPJ, certificados em nuvem e orientação completa sobre uso.",
    },
    {
      icon: "livro",
      title: "Livros Societários",
      desc: "Abertura, organização, escrituração e legalização de livros obrigatórios.",
    },
    {
      icon: "certidao",
      title: "Emissão de Certidões",
      desc: "Emitimos certidões federais, estaduais, municipais e específicas de qualquer órgão.",
    },
    {
      icon: "documento",
      title: "Gestão Documental",
      desc: "Protocolo, acompanhamento, organização e digitalização de documentos empresariais.",
    },
    {
      icon: "suporte",
      title: "Apoio Administrativo",
      desc: "Atendimento personalizado com execução rápida de demandas burocráticas do dia a dia.",
    },
  ];

  return (
    <main className="page-container">
      {/* HERO INTERNO */}
      <section className="page-hero">
        <p>
          Soluções completas em legalização, certificação digital e apoio administrativo,
          com agilidade, precisão e transparência.
        </p>
      </section>

      {/* GRID DE SERVIÇOS */}
      <section className="services-list container">
        {servicos.map((item, index) => (
          <div className="service-card" key={index}>
            {/* <Image
              src={`/icons/${item.icon}.svg`}
              width={48}
              height={48}
              alt={item.title}
            /> */}

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="services-cta container">
        <h2>Precisa de ajuda com seu processo?</h2>
        <p>
          Entre em contato conosco e tenha suporte rápido, seguro e personalizado
          para qualquer demanda paralegal.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/5511940770068"
            className="btn-primary"
          >
            Falar no WhatsApp
          </a>

          <a
            href="mailto:businessfastsolutions04@gmail.com"
            className="btn-secondary"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </main>
  );
}
