"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";

const memoryPillars = [
  {
    number: "01",
    titleKey: "pillar1",
    descKey: "pillar1Desc",
  },
  {
    number: "02",
    titleKey: "pillar2",
    descKey: "pillar2Desc",
  },
  {
    number: "03",
    titleKey: "pillar3",
    descKey: "pillar3Desc",
  },
  {
    number: "04",
    titleKey: "pillar4",
    descKey: "pillar4Desc",
  },
];

const workflow = [
  { stepKey: "workflow1", descKey: "workflow1Desc" },
  { stepKey: "workflow2", descKey: "workflow2Desc" },
  { stepKey: "workflow3", descKey: "workflow3Desc" },
];

export default function Mentoria() {
  const { t } = useI18n();
  const tm = t.mentoria;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[50vh] flex flex-col justify-end pb-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <span className="label text-on-surface-variant mb-4 block">{tm.subtitle}</span>
            <h1 className="serif italic font-light text-4xl md:text-6xl lg:text-8xl leading-[1.1] mb-6">
              {tm.title}{" "}
              <span className="text-primary-dim">{tm.highlight}</span>
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end pb-4">
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">{tm.introText}</p>
            <Link href="/contato">
              <Button>{tm.btn}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full h-64 md:h-[530px] overflow-hidden mb-16 md:mb-24">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkzkUWZosNmk0tW-Oo2nrpMll_BQIZ74rZsCnAyJ-5IMlZClQjmcyucsI26zpzsdxq7JQ4Yv3hlt7eZ2zHx-Lpv2OltnRHzxGjkmKWyRj6nqKK1amRDdxBeeO_1yor3S_CIQYhyy_Hs7Coqh9KpAEggFeNWTxHABi90xqyS-FBXt_vDUoD6lzvBXr0HJYtKl_VkWKyx6r64KZPS_Zly7sdOO4HQV76jlcLLqLI4jJNMrnRt9t0WUAOM3V4yXBkl-huffFqH06X2Pg"
          alt="Professional studio workspace"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="py-16 md:py-24 bg-surface-container-low -mx-6 px-6 mb-16 md:mb-24">
        <div className="grid md:grid-cols-12 gap-8 py-16">
          <div className="md:col-span-4">
            <h2 className="serif italic text-3xl md:text-4xl">{tm.problemTitle}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xl md:text-2xl font-light leading-snug mb-8 text-on-surface">
              {tm.problemText1}
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">{tm.problemText2}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mb-16 md:mb-24">
        <div className="mb-12 md:mb-20">
          <span className="label text-on-surface-variant mb-2 block">{tm.solution}</span>
          <h2 className="serif italic font-light text-3xl md:text-5xl lg:text-7xl mt-2">
            {tm.solutionTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/15">
          {memoryPillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-surface p-8 md:p-12 flex flex-col justify-between aspect-square"
            >
              <span className="label text-outline">{pillar.number}</span>
              <div>
                <h3 className="serif italic text-2xl md:text-3xl mb-4">
                  {tm[pillar.titleKey as keyof typeof tm]}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {tm[pillar.descKey as keyof typeof tm]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 mb-16 md:mb-24">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6 bg-surface-container py-12 md:py-24 px-8 md:px-12">
            <h2 className="serif italic text-3xl md:text-4xl mb-8 md:mb-12 leading-tight">
              {tm.workflowTitle}
            </h2>
            <div className="space-y-8 md:space-y-12">
              {workflow.map((step, index) => (
                <div key={index} className="flex gap-6 md:gap-8 items-start">
                  <span className="text-primary font-light text-3xl md:text-4xl">→</span>
                  <div>
                    <h4 className="label font-bold mb-1 uppercase">
                      {tm[step.stepKey as keyof typeof tm]}
                    </h4>
                    <p className="serif italic text-lg md:text-xl">
                      {tm[step.descKey as keyof typeof tm]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-center mt-8 md:mt-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi-3Qr4OtZWm3tvFi6FTxZboyKYoik_cvbaOqG0TRifZsRPRu1T7wKPfd8nX3fdIdVUT4Q6gW6HtWCYxfcUnPI0wkRxqiYwKReYVpZ2OD0zuCXb9piqDMFUAWbf5GQni1d0wBdwWplV8-egBfhhRYIaonhAr5gc28UZ3nellgyGQmkhAi0hxw8WRWi5qFeMN2dhBA9t4k9pFlf51Gp1GJQdT34FZ1O8ygUAbJ5o6rRMlGclpob_mTh7gNkkzMJdyoQgrOHqLsoE0U"
              alt="Abstract data representation"
              className="w-full grayscale brightness-95 mb-8"
            />
            <p className="serif italic text-lg leading-relaxed text-on-surface-variant">
              {tm.workflowQuote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-on-surface text-surface py-20 md:py-32 -mx-6 px-6 text-center mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif italic font-light text-3xl md:text-5xl lg:text-7xl mb-8 md:mb-12 leading-tight">
            {tm.ctaTitle}
          </h2>
          <p className="text-surface/70 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            {tm.ctaText}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <Link href="/contato">
              <Button>{tm.ctaBtn1}</Button>
            </Link>
            <Link href="/projetos">
              <Button variant="secondary">{tm.ctaBtn2}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}