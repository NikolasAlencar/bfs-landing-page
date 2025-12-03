"use client";

import { useTheme } from "@/context/ThemeContext";
import "./quem-somos.css";
import Image from "next/image";

export default function QuemSomosPage() {
  const { theme } = useTheme();

  const sobre = [
    {
      icon: "missao",
      title: "Missão",
      desc: "Oferecer soluções empresariais com agilidade, precisão e transparência, garantindo segurança e confiabilidade aos nossos clientes.",
    },
    {
      icon: "valores",
      title: "Valores",
      desc: "Compromisso com o cliente, ética, segurança, inovação e excelência em atendimento.",
    },
    {
      icon: "visao",
      title: "Visão",
      desc: "Ser referência no setor paralegal e administrativo, entregando um serviço rápido e inteligente para empresas de todos os portes.",
    },
  ];

  return (
    <main className="page-container">
      {/* Hero Interno */}
      <section className="page-hero">
        <p>
          A BFS oferece soluções empresariais com agilidade, precisão e
          segurança, auxiliando empresas com paralegal e na legalização,
          certificação digital e apoio administrativo.
        </p>
      </section>

      {/* Seção institucional */}
      <section className="about-section container">
        <div className="about-text">
          <h2>Construindo Segurança para o Seu Negócio</h2>
          <p>
            A <strong>Business Fast Solutions</strong> nasceu com o propósito de
            simplificar processos empresariais e garantir que empreendedores
            possam focar no crescimento do negócio enquanto cuidamos de toda a
            parte burocrática.
          </p>

          <p>
            Com experiência sólida em legalização empresarial, emissão de
            certidões, certificação digital e serviços administrativos,
            oferecemos atendimento rápido, seguro e transparente.
          </p>
        </div>

        <div className="about-image">
          <Image
            key={theme}
            src={
              theme === "dark"
                ? "/img/bfs-logo-sem-fundo-branco.png"
                : "/img/bfs-logo-sem-fundo-preto.png"
            }
            alt="bfs logo"
            className="quem-somos-image"
            width={650}
            height={420}
          />
        </div>
      </section>

      {/* Missão / Valores */}
      <section className="mv-container container">
        {sobre.map((item, index) => (
          <div className="mv-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Dados oficiais (CNPJ) */}
      <section className="company-section container">
        <h2>Informações da Empresa</h2>
        <ul>
          <li>
            <strong>Razão Social:</strong> BUSINESS FAST SOLUTION LTDA
          </li>
          <li>
            <strong>CNPJ:</strong> 51.092.124/0001-30
          </li>
          <li>
            <strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada
          </li>
          <li>
            <strong>Endereço:</strong> Av. Dr. Arnaldo, 333 – São Paulo, SP
          </li>
        </ul>
      </section>
    </main>
  );
}
