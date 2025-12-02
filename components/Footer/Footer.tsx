import "./footer.css";
import Image from "next/image";

export function Footer() {
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
            Paralegal • Contabilidade • Consultoria Empresarial
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-social">
          <h4>Contato</h4>
          <p>Email: contato@bfs.com.br</p>
          <p>WhatsApp: (11) 99999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BFS Assessoria — Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
