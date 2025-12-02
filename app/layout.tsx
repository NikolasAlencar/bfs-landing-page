import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import { Header } from "@/components/Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
