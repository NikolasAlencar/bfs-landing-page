"use client";

import "./servicos.css";

import { IoBusinessSharp } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { LuFolderCog } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiBadgeCheck } from "react-icons/hi";
import { JSX } from "react";

export default function ServicosPage() {
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

  const icons: Record<string, JSX.Element> = {
    escritorio: <IoBusinessSharp size={30} />,
    certificacao: <HiBadgeCheck size={30} />,
    livro: <PiNotebookBold size={30} />,
    certidao: <MdOutlinePictureAsPdf size={30} />,
    documento: <LuFolderCog size={30} />,
    suporte: <RiCustomerService2Fill size={30} />,
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <p>
          Soluções completas para empresas com agilidade, precisão e
          transparência.
        </p>
      </section>

      <section className="services-list container">
        {servicos.map((item, index) => (
          <div className="service-card" key={index}>
            <h3>
              <div className="service-icon">{icons[item.icon]}</div>
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="services-cta container">
        <h2>Precisa de ajuda com seu processo?</h2>
        <p>
          Entre em contato conosco e tenha suporte rápido, seguro e
          personalizado.
        </p>

        <div className="cta-buttons">
          <a href="https://wa.me/5511940770068" className="btn-primary">
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
