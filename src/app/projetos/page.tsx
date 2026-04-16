"use client";

import Link from "next/link";
import { useI18n } from "@/app/_i18n/I18nProvider";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

const projects = [
  {
    id: "01",
    category: "ARCHITECTURE",
    title: "payment-commerce-platform",
    description:
      "A robust e-commerce payment processing system engineered with Spring Boot 3.x. The implementation strictly adheres to Hexagonal Architecture, ensuring complete decoupling of core business logic from Stripe's external API integration.",
    tech: ["Java", "Spring Boot 3", "Stripe API"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrYaBaitbWTHhkEOwvDxaF3Ojmmhlet_0ptGOBl4k7Zz26k0NVFD-BnV0IM_1uMKJtE_r_riRo9Ryt7EkRkgisHrlgsUtWHqn595yPL_ArbzTlcftxbpw0Tisdx2TSb-6dzKHZFYflRaw4NEmn2pK0t3J9QfPAKuAItHFQQ8F3xUzfHbTn_JJMxMm4lTuB6KnITi1YVHA9t5J13mtxJ07PrGVsSkQKTQ_4xi0i0Zm9WvGv8Khnw4Bq1V4CkiKycKCykk9tIKvCRFY",
    reverse: false,
  },
  {
    id: "02",
    category: "DISTRIBUTED",
    title: "order-processing-platform",
    description:
      "Event-driven microservices ecosystem designed for high-scale order processing. Utilizing message brokers to maintain eventual consistency and service autonomy across the lifecycle of a transaction.",
    tech: ["Microservices", "Kafka", "Go"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWDd6y4_TopbEhnJcx2mIkE1buapyF_2o9IyG04k9pMFoSRGYSjiT1mSRauRN8_IV0yH5qn0yQAxEWuD7KgjDPHXQIrU5LiXOdwmk33wSBf9MXRZGC7kOGZIeO2ihGLO1LMeMcJcdAuHTB8lC9sTaEuD5cPS8cgKI4h86so-kGy-dqzQtpoGL_qrhwY-Y2QKQ718h2SEaWJlKnj9XxsSzV_HECk41pCGFDWGP3zz50YeHYdh1Z24KT5F3Zh59qNR4o9OiS1tfaHHY",
    reverse: true,
  },
  {
    id: "03",
    category: "PRODUCT",
    title: "saas-billing-platform",
    description:
      "A full-cycle subscription management engine built on Laravel and integrated with Stripe. Features automated recurring billing, prorated subscription tiers, and multi-currency handling for global SaaS operations.",
    tech: ["PHP", "Laravel", "MySQL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvM2jGSLH-PJ4dNI0cWUFSUFH7rojz3EN-ZD-vpnKlziVs2mMSPsbGjMjto1xwBPhY3oB6B_sQo3HHvi1Ph1a2AEOBiRyMScQs7irSvP4BI3cH8T1xaAUf2SMWtEH2F-G7hdINfiIkz_8DEnqlu5BqmoiPcCZz2J6xEB5vUq7mtVj6i4Zmv0Dq4u0WwaTONHTGc7pAmOIIa-SIecMirb9UKJQryOYJQ7ed22ecp4b20xf1JxUMQvg8GoCh5oeDeBEeaUJqCdYxqgI",
    reverse: false,
  },
  {
    id: "04",
    category: "ECOSYSTEM",
    title: "api-marketplace",
    description:
      "A typed marketplace API constructed with TypeScript. Focuses on developer experience (DX) through exhaustive documentation and robust validation layers for third-party service integration.",
    tech: ["TypeScript", "Node.js", "PostgreSQL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk1xTpI6GVS1360u_g73Ztykt1A523HU9YTBJudeAvLLYoUfKin8P9BLz4EB_eJIv7NZr_ppPwJs3u3DgBBDbVAnWWpxY6kNeAjjQ344UlcWk4KZ-dM3lAh4-RegxodeC8x4-SxNjKSUAqwcpqCMl_wEd2ZXhpq03Z2NjDUSIeFahmdywJ9qnqsnke4FKE61D8zTljTXo3ygCxqTIUWrqEulvgCBg0xHgUjPklikmUZu5oXNqHM1fDVnUVN2Sr6PTxOnuJukErbsk",
    reverse: false,
  },
];

export default function Projetos() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="min-h-[40vh] flex flex-col justify-end pb-16">
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
        <p className="label text-on-surface-variant mb-4">Inquiry</p>
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