"use client";

import "./services.css";

import { FaBuilding } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { LuBookCopy } from "react-icons/lu";
import { HiOutlineDocumentSearch } from "react-icons/hi";

export function Services() {
  type IconKey = "escritorio" | "certificacao" | "livro" | "certidao";

  const services: Array<{ icon: IconKey; title: string; desc: string }> = [
    {
      icon: "escritorio",
      title: "Legalização Empresarial",
      desc: "Registro, alterações e regularização completa da sua empresa.",
    },
    {
      icon: "certificacao",
      title: "Certificação Digital",
      desc: "Emissão de e-CPF e e-CNPJ com rapidez e segurança.",
    },
    {
      icon: "livro",
      title: "Livros Societários",
      desc: "Organização, abertura e legalização de livros obrigatórios.",
    },
    {
      icon: "certidao",
      title: "Emissão de Certidões",
      desc: "Federais, estaduais, municipais e específicas.",
    },
  ];

  const serviceIcons: Record<IconKey, React.ReactNode> = {
    escritorio: <FaBuilding size={30} />,
    certificacao: <BsPatchCheck size={30} />,
    livro: <LuBookCopy size={30} />,
    certidao: <HiOutlineDocumentSearch size={30} />,
  };

  return (
    <section className="services-section container" id="servicos">
      <h2>Serviços</h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{serviceIcons[item.icon]}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
