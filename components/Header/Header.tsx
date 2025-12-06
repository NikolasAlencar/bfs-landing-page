"use client";

import { useState } from "react";
import "./header.css";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const { theme } = useTheme();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navOptions = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/quem-somos" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <div className="logo" onClick={() => router.push("/")}>
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
        </div>

        {/* NAV DESKTOP */}
        <nav className="nav desktop-nav">
          {navOptions.map((option) => (
            <Link key={option.path} href={option.path}>
              {option.name}
            </Link>
          ))}
        </nav>

        {/* TOGGLE */}
        <div className="toggle-area">
          <ThemeToggle />
        </div>

        {/* MENU HAMBURGUER MOBILE */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {menuOpen && (
        <div className="mobile-menu">
          {navOptions.map((option) => (
            <Link
              key={option.path}
              href={option.path}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {option.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
