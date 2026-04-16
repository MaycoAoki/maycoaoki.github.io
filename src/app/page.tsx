"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[70vh] flex flex-col justify-end pb-16 md:min-h-[60vh]">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="label text-on-surface-variant mb-4 block">
              {t.home.subtitle}
            </span>
            <h1 className="serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-on-surface mb-6">
              {t.home.title}
            </h1>
            <p className="serif italic text-xl md:text-2xl lg:text-3xl text-on-surface-variant max-w-2xl leading-relaxed">
              {t.home.role}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col md:items-end gap-2">
            <p className="label text-on-surface">{t.home.location}</p>
            <span className="label-sm text-on-surface-variant">{t.home.locationLabel}</span>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-20 md:py-32 -mx-6 px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="serif text-3xl md:text-4xl lg:text-5xl leading-tight text-on-surface mb-6">
              {t.home.introTitle}
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              {t.home.introText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/experiencia">
                <Button>{t.home.btnExperience}</Button>
              </Link>
              <Link href="/contato">
                <Button variant="secondary">{t.home.btnContact}</Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden grayscale contrast-125">
              <img
                src="/eu.png"
                alt="Mayco Aoki"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 md:p-8 shadow-sm">
              <span className="serif italic text-4xl text-on-surface block">6+</span>
              <p className="label-sm text-on-surface-variant mt-2">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mb-12">
          <span className="label text-on-surface-variant mb-2 block">{t.home.stack}</span>
          <h2 className="serif italic text-3xl md:text-4xl">
            {t.home.stackTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-low p-8 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto min-h-[280px]">
            <span className="text-4xl">⚡</span>
            <div>
              <h3 className="serif text-2xl md:text-3xl mb-3">{t.home.backend}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                {t.home.backendText}
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip>PHP / Laravel</Chip>
                <Chip>C# / .NET</Chip>
                <Chip>Java</Chip>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-6 md:p-8 aspect-square flex flex-col justify-between">
            <span className="text-2xl">🖥</span>
            <div>
              <h4 className="label mb-2">{t.home.nodejs}</h4>
              <p className="text-sm text-on-surface-variant">
                {t.home.nodejsText}
              </p>
            </div>
          </div>

          <div className="bg-surface-container p-6 md:p-8 aspect-square flex flex-col justify-between">
            <span className="text-2xl">⚛</span>
            <div>
              <h4 className="label mb-2">{t.home.react}</h4>
              <p className="text-sm text-on-surface-variant">
                {t.home.reactText}
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container-low p-6 md:p-8 flex items-center justify-between gap-4">
            <div>
              <h4 className="label mb-2">{t.home.frameworks}</h4>
              <p className="text-sm text-on-surface-variant">
                {t.home.frameworksText}
              </p>
            </div>
            <span className="text-3xl opacity-40 hidden md:block">🔧</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="aspect-video bg-surface-container-high overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEjGncYeuZR1OzglW1cHK0NJQqBJV8Y-VNpMBm8XtCTmqebLn3ybaRa3f5iu_kFZJ_lKJtxpTyheG2h-EoH3DNkof4Bwr3ZpsUpYggDS08aEYjwTYMuuPAglGp-7dpnoBfFCrBTsn-8wd22xc56H7B_RcB_XlBl1FnqgV0-sgb9glljk4Mf_RNCu8ZkS5fneMAyXGpCyp84dN3TdZuIPGhfea7y2kIRb1Gnx2s2M_7UiIhPNG17uIWgwz1BFGR7OrDxXXjhRrlTng"
                  alt="Financial dashboard interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9 pt-4">
              <span className="label-sm text-on-surface-variant block">{t.home.project1Category}</span>
              <h3 className="serif text-2xl md:text-3xl mt-3 mb-4">
                {t.home.project1Title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {t.home.project1Text}
              </p>
              <Link
                href="/projetos"
                className="label border-b border-on-surface pb-1 inline-block"
              >
                {t.home.projectDetails}
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 md:col-start-6">
              <div className="aspect-video bg-surface-container-high overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpR21AG6_NOpVz8GzFhe6zHuzb0C3ZknMbfLdTntPuZrbATMXO_PA5aKgK_xqW8dGnDuF4J9IeA4LxziZGNhb44B70BVD4RETtU9Mnc6S3E0wEwLlGDtNjzmCLYbzUBh5b_sEz05dHaSF7a0CiJSZv8vq-eFloQcDshGA7MQ6LFCckRVVRC_kLSmMQFqNyYyDhpLIvvnYwUf3D3xXGcf6qmvtAAvKS5L_ONgHiyqskgOohbTn7gYJXkNiBkK2uuJyN9lQ2l4LtAMI"
                  alt="E-commerce architecture diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-4 pt-4 md:text-right">
              <span className="label-sm text-on-surface-variant block">{t.home.project2Category}</span>
              <h3 className="serif text-2xl md:text-3xl mt-3 mb-4">
                {t.home.project2Title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {t.home.project2Text}
              </p>
              <Link
                href="/projetos"
                className="label border-b border-on-surface pb-1 inline-block"
              >
                {t.home.projectDetails}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}