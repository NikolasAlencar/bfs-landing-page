import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/servicos">Serviços</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
