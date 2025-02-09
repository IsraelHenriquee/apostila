import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Material do Curso",
  description: "Apostila digital com conteúdo das aulas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold hover:text-gray-300">
                Material do Curso
              </Link>
              <div className="flex gap-6">
                <Link href="/aula1" className="hover:text-gray-300">Aula 1</Link>
                <Link href="/aula2" className="hover:text-gray-300">Aula 2</Link>
                <Link href="/aula3" className="hover:text-gray-300">Aula 3</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
