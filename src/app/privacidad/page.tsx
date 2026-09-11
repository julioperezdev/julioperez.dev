import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | julioperez.dev",
  description:
    "Política de privacidad de julioperez.dev y del servicio de atención Wally Customer Support.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
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
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/50 mb-3">
            Última actualización: 11 de septiembre de 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4">
            Política de Privacidad
          </h1>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Esta política explica cómo se tratan los datos personales cuando se
            utiliza julioperez.dev o el servicio de atención conversacional
            Wally Customer Support para Ropa de Programador.
          </p>
        </div>

        <div className="space-y-10 font-body text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              1. Responsable y contacto
            </h2>
            <p>
              El responsable del tratamiento es{" "}
              <strong className="text-on-surface">Julio Pérez</strong>, que
              opera bajo la marca julioperez.dev y utiliza Wally Customer
              Support para la atención de Ropa de Programador.
            </p>
            <p className="mt-2">
              Para consultas, solicitudes de acceso o eliminación de datos,
              escribí a{" "}
              <a
                href="mailto:contacto@julioperez.dev"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              2. Qué datos podemos tratar
            </h2>
            <p>
              Dependiendo del canal y de la interacción, podemos tratar los
              siguientes datos:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                identificadores del canal de contacto, como el número de
                WhatsApp o el identificador de Telegram;
              </li>
              <li>
                mensajes que envíes, fecha y hora, estado de entrega y datos
                técnicos necesarios para evitar duplicados;
              </li>
              <li>
                preferencias que expreses de forma explícita y datos mínimos
                relacionados con una solicitud de atención humana;
              </li>
              <li>
                datos técnicos y métricas operativas, como canal, resultado,
                latencia y errores sanitizados.
              </li>
            </ul>
            <p className="mt-3">
              No solicitamos datos de tarjetas, contraseñas ni credenciales
              bancarias a través del bot. Evitá enviarlos por chat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              3. Para qué usamos los datos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>recibir y responder consultas de atención al cliente;</li>
              <li>
                consultar información autorizada del catálogo, disponibilidad,
                horarios, envíos y políticas;
              </li>
              <li>
                mantener el contexto mínimo de una conversación y respetar
                solicitudes de baja o reactivación;
              </li>
              <li>
                crear y gestionar un seguimiento humano cuando sea solicitado;
              </li>
              <li>
                proteger el servicio, detectar errores, medir su rendimiento y
                mejorar su funcionamiento.
              </li>
            </ul>
            <p className="mt-3">
              No vendemos datos personales ni utilizamos el contenido de tus
              consultas para enviarte publicidad no solicitada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              4. Automatización e inteligencia artificial
            </h2>
            <p>
              Algunas consultas pueden ser clasificadas y respondidas por
              componentes automatizados. Cuando corresponde, se utilizan
              servicios de Amazon Bedrock para interpretar la intención o
              redactar una respuesta a partir de información autorizada. El
              sistema no debe inventar precios, stock, políticas ni otros
              datos del negocio.
            </p>
            <p className="mt-2">
              La automatización se utiliza para atención y operación del
              servicio; no toma decisiones con efectos legales o equivalentes
              sobre las personas. Podés solicitar atención humana mediante el
              canal disponible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              5. Proveedores que participan del servicio
            </h2>
            <p>
              Para operar el servicio podemos utilizar proveedores de
              infraestructura y comunicación, entre ellos:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Meta, para WhatsApp Business Platform y la entrega de mensajes
                de WhatsApp;
              </li>
              <li>
                Amazon Web Services, incluyendo App Runner, PostgreSQL/RDS,
                Bedrock, CloudWatch, AppConfig, Secrets Manager y servicios de
                almacenamiento cuando resulten necesarios;
              </li>
              <li>
                proveedores de pago, sólo cuando una compra se inicia desde un
                flujo que los requiere.
              </li>
            </ul>
            <p className="mt-3">
              Cada proveedor procesa la información de acuerdo con sus propias
              condiciones y políticas de privacidad. Los secretos, tokens y
              credenciales no forman parte del contenido de las conversaciones
              ni se publican en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              6. Conservación y eliminación
            </h2>
            <p>
              Conservamos la información sólo durante el tiempo necesario para
              prestar el servicio, resolver incidencias, cumplir obligaciones
              aplicables y mantener evidencia operativa. Como política de
              operación, el contexto conversacional es limitado; los cuerpos de
              mensajes se redactan aproximadamente a los 30 días y los
              metadatos mínimos se eliminan aproximadamente a los 90 días,
              sujetos a la configuración vigente y a los requisitos legales.
            </p>
            <p className="mt-2">
              Podés solicitar la eliminación de tus datos escribiendo a{" "}
              <a
                href="mailto:contacto@julioperez.dev?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos"
                className="text-primary hover:underline"
              >
                contacto@julioperez.dev
              </a>
              . Para localizar la información, puede ser necesario indicar el
              canal utilizado y un identificador de contacto. Conservaremos
              únicamente lo que resulte necesario por razones legales,
              seguridad o auditoría.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              7. Seguridad
            </h2>
            <p>
              Aplicamos controles técnicos y organizativos razonables, como
              acceso restringido, almacenamiento de secretos separado,
              validación de webhooks, registros sanitizados y controles de
              idempotencia. Ningún sistema conectado a Internet puede
              garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              8. Menores de edad
            </h2>
            <p>
              El servicio no está dirigido a menores de edad. No recopilamos
              intencionalmente datos de menores. Si creés que un menor nos
              envió información personal, contactanos para solicitar su
              eliminación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">
              9. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política para reflejar cambios en el
              servicio, los proveedores o las obligaciones aplicables. La
              versión vigente estará disponible en esta URL e indicará su fecha
              de actualización.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-6">
          <Link
            href="/terminos"
            className="text-primary hover:underline text-sm font-label"
          >
            Ver términos y condiciones
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
