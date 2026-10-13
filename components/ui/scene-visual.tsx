import Image from "next/image";
import { cn } from "@/lib/utils";

type SceneVisualProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function SceneVisual({
  src,
  alt,
  className,
  sizes = "(max-width: 820px) 92vw, (max-width: 1440px) 84vw, 1240px",
}: SceneVisualProps) {
  return (
    <div className={cn("landing-scene", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes={sizes}
        className="landing-scene-image"
      />
    </div>
  );
}
