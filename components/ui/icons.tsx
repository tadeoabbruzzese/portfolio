import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m11 6-6 6 6 6M5 12h14" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

export function Whatsapp(props: IconProps) {
  return (
    <svg {...defaults} fill="currentColor" stroke="none" focusable="false" {...props}>
      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.03 0C5.42 0 .04 5.38.04 12c0 2.12.55 4.19 1.6 6.01L0 24l6.14-1.61a12 12 0 0 0 5.89 1.5h.01c6.61 0 11.99-5.38 11.99-12 0-3.2-1.25-6.21-3.51-8.41ZM12.03 21.87a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.64.95.97-3.55-.24-.37A9.93 9.93 0 0 1 2.08 12c0-5.51 4.48-9.99 9.96-9.99a9.91 9.91 0 0 1 7.07 2.93 9.91 9.91 0 0 1 2.92 7.06c0 5.51-4.48 9.99-10 9.99Zm5.48-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3c.5 5 2 7 7 7-5 .5-7 2-7 7-.5-5-2-6.5-7-7 5-.5 6.5-2 7-7Z" />
      <path d="M19 16c.2 2 1 2.8 3 3-2 .2-2.8 1-3 3-.2-2-1-2.8-3-3 2-.2 2.8-1 3-3Z" />
    </svg>
  );
}
