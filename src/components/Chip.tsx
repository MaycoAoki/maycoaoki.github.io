import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-block px-3 py-1 label-sm bg-surface-container-highest text-on-surface-variant ${className}`}
    >
      {children}
    </span>
  );
}