import type { SVGProps } from "react";

type TechIconProps = SVGProps<SVGSVGElement> & { name: string };

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TechIcon({ name, ...props }: TechIconProps) {
  const content = (() => {
    switch (name) {
      case "frontend":
        return <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>;
      case "backend":
        return <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" /></>;
      case "data":
        return <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>;
      case "automation":
        return <><path d="M12 3c.4 4.2 1.8 5.6 6 6-4.2.4-5.6 1.8-6 6-.4-4.2-1.8-5.6-6-6 4.2-.4 5.6-1.8 6-6Z" /><path d="M19 15c.2 2.1.9 2.8 3 3-2.1.2-2.8.9-3 3-.2-2.1-.9-2.8-3-3 2.1-.2 2.8-.9 3-3Z" /></>;
      case "infrastructure":
        return <><path d="M12 3 4.5 7.3 12 11.6l7.5-4.3L12 3Z" /><path d="m4.5 12.1 7.5 4.3 7.5-4.3M4.5 16.9l7.5 4.3 7.5-4.3" /></>;
      case "typescript":
        return <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 9h7M10.5 9v8M14.5 15.5c.7 1 3.5 1 3.5-.5 0-2-3.5-1-3.5-3 0-1.5 2.5-1.7 3.3-.7" /></>;
      case "javascript":
        return <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M11 9v6c0 2-2.5 2.2-3.5.7M14.5 15.5c.7 1 3.5 1 3.5-.5 0-2-3.5-1-3.5-3 0-1.5 2.5-1.7 3.3-.7" /></>;
      case "nextjs":
        return <><circle cx="12" cy="12" r="9" /><path d="M8 16V8l8 9V8M15 8h2" /></>;
      case "react":
        return <><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="9" ry="3.8" /><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" /></>;
      case "tailwind":
        return <><path d="M3 12c3-5 6-5 9-2 2 2 3 2 6 0-3 5-6 5-9 2-2-2-3-2-6 0Z" /><path d="M6 17c3-4 5-4 8-1 1.5 1.5 3 1.5 5-.2" /></>;
      case "vite":
        return <><path d="m4 5 8 16 8-16-6.7 1.2L12 3l-1.3 3.2L4 5Z" /><path d="m13.5 7-4 6h4l-3 5" /></>;
      case "nodejs":
        return <><path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" /><path d="M9 16V8l6 8V8" /></>;
      case "fastify":
        return <><circle cx="12" cy="12" r="9" /><path d="m14.5 5-6 8h4l-3 6 7-9h-4l2-5Z" /></>;
      case "express":
        return <><path d="M4 7h7M4 12h6M4 17h7M13 8l7 8M20 8l-7 8" /></>;
      case "api":
        return <><path d="m8 5-5 7 5 7M16 5l5 7-5 7M10 9l4 6M14 9l-4 6" /></>;
      case "postgresql":
      case "mysql":
        return <><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /></>;
      case "supabase":
        return <path d="M13.3 2.8 5.5 13h6l-.8 8.2L18.5 11h-6l.8-8.2Z" />;
      case "mongodb":
        return <><path d="M12 2.5c4.5 4.2 6 7.7 4.5 11.1-1 2.3-2.5 3.9-4.5 5.2-2-1.3-3.5-2.9-4.5-5.2C6 10.2 7.5 6.7 12 2.5Z" /><path d="M12 6v15" /></>;
      case "firebase":
        return <><path d="m5 19 2.5-15 4 7 2-5L19 19l-7 3-7-3Z" /><path d="m7.5 4 7.3 15.5" /></>;
      case "firestore":
        return <><path d="m6 4 6 3 6-3v14l-6 3-6-3V4Z" /><path d="m6 9 6 3 6-3M6 14l6 3 6-3" /></>;
      case "openai":
        return <><circle cx="12" cy="7" r="4" /><circle cx="16.3" cy="9.5" r="4" /><circle cx="16.3" cy="14.5" r="4" /><circle cx="12" cy="17" r="4" /><circle cx="7.7" cy="14.5" r="4" /><circle cx="7.7" cy="9.5" r="4" /></>;
      case "n8n":
        return <><circle cx="5" cy="15" r="2" /><circle cx="10" cy="8" r="2" /><circle cx="15" cy="15" r="2" /><circle cx="20" cy="8" r="2" /><path d="m6.2 13.4 2.6-3.8m2.4 0 2.6 3.8m2.4 0 2.6-3.8" /></>;
      case "integrations":
        return <><path d="m9.5 14.5-2 2a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M14.5 9.5l2-2a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0M8 12h8" /></>;
      case "agents":
        return <><circle cx="5" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M7 12h3a4 4 0 0 0 4-4V6m0 12v-2a4 4 0 0 0-4-4" /></>;
      case "docker":
        return <><path d="M3 13h15c0 4-3 7-8 7-3.5 0-6-2.5-7-7Z" /><path d="M6 10h3v3H6zM9 7h3v3H9zM9 10h3v3H9zM12 10h3v3h-3zM15 10h3v3h-3zM18 9c1-1 2-1 3-.5-.2 1.7-1.2 2.5-3 2.5" /></>;
      case "git":
        return <><circle cx="7" cy="5" r="2" /><circle cx="17" cy="8" r="2" /><circle cx="7" cy="19" r="2" /><path d="M7 7v10M9 12h3a5 5 0 0 0 5-4" /></>;
      case "github":
        return <><path d="M15 21v-3.5c0-1 .1-1.7-.5-2.4 3-.3 6-1.4 6-6.4 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.7-.1-3.4 0 0-1.1-.3-3.6 1.3a12 12 0 0 0-6.5 0C6.5 1.5 5.4 1.8 5.4 1.8c-.7 1.7-.2 3.1-.1 3.4A5 5 0 0 0 4 8.7c0 5 3 6.1 6 6.4-.4.5-.7 1.2-.7 2.1V21" /><path d="M9.3 18.5c-2.5.8-2.5-1.2-3.5-1.5" /></>;
      case "auth":
        return <><path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z" /><path d="M9 12.5 11 15l4-6" /></>;
      default:
        return <circle cx="12" cy="12" r="8" />;
    }
  })();

  return <svg {...defaults} {...props}>{content}</svg>;
}
