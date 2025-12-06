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

  const navOptions = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/quem-somos" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contato", path: "/contato" },
  ];

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
          {navOptions.map((option, index) => (
            <Link key={index} href={option.path}>
              {option.name}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
