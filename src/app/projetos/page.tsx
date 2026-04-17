"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

export default function Projetos() {
  const { t } = useI18n();

  const projects = [
    {
      id: "01",
      category: t.projetos.project1Category,
      title: t.projetos.project1Title,
      description: t.projetos.project1Description,
      tech: t.projetos.project1Tech,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrYaBaitbWTHhkEOwvDxaF3Ojmmhlet_0ptGOBl4k7Zz26k0NVFD-BnV0IM_1uMKJtE_r_riRo9Ryt7EkRkgisHrlgsUtWHqn595yPL_ArbzTlcftxbpw0Tisdx2TSb-6dzKHZFYflRaw4NEmn2pK0t3J9QfPAKuAItHFQQ8F3xUzfHbTn_JJMxMm4lTuB6KnITi1YVHA9t5J13mtxJ07PrGVsSkQKTQ_4xi0i0Zm9WvGv8Khnw4Bq1V4CkiKycKCykk9tIKvCRFY",
      reverse: false,
    },
    {
      id: "02",
      category: t.projetos.project2Category,
      title: t.projetos.project2Title,
      description: t.projetos.project2Description,
      tech: t.projetos.project2Tech,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWDd6y4_TopbEhnJcx2mIkE1buapyF_2o9IyG04k9pMFoSRGYSjiT1mSRauRN8_IV0yH5qn0yQAxEWuD7KgjDPHXQIrU5LiXOdwmk33wSBf9MXRZGC7kOGZIeO2ihGLO1LMeMcJcdAuHTB8lC9sTaEuD5cPS8cgKI4h86so-kGy-dqzQtpoGL_qrhwY-Y2QKQ718h2SEaWJlKnj9XxsSzV_HECk41pCGFDWGP3zz50YeHYdh1Z24KT5F3Zh59qNR4o9OiS1tfaHHY",
      reverse: true,
    },
    {
      id: "03",
      category: t.projetos.project3Category,
      title: t.projetos.project3Title,
      description: t.projetos.project3Description,
      tech: t.projetos.project3Tech,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvM2jGSLH-PJ4dNI0cWUFSUFH7rojz3EN-ZD-vpnKlziVs2mMSPsbGjMjto1xwBPhY3oB6B_sQo3HHvi1Ph1a2AEOBiRyMScQs7irSvP4BI3cH8T1xaAUf2SMWtEH2F-G7hdINfiIkz_8DEnqlu5BqmoiPcCZz2J6xEB5vUq7mtVj6i4Zmv0Dq4u0WwaTONHTGc7pAmOIIa-SIecMirb9UKJQryOYJQ7ed22ecp4b20xf1JxUMQvg8GoCh5oeDeBEeaUJqCdYxqgI",
      reverse: false,
    },
    {
      id: "04",
      category: t.projetos.project4Category,
      title: t.projetos.project4Title,
      description: t.projetos.project4Description,
      tech: t.projetos.project4Tech,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk1xTpI6GVS1360u_g73Ztykt1A523HU9YTBJudeAvLLYoUfKin8P9BLz4EB_eJIv7NZr_ppPwJs3u3DgBBDbVAnWWpxY6kNeAjjQ344UlcWk4KZ-dM3lAh4-RegxodeC8x4-SxNjKSUAqwcpqCMl_wEd2ZXhpq03Z2NjDUSIeFahmdywJ9qnqsnke4FKE61D8zTljTXo3ygCxqTIUWrqEulvgCBg0xHgUjPklikmUZu5oXNqHM1fDVnUVN2Sr6PTxOnuJukErbsk",
      reverse: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[20vh] flex flex-col justify-center py-12 md:min-h-[30vh] md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="serif italic font-light text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-on-surface mb-4">
              {t.projetos.title}
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-sm">
              {t.projetos.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 space-y-20 md:space-y-32">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`grid md:grid-cols-12 gap-8 items-start ${
              project.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={
                project.reverse
                  ? "md:col-start-5 md:col-span-8"
                  : "md:col-span-8"
              }
            >
              <div className="aspect-video bg-surface-container-low md:bg-surface-container-high overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className={
                project.reverse
                  ? "md:col-span-4"
                  : "md:col-span-4 md:col-start-10"
              }
            >
              <span className="label-sm text-on-surface-variant block">
                {project.id} / {project.category}
              </span>
              <h2 className="serif italic text-2xl md:text-3xl mt-3 mb-4">
                {project.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Chip key={i}>{tech}</Chip>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="py-20 md:py-32 text-center bg-surface-container border-y border-outline-variant/10 -mx-6 px-6">
        <p className="label text-on-surface-variant mb-4">{t.projetos.inquiry}</p>
        <h2 className="serif italic text-3xl md:text-5xl mb-8">
          {t.projetos.cta}
        </h2>
        <Link href="/contato">
          <Button>{t.projetos.ctaBtn}</Button>
        </Link>
      </section>
    </div>
  );
}
