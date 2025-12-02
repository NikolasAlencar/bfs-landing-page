"use client";

import "./services.css";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";

export function Services() {
  const services = [
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

  return (
    <section className="services-section container" id="servicos">
      <h2>Serviços</h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <ServiceIcon icon={item.icon} />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
