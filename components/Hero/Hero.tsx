"use client";

import "./hero.css";
import Image from "next/image";
import { useTheme } from "@/hooks/use-theme";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="hero container">
      <div className="text">
        <h1>BFS: Soluções Empresariais com Agilidade e Segurança</h1>
        <p>
          Legalização, Certificação Digital e Apoio Administrativo realizados
          com precisão, transparência e velocidade.
        </p>

        <div className="actions">
          <a
            href="https://wa.me/5511940770068"
            className="btn-primary"
            target="_blank"
          >
            Fale com um Especialista
          </a>

          <a
            href="mailto:businessfastsolutions04@gmail.com"
            className="btn-secondary"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <Image
        key={theme}
        src={
          theme === "light"
            ? "/img/escritorio.png"
            : "/img/escritorio-escuro.jpg"
        }
        alt="Escritório"
        className="hero-image"
        width={650}
        height={420}
      />
    </section>
  );
}
