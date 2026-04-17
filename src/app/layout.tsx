import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/app/_i18n/I18nProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mayco Aoki | Engenheiro de Software",
  description:
    "Engenheiro de Software Full Stack | Backend Specialist. Curitiba - PR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-surface text-on-surface">
        <I18nProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1 pt-16 pb-24 md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}