"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/_i18n/I18nProvider";

const navItems = [
  { href: "/", labelKey: "home" },
  { href: "/projetos", labelKey: "projetos" },
  { href: "/experiencia", labelKey: "experiencia" },
  { href: "/contato", labelKey: "contato" },
];

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useI18n();

return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300 ${
                isActive
                  ? "text-on-surface border-t-2 border-on-surface"
                  : "text-on-surface-variant"
              }`}
            >
              <span className="text-lg">
                {item.href === "/" ? "⌂" : item.href === "/projetos" ? "⊞" : item.href === "/experiencia" ? "◷" : "✉"}
              </span>
              <span className="label-sm text-[10px]">{t.nav[item.labelKey as keyof typeof t.nav]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}