"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-surface-container mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-lg font-serif italic font-bold text-on-surface">
            {t.footer.brand}
          </span>
          <p className="label text-on-surface-variant mt-2">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>

        <div className="flex gap-10">
          <Link
            href="https://github.com/MaycoAoki"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            GITHUB
          </Link>
          <Link
            href="https://linkedin.com/in/mayco-aoki"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            LINKEDIN
          </Link>
          <Link
            href="https://www.instagram.com/maycoaoki/"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            INSTAGRAM
          </Link>
        </div>
      </div>
    </footer>
  );
}