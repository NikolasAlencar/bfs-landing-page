import Link from "next/link";
import "./not-found.css";

export default function NotFoundPage() {
  return (
    <main className="page-container notfound-container container">
      <section className="notfound-hero">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está tentando acessar não existe ou foi movida.</p>

        <Link href="/" className="btn-primary notfound-btn">
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
