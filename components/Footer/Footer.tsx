import Link from "next/link";
import "./footer.css";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

export function Footer() {
  const footerLinks = [
    "Legalização Empresarial",
    "Certificação Digital",
    "Livros Societários",
    "Emissão de Certidões",
  ];
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Image
            src="/img/bfs-logo-escuro.jpg"
            alt="Logo BFS"
            width={140}
            height={40}
          />
          <p className="footer-description">
            Soluções rápidas e confiáveis em Paralegal, Contabilidade e
            Consultoria Empresarial. Velocidade, precisão e confiança para seu
            negócio.
          </p>
        </div>

        <div className="footer-links">
          <h4>Institucional</h4>
          <Link href="/">Início</Link>
          <Link href="/quem-somos">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/contato">Contato</Link>
        </div>

        <div className="footer-links">
          <h4>Serviços</h4>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Contatos com ícones */}
        <div className="footer-social">
          <h4>Contato</h4>

          <div className="flex">
            <div className="footer-contact-item">
              <a href="mailto:contato@bfs.com.br">
                <AiOutlineMail size={40} />
              </a>
            </div>

            <div className="footer-contact-item">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp size={40} />
              </a>
            </div>

            <div className="footer-contact-item">
              <a
                href="https://www.instagram.com/businessfastsolution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={40} />
              </a>
            </div>

            <div className="footer-contact-item">
              <a
                href="https://www.linkedin.com/company/business-fast-solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Business Fast Solutions. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
