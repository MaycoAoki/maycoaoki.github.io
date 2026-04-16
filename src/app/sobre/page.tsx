"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";

export default function Sobre() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[50vh] flex flex-col justify-end pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="label text-on-surface-variant mb-4 block">
              {t.sobre.subtitle}
            </span>
            <h1 className="serif italic font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-on-surface mb-6">
              {t.sobre.title}
            </h1>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden grayscale">
              <img
                src="/familia.jpeg"
                alt="Mayco Aoki"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="serif text-2xl italic border-l-2 border-primary pl-6">
              {t.sobre.biografia}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
              {t.sobre.bioText1}
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              {t.sobre.bioText2}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mb-12">
          <h2 className="serif text-2xl italic mb-4">{t.sobre.competencias}</h2>
          <div className="w-24 h-px bg-outline-variant opacity-20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/15">
          <div className="bg-surface-container-low p-8 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <span className="text-3xl block mb-4">⚡</span>
              <h3 className="label text-on-surface mb-4">{t.sobre.backend}</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>PHP / Laravel</li>
                <li>Java</li>
                <li>C#</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container p-8 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <span className="text-3xl block mb-4">⚛</span>
              <h3 className="label text-on-surface mb-4">{t.sobre.frontend}</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>React.js / Next.js</li>
                <li>Vue.js</li>
                <li>AngularJS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <span className="text-3xl block mb-4">🏗</span>
              <h3 className="label text-on-surface mb-4">{t.sobre.arquitectura}</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>SOLID Principles</li>
                <li>Clean Code</li>
                <li>DDD</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-highest p-8 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <span className="text-3xl block mb-4">☁</span>
              <h3 className="label text-on-surface mb-4">{t.sobre.infra}</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>Docker</li>
                <li>AWS</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-container-low -mx-6 px-6">
        <div className="grid md:grid-cols-12 gap-8 py-16 px-6 md:px-0">
          <div className="md:col-span-3">
            <h2 className="serif text-2xl italic">{t.sobre.formacao}</h2>
          </div>
          <div className="md:col-span-8">
            <div>
              <span className="label text-on-surface-variant mb-2 block">
                2011 – 2019
              </span>
              <h3 className="serif text-2xl md:text-3xl font-medium mb-2">
                {t.sobre.university}
              </h3>
              <p className="text-on-surface-variant">{t.sobre.degree}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 text-center border-t border-b border-outline-variant/10">
        <h2 className="serif italic text-3xl md:text-5xl mb-8 tracking-tight">
          {t.sobre.cta}
        </h2>
        <Link href="/contato">
          <Button>{t.sobre.ctaBtn}</Button>
        </Link>
      </section>
    </div>
  );
}