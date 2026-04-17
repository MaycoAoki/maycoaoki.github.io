"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { useTheme } from "@/components/ThemeProvider";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.sobre },
    { href: "/projetos", label: t.nav.projetos },
    { href: "/experiencia", label: t.nav.experiencia },
    { href: "/mentoria", label: t.nav.mentoria },
    { href: "/contato", label: t.nav.contato },
  ];

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-serif tracking-widest font-bold text-on-surface">
            @MAYCOAOKI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`label transition-colors duration-300 hover:text-on-surface ${
                pathname === link.href
                  ? "font-bold text-on-surface"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleLocale}
            className="label text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            {locale.toUpperCase()}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleLocale}
            className="label text-on-surface-variant"
          >
            {locale.toUpperCase()}
          </button>
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-surface border-t border-outline-variant/10">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 label transition-colors duration-300 ${
                  pathname === link.href
                    ? "bg-surface-container text-on-surface font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}