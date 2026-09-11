import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link href="/#inicio" className="footer-brand">TA<span>.</span></Link>
          <p>Diseñado y desarrollado por Tadeo.</p>
        </div>
        <div className="footer-meta">
          <span>Buenos Aires · {new Date().getFullYear()}</span>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            Ver GitHub <ArrowUpRight width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
