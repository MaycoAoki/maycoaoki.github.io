"use client";

import { useI18n } from "@/app/_i18n/I18nProvider";
import { Chip } from "@/components/Chip";

const experiences = [
  {
    date: "Fev 2025 — Abr 2026",
    title: "Revista Exato",
    tags: ["Liderança Técnica", "Laravel", "Next.js", "Stripe"],
    description:
      "Responsável pela direção técnica de produtos digitais, implementando soluções robustas com Laravel no ecossistema backend e Next.js para interfaces de alta performance. Gestão completa de fluxos de pagamento e assinaturas via Stripe.",
  },
  {
    date: "Abr 2024 — Set 2024",
    title: "Revenda Mais",
    tags: ["Laravel", "React.js"],
    description:
      "Atuação no desenvolvimento de sistemas de gestão automotiva, utilizando stack moderna para otimização de processos internos e experiência do usuário final.",
  },
  {
    date: "Mai 2022 — Dez 2023",
    title: "Codesign",
    tags: ["Scrum", "Laravel", "React.js", "AngularJS"],
    description:
      "Imersão em ambientes ágeis utilizando metodologia Scrum. Manutenção e evolução de legados em AngularJS enquanto migrava e construía novas funcionalidades com React.js e Laravel.",
  },
  {
    date: "Mai 2021 — Abr 2022",
    title: "Econet Editora",
    tags: ["Backend Laravel", "APIs REST", "Vue.js", "React.js"],
    description:
      "Foco no desenvolvimento backend e arquitetura de APIs RESTful para suporte a múltiplos frontends em Vue e React, garantindo integridade de dados e performance para uma base sólida de usuários.",
  },
];

const previousExperience = [
  { company: "WebControl", role: "Fullstack Dev" },
  { company: "Tuxon", role: "Software Engineer" },
  { company: "Bomja", role: "Web Developer" },
  { company: "NEXTEM", role: "Backend Specialist" },
];

export default function Experiencia() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[40vh] flex flex-col justify-end pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="serif italic font-medium text-4xl md:text-6xl lg:text-7xl leading-tight text-on-surface mb-4">
              {t.experiencia.title}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {t.experiencia.subtitle}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <div className="text-right">
              <span className="label block text-on-surface-variant mb-1">
                Status atual
              </span>
              <span className="label text-primary">{t.experiencia.status}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-16 md:space-y-24 py-16">
        {experiences.map((exp, index) => (
          <div key={index} className="group grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <span className="label text-on-surface-variant">{exp.date}</span>
            </div>
            <div className="md:col-span-9 border-l border-outline-variant/15 pl-8 md:pl-12 relative">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary"></div>
              <h2 className="serif text-2xl md:text-3xl font-bold italic text-on-surface mb-4">
                {exp.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag, i) => (
                  <Chip key={i}>{tag}</Chip>
                ))}
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 bg-surface-container-low -mx-6 px-6">
        <div className="py-12 px-6">
          <span className="label text-on-surface-variant mb-12 block">
            {t.experiencia.timeline}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {previousExperience.map((exp, index) => (
              <div key={index}>
                <h4 className="serif italic text-xl font-bold">{exp.company}</h4>
                <span className="label-sm text-on-surface-variant opacity-60">
                  {exp.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-t border-outline-variant/10">
        <div className="max-w-4xl">
          <blockquote className="serif italic text-2xl md:text-4xl leading-tight text-on-surface opacity-90">
            {t.experiencia.quote}
          </blockquote>
          <cite className="block mt-6 label text-primary">
            {t.experiencia.quoteAuthor}
          </cite>
        </div>
      </section>
    </div>
  );
}