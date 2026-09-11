import Link from "next/link";
import { ArrowLeft } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="not-found container">
      <span>404</span>
      <h1>Esta página no existe.</h1>
      <p>Puede que el enlace haya cambiado o que hayas llegado a una ruta incorrecta.</p>
      <Link href="/"><ArrowLeft /> Volver al inicio</Link>
    </section>
  );
}
