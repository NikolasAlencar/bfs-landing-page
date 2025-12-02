"use client";

import "./header.css";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import Image from "next/image";

export function Header() {
  const { theme } = useTheme();
  console.log(theme)
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
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
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
