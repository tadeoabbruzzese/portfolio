'use client';
import { useState } from 'react';

const topics = ['Renovar mi web', 'Crear una web', 'Una herramienta a medida', 'Una oportunidad laboral'] as const;
export function ContactSection() {
  const [topic, setTopic] = useState<typeof topics[number]>('Renovar mi web');
  const message = `Hola Tadeo, vi tu portfolio y me gustaría conversar sobre: ${topic.toLowerCase()}.`;
  return <section className="contact section" id="contacto" aria-labelledby="contact-title"><div className="container">
    <div className="section-kicker"><p className="eyebrow">El próximo paso</p><span className="mono">UNA CONVERSACIÓN PARA EMPEZAR</span></div>
    <div className="contact-heading"><h2 id="contact-title">Contame qué tenés<br /><span>en mente.</span></h2></div>
    <div className="contact-grid"><div><p className="contact-intro">Podés compartir la web de tu negocio, contarme una idea o acercarme una oportunidad. Revisamos juntos qué necesitás y cómo puedo ayudarte.</p><a className="email-link" href="mailto:tadeoabbruzzese@gmail.com">tadeoabbruzzese@gmail.com</a><p className="contact-phone">+54 11 2322-1907 · Buenos Aires, Argentina</p><div className="contact-social"><a href="https://www.linkedin.com/in/tadeo-abbruzzese/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/tadeoabbruzzese" target="_blank" rel="noopener noreferrer">GitHub</a><a href="/home-assets/Tadeo-Abbruzzese-CV.pdf" download>Descargar CV</a></div></div>
    <div className="contact-start"><p>¿Sobre qué te gustaría conversar?</p><div className="contact-topics" role="group" aria-label="Motivo del contacto">{topics.map(value => <button key={value} aria-pressed={topic === value} onClick={() => setTopic(value)}>{value}</button>)}</div><a className="button primary" href={`https://wa.me/541123221907?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Conversar por WhatsApp</a><a className="text-link" href={`mailto:tadeoabbruzzese@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(message)}`}>Prefiero escribir por email</a><small>Se abre el mensaje para que lo completes y lo envíes cuando quieras.</small></div></div>
  </div></section>;
}
