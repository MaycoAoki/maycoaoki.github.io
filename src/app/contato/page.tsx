"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";

export default function Contato() {
  const { t } = useI18n();
  const tc = t.contato;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[40vh] flex flex-col justify-center items-center text-center pb-16">
        <h1 className="serif italic font-medium text-4xl md:text-6xl lg:text-8xl leading-tight mb-6">
          {tc.title}
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
          {tc.subtitle}
        </p>
      </section>

      <section className="grid md:grid-cols-12 gap-12 md:gap-16 items-start pb-16">
        <div className="md:col-span-5 space-y-12 md:space-y-16">
          <div>
            <span className="label-sm text-on-surface-variant block mb-6">{tc.infoTitle}</span>
            <div className="space-y-8">
              <div>
                <span className="label-sm text-on-surface-variant block mb-1">{tc.email}</span>
                <a
                  href="mailto:maycoaoki@gmail.com"
                  className="serif italic text-xl md:text-2xl hover:text-primary transition-colors"
                >
                  maycoaoki@gmail.com
                </a>
              </div>
              <div>
                <span className="label-sm text-on-surface-variant block mb-1">{tc.telefone}</span>
                <a
                  href="tel:+55419992417303"
                  className="serif italic text-xl md:text-2xl hover:text-primary transition-colors"
                >
                  (41) 9 9241-7303
                </a>
              </div>
              <div>
                <span className="label-sm text-on-surface-variant block mb-1">{tc.local}</span>
                <p className="serif italic text-xl md:text-2xl">Curitiba – PR</p>
              </div>
            </div>
          </div>
          <div>
            <span className="label-sm text-on-surface-variant block mb-6">{tc.social}</span>
            <div className="flex gap-6">
              <Link
                href="https://github.com/MaycoAoki"
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                GitHub
                <span>↗</span>
              </Link>
              <Link
                href="https://linkedin.com/in/mayco-aoki"
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                LinkedIn
                <span>↗</span>
              </Link>
              <Link
                href="https://www.instagram.com/maycoaoki/"
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Instagram
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-12 lg:p-16">
          <form action="https://formspree.io/f/mkokoqej" method="POST" className="space-y-10">
            <div className="space-y-2">
              <label
                className="label-sm text-on-surface-variant"
                htmlFor="name"
              >
                {tc.formName}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={tc.formNamePlaceholder}
                className="w-full bg-transparent border-b border-outline-variant/40 focus:border-on-surface focus:ring-0 transition-colors py-3 px-0 placeholder:text-outline-variant/50"
              />
            </div>
            <div className="space-y-2">
              <label
                className="label-sm text-on-surface-variant"
                htmlFor="email"
              >
                {tc.formEmail}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={tc.formEmailPlaceholder}
                className="w-full bg-transparent border-b border-outline-variant/40 focus:border-on-surface focus:ring-0 transition-colors py-3 px-0 placeholder:text-outline-variant/50"
              />
            </div>
            <div className="space-y-2">
              <label
                className="label-sm text-on-surface-variant"
                htmlFor="message"
              >
                {tc.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={tc.formMessagePlaceholder}
                rows={4}
                className="w-full bg-transparent border-b border-outline-variant/40 focus:border-on-surface focus:ring-0 transition-colors py-3 px-0 placeholder:text-outline-variant/50 resize-none"
              />
            </div>
            <div className="pt-6">
              <Button type="submit" className="w-full">
                {tc.formSubmit}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}