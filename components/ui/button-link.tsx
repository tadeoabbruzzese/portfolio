import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn("button-link", `button-${variant}`, className);
  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </>
  );

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
