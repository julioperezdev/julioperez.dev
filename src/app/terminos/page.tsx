import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones | julioperez.dev",
  description: "Términos y condiciones de uso y compra de productos digitales en julioperez.dev",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-outline-variant/10 bg-[#131317]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>
          <span className="text-primary font-headline font-bold tracking-tighter">
            julioperez.dev
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/50 mb-3">
            Última actualización: Abril 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Al acceder y utilizar julioperez.dev, y al realizar compras en este sitio, aceptás los
            siguientes términos y condiciones. Leelos con atención antes de realizar cualquier transacción.
          </p>
        </div>

        <div className="space-y-10 font-body text-on-surface-variant leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              1. Datos del vendedor
            </h2>
            <p>
              El titular de este sitio web es <strong className="text-on-surface">Julio Pérez</strong>,
              creador de contenido y desarrollador de software, con presencia bajo la marca{" "}
              <strong className="text-on-surface">julioperez.dev</strong>.
            </p>
            <p className="mt-2">
              Contacto:{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              2. Productos y servicios
            </h2>
            <p>
              Este sitio ofrece la venta de <strong className="text-on-surface">productos digitales</strong>,
              incluyendo libros en formato PDF y/o ePub. Los productos son de entrega inmediata
              una vez confirmado el pago. No se realizan envíos físicos de productos digitales.
            </p>
            <p className="mt-2">
              La tienda de indumentaria <strong className="text-on-surface">Ropa de Programador</strong>{" "}
              opera bajo su propio sitio (ropadeprogramador.com) y tiene sus propios términos de compra.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              3. Precios y medios de pago
            </h2>
            <p>
              Los precios están expresados en <strong className="text-on-surface">dólares estadounidenses (USD)</strong>.
              El cobro se procesa a través de pasarelas de pago seguras (Stripe, MercadoPago u otras).
              El vendedor no almacena datos de tarjetas de crédito ni información bancaria.
            </p>
            <p className="mt-2">
              Los precios pueden modificarse sin previo aviso. El precio vigente al momento del pago
              es el que aplica a la transacción.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              4. Política de reembolsos
            </h2>
            <p>
              Dada la naturaleza digital de los productos, se aceptan solicitudes de reembolso dentro
              de los <strong className="text-on-surface">7 días corridos</strong> posteriores a la compra,
              siempre que no se haya descargado ni accedido al archivo.
            </p>
            <p className="mt-2">
              Para solicitar un reembolso, enviá un email a{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>{" "}
              con el asunto <em>&ldquo;Solicitud de reembolso&rdquo;</em> y el número de transacción.
              Las solicitudes serán respondidas en un plazo máximo de 5 días hábiles.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              5. Entrega del producto digital
            </h2>
            <p>
              Una vez confirmado el pago, el acceso al producto digital se enviará al correo electrónico
              indicado en la compra dentro de las <strong className="text-on-surface">24 horas</strong>.
              Si no lo recibís, revisá tu carpeta de spam o escribinos a{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              6. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio —textos, imágenes, diseños, código y materiales
              descargables— son propiedad de Julio Pérez o tienen licencia de uso correspondiente.
            </p>
            <p className="mt-2">
              Queda <strong className="text-on-surface">prohibida</strong> la reproducción, distribución,
              reventa o modificación de los productos adquiridos sin autorización expresa del autor.
              Los productos son para uso personal y no comercial.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              7. Tratamiento de datos personales
            </h2>
            <p>
              Los datos personales (nombre, email) recopilados durante el proceso de compra se utilizan
              exclusivamente para procesar la transacción y entregar el producto adquirido.
            </p>
            <p className="mt-2">
              No se comparten datos con terceros, excepto con las plataformas de pago necesarias para
              completar la transacción. Podés solicitar la eliminación de tus datos en cualquier momento
              escribiendo a{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              8. Limitación de responsabilidad
            </h2>
            <p>
              El contenido de este sitio y los productos ofrecidos tienen un fin educativo e informativo.
              Julio Pérez no garantiza resultados específicos derivados de la aplicación del contenido
              adquirido. El uso de la información es responsabilidad exclusiva del comprador.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              9. Modificaciones
            </h2>
            <p>
              Estos términos pueden actualizarse en cualquier momento. La versión vigente siempre estará
              disponible en esta página. El uso continuado del sitio implica la aceptación de los
              términos actualizados.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              10. Contacto
            </h2>
            <p>
              Para cualquier consulta relacionada con estos términos, podés escribirnos a{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>.
            </p>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-16 pt-8 border-t border-outline-variant/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label w-fit"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
