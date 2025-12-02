"use client";

import "./header.css";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => router.push("/")}>
          {
            <Image
              key={theme}
              src={
                theme === "light"
                  ? "/img/bfs-logo.jpg"
                  : "/img/bfs-logo-escuro.jpg"
              }
              alt="BFS Logo"
              width={150}
              height={50}
            />
          }
        </div>

        <nav className="nav">
          <Link href="/">Início</Link>
          <Link href="/quem-somos">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
