import { ArrowUpRight, Github, Linkedin, Mail, Whatsapp } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, whatsappUrl } from "@/lib/site";

const contactLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin, icon: <Linkedin /> },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: <Mail /> },
  { label: "GitHub", href: siteConfig.github, icon: <Github /> },
];

export function Contact() {
  return (
    <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <p className="eyebrow"><span aria-hidden="true" /> Contacto</p>
          <h2 id="contact-title">¿Tenés un proyecto en mente o una oportunidad donde pueda aportar?</h2>
          <p className="contact-description">
            Hablemos de lo que querés construir, mejorar o automatizar. El primer paso puede ser un mensaje simple.
          </p>
          <ButtonLink
            href={whatsappUrl}
            external
            className="contact-primary"
            icon={<Whatsapp />}
            ariaLabel="Escribirle a Tadeo por WhatsApp (abre en una nueva pestaña)"
          >
            Escribime por WhatsApp
          </ButtonLink>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.icon}
                <span>{link.label}</span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        </Reveal>
      </div>
    </section>
  );
}
