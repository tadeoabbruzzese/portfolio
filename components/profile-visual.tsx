import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

export function ProfileVisual() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", "tadeo-profile.jpg"));

  return (
    <div className="profile-composition">
      <div className="profile-status">
        <span />
        Buenos Aires · ARG
      </div>
      <div className="profile-frame">
        {hasPhoto ? (
          <Image
            src="/tadeo-profile.jpg"
            alt="Retrato profesional de Tadeo Abbruzzese"
            fill
            priority
            sizes="(max-width: 767px) 90vw, 38vw"
            className="profile-photo"
          />
        ) : (
          <div className="profile-placeholder" role="img" aria-label="Espacio reservado para la foto de Tadeo">
            <div className="profile-grid" />
            <div className="profile-monogram">TA</div>
            <p>Retrato profesional</p>
            <span>Reemplazar en /public/tadeo-profile.jpg</span>
          </div>
        )}
      </div>
      <div className="profile-caption">
        <span>01 / Perfil</span>
        <p>Producto, ingeniería<br />e inteligencia artificial.</p>
      </div>
      <div className="profile-orbit" aria-hidden="true" />
    </div>
  );
}
