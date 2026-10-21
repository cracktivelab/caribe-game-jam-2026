import { useEffect, useState } from "react"

/* ---------------------------------------------------------------- */
/* Post-jam: pitch/category deadline closed 2026-10-20 23:59 BRT.      */
/* ---------------------------------------------------------------- */
// Keep submission guides as archive; no next-stage name is confirmed here.

const ITCH_JAM_URL = "https://itch.io/jam/gamejamplus-2627"
const HEROHUB_URL = "https://herohub.gamejamplus.com"

function DeliveryStatusCard() {
  return (
    <div className="relative rounded-2xl border-2 border-mint bg-void/90 p-6 backdrop-blur-md shadow-[0_0_45px_-8px_rgba(34,225,157,0.65)]">
      <div className="mb-4 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-mint" />
          <span className="font-pixel text-[9px] tracking-wider text-mint sm:text-[10px]">
            ENTREGA DE PITCH &amp; CATEGORÍAS
          </span>
        </div>
        <span className="rounded-full bg-mint/15 px-2.5 py-0.5 font-pixel text-[8px] text-mint">
          CERRADA
        </span>
      </div>

      <div className="rounded-xl border border-white/10 bg-grape/25 p-4">
        <p className="text-sm font-medium leading-relaxed text-lavender sm:text-base">
          <strong className="text-white">
            El plazo de Pitch y Categorías finalizó
          </strong>{" "}
          el{" "}
          <span className="text-mint font-semibold">
            martes 20 de octubre de 2026 a las 23:59 BRT
          </span>
          . Consulta tu proyecto en Hero Hub y sigue los próximos anuncios
          oficiales de GameJamPlus.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 font-pixel text-[8px] tracking-wider sm:text-[9px]">
        <div className="rounded-lg border border-mint/20 bg-void/60 p-2.5 text-center">
          <span className="block text-mint">CANAL 1</span>
          <span className="mt-1 block text-white">Itch.io (Build)</span>
        </div>
        <div className="rounded-lg border border-mint/20 bg-void/60 p-2.5 text-center">
          <span className="block text-mint">CANAL 2</span>
          <span className="mt-1 block text-white">Hero Hub (Pitch)</span>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Building blocks                                                   */
/* ---------------------------------------------------------------- */

function PixelBadge({
  children,
  tone = "mint",
}: {
  children: React.ReactNode
  tone?: "mint" | "purple"
}) {
  const cls = tone === "mint" ? "bg-mint text-void" : "bg-grape text-white"
  return (
    <span
      className={`inline-block px-2 py-1 font-pixel text-[8px] leading-none tracking-wider ${cls} [clip-path:polygon(0_4px,4px_4px,4px_0,calc(100%-4px)_0,calc(100%-4px)_4px,100%_4px,100%_calc(100%-4px),calc(100%-4px)_calc(100%-4px),calc(100%-4px)_100%,4px_100%,4px_calc(100%-4px),0_calc(100%-4px))]`}
    >
      {children}
    </span>
  )
}

function FloatingPixelTag({
  children,
  className = "",
  rotate = "-rotate-6",
  slow = false,
}: {
  children: React.ReactNode
  className?: string
  rotate?: string
  slow?: boolean
}) {
  return (
    <div className={`absolute z-20 select-none ${rotate} ${className}`}>
      <div
        className={`${
          slow ? "animate-float-slower" : "animate-float-slow"
        } inline-flex items-center gap-1.5 rounded-lg border border-[#22E19D] bg-[#0D0314]/90 px-3 py-1.5 font-pixel text-[10px] tracking-wider text-[#22E19D] shadow-[0_0_15px_rgba(34,225,157,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_22px_rgba(34,225,157,0.45)] sm:text-xs`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#22E19D] shadow-[0_0_6px_#22E19D]" />
        <span>{children}</span>
      </div>
    </div>
  )
}

function PrimaryButton({
  children,
  className = "",
  href = HEROHUB_URL,
  target,
  rel,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
}) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-7 py-3.5 font-display text-base font-bold text-void transition-all duration-200 hover:shadow-[0_0_35px_-4px_rgba(34,225,157,0.85)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${className}`}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

function SecondaryButton({
  children,
  className = "",
  href,
  target,
  rel,
}: {
  children: React.ReactNode
  className?: string
  href: string
  target?: string
  rel?: string
}) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-mint bg-void/80 px-7 py-3.5 font-display text-base font-bold text-mint shadow-[0_0_20px_-5px_rgba(34,225,157,0.3)] transition-all duration-200 hover:bg-mint/10 hover:shadow-[0_0_30px_-4px_rgba(34,225,157,0.6)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${className}`}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

/* ---------------------------------------------------------------- */
/* Nav + Hero — Dark                                                 */
/* ---------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Inicio", href: "#top" },
  { label: "Itch.io & Entregas", href: "#entregas" },
  { label: "Guía Hero Hub & Pitch", href: "#guia-pitch" },
  { label: "Incubación GJ+", href: "#gamejamplus" },
  { label: "Mentores", href: "#mentores" },
  { label: "Preguntas", href: "#preguntas" },
]

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="http://cracktivelab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/assets/cracktivelab-logo-light.png"
            alt="CracktiveLab"
            className="h-9 w-auto"
          />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm font-medium text-lavender transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <PrimaryButton
          href={HEROHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2.5 text-sm"
        >
          Ir a Hero Hub
        </PrimaryButton>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-void">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-grape/50 blur-[120px]" />
        <div className="absolute right-[8%] top-[30%] h-72 w-72 rounded-full bg-mint/20 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.12] animate-[grid-pan_6s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(209,179,224,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(209,179,224,0.5) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-mint/40 bg-grape/30 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_2px_rgba(34,225,157,0.9)]" />
            <span className="text-xs font-medium text-lavender sm:text-sm">
              FASE POST-JAM · ENTREGAS CERRADAS · GAMEJAMPLUS 26/27
            </span>
          </div>

          <div className="relative mb-6">
            <h1 className="sr-only">Caribe Game Jam 2026</h1>
            <div className="relative inline-block max-w-full">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-mint/15 blur-2xl" />
              <img
                src="/assets/cgj2026-logo.png"
                alt="Caribe Game Jam 2026"
                className="h-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[490px] object-contain drop-shadow-[0_10px_35px_rgba(34,225,157,0.3)] select-none transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-lavender sm:text-lg">
            ¡Gracias por 48 horas épicas de creación en Barranquilla! La maratón
            presencial terminó, pero el viaje de tu videojuego apenas comienza.
            El plazo de pitch y categorías ya cerró. Explora los juegos en
            Itch.io y consulta tu proyecto y los próximos anuncios en Hero Hub.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <PrimaryButton
              href={HEROHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 text-base sm:text-lg"
            >
              CONSULTAR MI PROYECTO EN HERO HUB
            </PrimaryButton>
            <SecondaryButton
              href={ITCH_JAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 text-base sm:text-lg"
            >
              EXPLORAR LA JAM EN ITCH.IO
            </SecondaryButton>
          </div>
        </div>

        {/* Visual: Key Visual + delivery status */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-[500px]">
            {/* Background card accent */}
            <div className="absolute inset-0 rotate-2 rounded-3xl border border-white/10 bg-grape/30" />
            <div className="relative -rotate-1 overflow-hidden rounded-3xl border-2 border-mint/40 bg-gradient-to-b from-void/90 via-grape/25 to-void p-3 sm:p-5 shadow-[0_0_50px_-10px_rgba(34,225,157,0.3)]">
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-mint/15 blur-3xl" />
              </div>

              <img
                src="/assets/cgj2026-key-visual.png"
                alt="Caribe Game Jam 2026 - Ilustración oficial del evento"
                className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Badges pixel flotantes estratégicos */}
            <FloatingPixelTag
              className="-top-3 -left-2 sm:-top-4 sm:-left-4"
              rotate="-rotate-6"
            >
              [ JAM COMPLETED ]
            </FloatingPixelTag>

            <FloatingPixelTag
              className="-top-2.5 -right-2 sm:-top-3.5 sm:-right-4"
              rotate="rotate-[4deg]"
              slow
            >
              [ PITCH CLOSED ]
            </FloatingPixelTag>

            <FloatingPixelTag
              className="-bottom-3.5 right-6 sm:right-10"
              rotate="-rotate-2"
            >
              [ GAMEJAMPLUS 26/27 ]
            </FloatingPixelTag>
          </div>

          <div className="mt-8 w-full max-w-[480px]">
            <DeliveryStatusCard />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Ribbon de métricas — Dark                                         */
/* ---------------------------------------------------------------- */

const METRICS = [
  {
    stat: "48 Horas",
    desc: "Maratón presencial completada con éxito en Universidad de la Costa.",
  },
  {
    stat: "Paso 1: Itch.io",
    desc: "Build jugable vinculada a la Jam oficial GameJamPlus 26/27.",
  },
  {
    stat: "Paso 2: Hero Hub",
    desc: "Ficha de juego, video pitch y selección de categorías competitivas.",
  },
  {
    stat: "Incubación GJ+",
    desc: "Aceleración y mentorías internacionales para proyectos seleccionados.",
  },
]

function MetricsRibbon() {
  return (
    <section className="border-y border-white/10 bg-void">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => (
          <div
            key={m.stat}
            className="rounded-2xl border border-white/10 bg-grape/15 p-6 transition-colors hover:border-mint/50"
          >
            <div className="font-display text-2xl font-bold text-mint">
              {m.stat}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-lavender">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — Publicación en Itch.io — Light (#F8F9FA)               */
/* ---------------------------------------------------------------- */

const ITCH_STEPS = [
  {
    step: "01",
    title: "1. Unirse a la Jam",
    desc: "Todos los miembros de tu equipo deben haberse unido a la página oficial en Itch.io (itch.io/jam/gamejamplus-2627).",
    tag: "Requisito previo",
  },
  {
    step: "02",
    title: "2. Crear y Configurar el Proyecto",
    desc: "Crea el proyecto de tu juego en tu cuenta de Itch.io, sube la build jugable, agrega capturas de pantalla (screenshots), descripción, etiquetas (tags) e instrucciones de cómo jugar.",
    tag: "Build & Contenido",
  },
  {
    step: "03",
    title: "3. Visibilidad Pública",
    desc: "Asegúrate de configurar la página del juego como Pública (no en borrador ni restringida) para que evaluadores y jugadores puedan acceder.",
    tag: "Configuración",
  },
  {
    step: "04",
    title: "4. Vincular a la Jam",
    desc: "Entra a la página de la Jam en Itch.io, envía tu proyecto y guarda el enlace directo de tu juego (https://tu-usuario.itch.io/tu-juego), ya que Hero Hub rechazará enlaces de Drive, GitHub o OneDrive.",
    tag: "Enlace oficial",
  },
]

function ItchSubmission() {
  return (
    <section id="entregas" className="bg-[#F8F9FA] text-void">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-5">
            <PixelBadge tone="purple">ARCHIVO · ITCH.IO OFICIAL</PixelBadge>
          </div>
          <h2 className="font-display text-4xl font-bold text-void sm:text-5xl">
            Prototipos en <span className="text-grape">Itch.io</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-void/70">
            La entrega de proyectos ya cerró. Conservamos esta guía como
            referencia de los requisitos de publicación y vinculación a la
            11.ª Edición de GameJamPlus en Itch.io; no es una convocatoria abierta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITCH_STEPS.map((s) => (
            <article
              key={s.step}
              className="flex flex-col justify-between rounded-2xl border border-void/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-grape/40 hover:shadow-[0_20px_50px_-24px_rgba(89,12,139,0.35)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-[11px] font-bold text-grape">
                    {s.step}
                  </span>
                  <span className="rounded-full bg-grape/10 px-2.5 py-0.5 text-xs font-semibold text-grape">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-void">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-void/70">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={ITCH_JAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-grape px-8 py-4 font-display text-base font-bold text-white transition-all duration-200 hover:bg-[#43096b] hover:shadow-[0_15px_30px_-10px_rgba(89,12,139,0.5)]"
          >
            IR A LA JAM EN ITCH.IO →
          </a>
          <span className="text-xs text-void/60">
            Enlace oficial:{" "}
            <code className="font-mono text-grape font-semibold">
              https://itch.io/jam/gamejamplus-2627
            </code>
          </span>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — Guía Rápida Hero Hub & Pitch — White (#FFFFFF)         */
/* ---------------------------------------------------------------- */

const HEROHUB_STEPS = [
  {
    step: "01",
    phase: "Paso 1 · Game Submission",
    title: "Iniciar Envío del Juego",
    items: [
      "Inicia sesión en herohub.gamejamplus.com y dirígete a la sección '2. Build your team'.",
      "Haz clic en el botón 'Submit my game' en tu panel de equipo.",
      "Verifica los 5 puntos del checklist inicial antes de continuar al formulario.",
    ],
  },
  {
    step: "02",
    phase: "Paso 2 · Incubación y Datos",
    title: "Ficha Técnica e Incubación",
    items: [
      "Marca SÍ (Yes) en: 'Do you want to take part in the INCUBATION stage?' para acceder a mentorías y aceleración.",
      "Ingresa el título (máx. 80 caracteres) y el enlace exacto de Itch.io (https://usuario.itch.io/juego).",
      "Define responsable, descripción corta (2–3 oraciones), géneros, temáticas, plataformas, gráficos (2D/2.5D/3D) y motor.",
      "Haz clic UNA sola vez en 'Submit Game'.",
    ],
  },
  {
    step: "03",
    phase: "Paso 3 · Pitch Submission",
    title: "Subir el Video Pitch",
    items: [
      "Con el juego en estado SUBMITTED, se desbloquea la tarjeta 'Pitch submission'.",
      "Pega el enlace completo (https://...) de YouTube, Vimeo o Google Drive (con permisos públicos de visualización).",
      "Haz clic en 'Send pitch' (requisito indispensable para avanzar a la fase de incubación).",
    ],
  },
  {
    step: "04",
    phase: "Paso 4 · Categories",
    title: "Selección de Categorías",
    items: [
      "Haz clic en 'Choose categories' para postular en ramas específicas.",
      "Marca tu build para 'Best PC Game' o 'Best Mobile Game', y elige Prize Categories opcionales (Ready to Launch, Diverse by Design, Green Play, etc.).",
      "Nota: Compites automáticamente en Arte, Audio, Game Design, Narrativa, Mejor Juego Regional, Mejor Pitch y GOTY.",
    ],
  },
]

const HEROHUB_ERRORS = [
  {
    error: "« O link precisa ser da página do jogo no itch.io »",
    solution:
      "Asegúrate de pegar la URL directa de la página pública del juego en Itch.io (ej: https://usuario.itch.io/mi-juego). No uses enlaces de Google Drive, Dropbox, GitHub ni la URL general de la Jam.",
  },
  {
    error: "« Envie o jogo primeiro: o pitch vai junto com ele »",
    solution:
      "Primero debes completar y enviar la tarjeta inicial de 'Game submission'. Una vez que el juego figure como SUBMITTED, se habilitarán las tarjetas de Pitch y Categorías.",
  },
  {
    error: "« Só quem enviou este projeto pode editá-lo »",
    solution:
      "Solo el compañero de equipo que envió inicialmente el formulario de 'Game submission' tiene permisos para modificar la ficha del juego. Coordina con esa persona para cualquier ajuste.",
  },
]

function HeroHubGuide() {
  return (
    <section id="guia-pitch" className="bg-white text-void">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-5">
            <PixelBadge tone="purple">ARCHIVO · HERO HUB &amp; PITCH</PixelBadge>
          </div>
          <h2 className="font-display text-4xl font-bold text-void sm:text-5xl">
            Guía de referencia: Juego, Video Pitch y Categorías en{" "}
            <span className="text-grape">Hero Hub</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-void/70">
            El plazo de pitch y categorías finalizó el 20 de octubre de 2026 a
            las 23:59 BRT. Estas instrucciones de{" "}
            <strong className="text-void">herohub.gamejamplus.com</strong> se
            conservan como referencia del proceso de postulación ya cerrado.
          </p>
        </div>

        {/* Regla de Oro del Equipo */}
        <div className="mt-12 rounded-2xl border-2 border-grape/30 bg-grape/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-grape font-pixel text-xs text-white">
              !
            </span>
            <h3 className="font-display text-xl font-bold text-grape">
              Regla de Oro para Equipos en Hero Hub
            </h3>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-void/10 bg-white p-5 shadow-sm">
              <span className="font-pixel text-[9px] font-bold text-grape">
                FICHA DE JUEGO (GAME SUBMISSION)
              </span>
              <p className="mt-2 text-sm leading-relaxed text-void/80">
                <strong className="text-void">
                  Solo UNA (1) persona del equipo
                </strong>{" "}
                enviaba el formulario del juego. Solo ese mismo integrante
                podía editar los datos de la ficha antes del cierre.
              </p>
            </div>
            <div className="rounded-xl border border-void/10 bg-white p-5 shadow-sm">
              <span className="font-pixel text-[9px] font-bold text-[#0f8b5f]">
                PITCH Y CATEGORÍAS
              </span>
              <p className="mt-2 text-sm leading-relaxed text-void/80">
                Una vez enviado el juego, las tarjetas de{" "}
                <strong className="text-void">Pitch</strong> y{" "}
                <strong className="text-void">Categorías</strong> quedaban
                habilitadas.{" "}
                <strong className="text-void">
                  Cualquier miembro del equipo
                </strong>{" "}
                podía enviarlas o actualizarlas hasta el cierre del plazo,
                el 20 de octubre de 2026 a las 23:59 BRT. Ese plazo ya finalizó.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {HEROHUB_STEPS.map((s) => (
            <article
              key={s.step}
              className="flex flex-col justify-between rounded-2xl border border-void/10 bg-[#F8F9FA] p-7 transition-all duration-300 hover:border-grape/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-void/10 pb-3">
                  <span className="font-pixel text-xs font-bold text-grape">
                    {s.step}
                  </span>
                  <span className="font-pixel text-[9px] text-void/60">
                    {s.phase}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-void">
                  {s.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-void/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-grape" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Solución de Errores Frecuentes */}
        <div className="mt-14 rounded-2xl border border-void/10 bg-[#F8F9FA] p-6 sm:p-8">
          <div className="mb-6">
            <span className="font-pixel text-[10px] tracking-wider text-grape">
              SOLUCIÓN DE PROBLEMAS
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-void">
              Mensajes y Errores Frecuentes en la Plataforma
            </h3>
            <p className="mt-1 text-sm text-void/60">
              Hero Hub emite alertas en portugués. Aquí tienes cómo resolver
              cada una rápidamente:
            </p>
          </div>

          <div className="space-y-4">
            {HEROHUB_ERRORS.map((err, i) => (
              <div
                key={i}
                className="rounded-xl border border-void/10 bg-white p-5 shadow-sm"
              >
                <div className="font-mono text-sm font-bold text-[#b42318]">
                  {err.error}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-void/70">
                  <strong className="text-void">Solución:</strong>{" "}
                  {err.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <PrimaryButton
            href={HEROHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-8 py-4"
          >
            CONSULTAR MI PROYECTO EN HERO HUB
          </PrimaryButton>
          <span className="text-xs text-void/60">
            Plataforma oficial:{" "}
            <code className="font-mono text-grape font-semibold">
              https://herohub.gamejamplus.com
            </code>
          </span>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — Ruta de Incubación GameJamPlus — Deep Purple (#590C8B)  */
/* ---------------------------------------------------------------- */

const GJP_PHASES = [
  {
    phase: "01",
    name: "1. Maratón 48H",
    status: "Completada",
    badgeClass: "bg-white/20 text-white",
    desc: "Prototipo funcional creado en Barranquilla durante el fin de semana presencial en Universidad de la Costa.",
  },
  {
    phase: "02",
    name: "2. Entrega + Pitch",
    status: "Cerrada",
    badgeClass: "bg-white/20 text-white",
    desc: "Plazo de pitch y categorías finalizado el 20 de octubre de 2026 a las 23:59 BRT. Consulta tu proyecto en Hero Hub.",
  },
  {
    phase: "03",
    name: "3. Incubación GJ+",
    status: "Noviembre - Marzo",
    badgeClass: "bg-grape/90 text-mint border border-mint/40",
    desc: "Mentorías de negocio, aceleración, perfeccionamiento de build y market research con expertos internacionales.",
  },
  {
    phase: "04",
    name: "4. Semifinales y Gran Final",
    status: "Rumbo Global",
    badgeClass: "bg-grape/90 text-lavender border border-white/20",
    desc: "Exposición internacional ante publishers, inversionistas y la final mundial de GameJamPlus.",
  },
]

function GameJamPlus() {
  return (
    <section
      id="gamejamplus"
      className="relative overflow-hidden bg-grape text-white"
    >
      <img
        src="/assets/crackvibes_bg2.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-grape/80 via-grape/70 to-void/85 mix-blend-multiply" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-mint/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-5">
            <PixelBadge>
              SIGUIENTE ETAPA · COPA MUNDIAL DE CREACIÓN DE VIDEOJUEGOS
            </PixelBadge>
          </div>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            De tu Prototipo a un Estudio Real:{" "}
            <span className="text-mint">Etapa de Incubación GJ+ 26/27</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-lavender">
            Los proyectos desarrollados en la Caribe Game Jam que marcaron{" "}
            <strong className="text-white">'Yes'</strong> en la pregunta de
            Incubación y enviaron su Video Pitch dentro del plazo cumplen esos
            requisitos para el proceso de selección. Durante la incubación, los
            equipos seleccionados recibirán mentoría especializada, validación
            comercial, formación en negocios y acceso a la final regional y
            mundial.
          </p>
        </div>

        {/* 4 Phases Flow */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GJP_PHASES.map((p, i) => (
            <div key={p.phase} className="relative">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-mint/30 bg-white/5 p-7 backdrop-blur-md transition-colors hover:border-mint/70">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-pixel text-[11px] text-mint">
                      {p.phase}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-pixel text-[8px] tracking-wider ${p.badgeClass}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-lavender">
                    {p.desc}
                  </p>
                </div>
              </div>
              {i < GJP_PHASES.length - 1 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 font-display text-2xl font-bold text-mint lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-mint/30 bg-void/60 p-6 backdrop-blur-md">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="font-pixel text-[9px] tracking-wider text-mint">
                IMPORTANTE PARA LA INCUBACIÓN
              </span>
              <h4 className="mt-1 font-display text-lg font-bold text-white">
                Requisitos indispensables para calificar a la etapa de
                Incubación
              </h4>
              <p className="mt-1 text-sm text-lavender">
                La postulación requería marcar "Yes" en Hero Hub y enviar el
                Video Pitch antes del cierre. Mantén la página de Itch.io
                pública y consulta los próximos anuncios oficiales.
              </p>
            </div>
            <PrimaryButton
              href={HEROHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none rounded-xl px-6 py-3 text-sm"
            >
              Consultar Hero Hub
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
/* ---------------------------------------------------------------- */
/* Section — Road to Caribe Game Jam · CrackVibes & Mentores — White */
/* ---------------------------------------------------------------- */

const MENTORS = [
  {
    name: "Juan Pablo Gomez",
    role: "Programación",
    studio: "Rival Arts",
    img: "/mentors/Juan Pablo Gomez.jpg",
    fallback: "/assets/mentors/juan-pablo-gomez.svg",
  },
  {
    name: "Hender Ortiz",
    role: "Programación",
    studio: "Aventuras Bonitas",
    img: "/mentors/Hender Ortiz.jpeg",
    fallback: "/assets/mentors/hender-ortiz.svg",
  },
  {
    name: "Juan Miranda",
    role: "Programación",
    studio: "Maleiwa Studio",
    img: "/mentors/Juan Miranda.jpg",
    fallback: "/assets/mentors/juan-miranda.svg",
  },
  {
    name: "Erick Velilla",
    role: "Programación",
    studio: "Cracktive Lab",
    img: "/mentors/Erick Velilla.png",
    fallback: "/assets/mentors/erick-velilla.svg",
  },
  {
    name: "José Angulo",
    role: "Audio",
    studio: "Joseisaudio",
    img: "/mentors/Jose Angulo.jpg",
    fallback: "/assets/mentors/jose-angulo.svg",
  },
  {
    name: "David Barreto",
    role: "Arte",
    studio: "Rival Arts",
    img: "/mentors/David Barreto.png",
    fallback: "/assets/mentors/david-barreto.svg",
  },
  {
    name: "Paulo Peña",
    role: "Arte",
    studio: "Maleiwa Studio",
    img: "/mentors/Paulo Pena.png",
    fallback: "/assets/mentors/paulo-pena.svg",
  },
  {
    name: "Jorge Martinez",
    role: "Diseño",
    studio: "Maleiwa Studio",
    img: "/mentors/Jorge Martinez.png",
    fallback: "/assets/mentors/jorge-martinez.svg",
  },
]

function CrackVibes() {
  return (
    <section id="mentores" className="bg-white text-void scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border-2 border-grape/20 shadow-[0_30px_80px_-40px_rgba(89,12,139,0.5)] lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-12">
            <div className="mb-4">
              <PixelBadge tone="purple">ROAD TO CARIBE GAME JAM</PixelBadge>
            </div>
            <h2 className="font-display text-3xl font-bold text-void sm:text-4xl">
              CrackVibes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-void/70">
              Antes de la Jam, nuestra comunidad se prepara. A través de
              CrackVibes desarrollamos encuentros de aprendizaje y conexión con
              profesionales de la industria para fortalecer habilidades y llegar
              mejor preparados.
            </p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
            <img
              src="/assets/crackvibes_bg.jpg"
              alt="Comunidad CrackVibes reunida en un encuentro previo a la Caribe Game Jam"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-grape/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 font-display text-2xl font-bold text-void">
            Mentores Confirmados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENTORS.map((m) => (
              <article key={m.name} className="group text-center">
                <div className="mx-auto aspect-square w-full overflow-hidden rounded-2xl border border-void/10 bg-[#0D0314] shadow-sm transition-all duration-300 group-hover:border-mint/50 group-hover:shadow-[0_0_20px_-5px_rgba(34,225,157,0.3)]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      if (m.fallback && e.currentTarget.src !== m.fallback) {
                        e.currentTarget.src = m.fallback
                      }
                    }}
                  />
                </div>
                <h4 className="mt-3 font-display text-sm font-bold text-void">
                  {m.name}
                </h4>
                <p className="text-xs text-void/60">{m.role}</p>
                <p className="text-xs font-semibold text-grape">{m.studio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — Patrocinadores y Aliados — Light                        */
/* ---------------------------------------------------------------- */

type Logo = { name: string; src?: string; dark?: boolean }

const SPONSORS: Logo[] = [
  { name: "IDITEK", src: "/assets/iditek-new.png", dark: true },
  { name: "CUC", src: "/assets/cuc-white.png", dark: true },
  { name: "Mito", src: "/assets/mito.png", dark: true },
  { name: "EquinoxioLab", src: "/assets/equinoxiolab.webp", dark: true },
  { name: "One Pc", src: "/assets/op.png", dark: true },
  {
    name: "Frecuencia Gamer",
    src: "/assets/frecuencia-gamer-logo.png",
    dark: true,
  },
]

const ALLIES: Logo[] = [
  { name: "IGDA Colombia", src: "/assets/igda.png", dark: true },
  { name: "First Flame", src: "/assets/first-flame.png", dark: true },
  { name: "Maleiwa Studio", src: "/assets/maleiwa.png", dark: true },
  {
    name: "Aventuras Bonitas",
    src: "/assets/aventuras-bonitas.png",
    dark: true,
  },
  { name: "Rival Arts", src: "/assets/rival-arts.png", dark: true },
  { name: "FOMO", src: "/assets/fomo.svg", dark: true },
  { name: "CaribeDev", src: "/assets/caribedev.png", dark: true },
]

function LogoCard({
  logo,
  height,
  imgMax,
}: {
  logo: Logo
  height: string
  imgMax: string
}) {
  if (!logo.src) {
    return (
      <div
        className={`flex ${height} items-center justify-center rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md ${
          logo.dark
            ? "border-void bg-void hover:border-mint/50"
            : "border-void/10 bg-white hover:border-grape/40"
        }`}
      >
        <span className="font-display font-bold tracking-wider text-white">
          {logo.name === "FOMO" ? (
            <span className="flex items-center gap-1.5 font-display text-xl font-black text-mint">
              <span className="font-pixel text-[11px] text-mint">▶</span>
              <span>FOMO</span>
            </span>
          ) : logo.name === "CaribeDev" ? (
            <span className="font-display text-lg font-bold text-white">
              Caribe<span className="font-black text-mint">Dev</span>
            </span>
          ) : (
            <span className="text-sm font-semibold text-lavender">
              {logo.name}
            </span>
          )}
        </span>
      </div>
    )
  }
  return (
    <div
      className={`flex ${height} items-center justify-center rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
        logo.dark ? "border-void bg-void" : "border-void/10 bg-white"
      }`}
    >
      <img
        src={logo.src}
        alt={logo.name}
        className={`${imgMax} w-auto object-contain`}
        loading="lazy"
      />
    </div>
  )
}

function Partners() {
  return (
    <section className="bg-[#F8F9FA] text-void">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex justify-center">
            <PixelBadge tone="purple">ALIADOS</PixelBadge>
          </div>
          <h2 className="font-display text-3xl font-bold text-void sm:text-4xl">
            Juntos fortalecemos el ecosistema de videojuegos del Caribe
            colombiano
          </h2>
        </div>

        {/* Organizador principal */}
        <div className="mx-auto mb-14 flex max-w-md flex-col items-center gap-4">
          <span className="font-pixel text-[9px] tracking-widest text-grape">
            ORGANIZA
          </span>
          <div className="flex h-28 w-full items-center justify-center rounded-2xl border border-void bg-void px-10 shadow-sm">
            <img
              src="/assets/cracktivelab-variant.png"
              alt="CracktiveLab"
              className="max-h-12 w-auto max-w-[80%] object-contain"
            />
          </div>
        </div>

        {/* Nivel 1 — Patrocinadores */}
        <div className="mb-12">
          <p className="mb-5 text-center font-pixel text-[9px] tracking-widest text-grape">
            PATROCINADORES
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
            {SPONSORS.map((s) => (
              <LogoCard
                key={s.name}
                logo={s}
                height="h-28"
                imgMax="max-h-14 max-w-[80%]"
              />
            ))}
          </div>
        </div>

        {/* Aliados */}
        <div>
          <p className="mb-5 text-center font-pixel text-[9px] tracking-widest text-grape">
            ALIADOS
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {ALLIES.map((a) => (
              <LogoCard
                key={a.name}
                logo={a}
                height="h-24"
                imgMax="max-h-12 max-w-[70%]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — FAQ acordeón — Dark                                     */
/* ---------------------------------------------------------------- */

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "¿Dónde debo subir el archivo ejecutable/jugable de mi videojuego?",
    a: (
      <span>
        En tu cuenta de Itch.io como proyecto público y enviado a la página
        oficial de la jam:{" "}
        <a
          href={ITCH_JAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-mint hover:underline"
        >
          itch.io/jam/gamejamplus-2627
        </a>
        . Debe incluir build jugable, descripción, capturas de pantalla e
        instrucciones claras de juego.
      </span>
    ),
  },
  {
    q: "¿Por qué Hero Hub rechaza el enlace de mi juego?",
    a: (
      <span>
        Porque debe ser el enlace directo a la página pública del juego en
        Itch.io con formato{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-mint">
          https://tu-usuario.itch.io/tu-juego
        </code>
        . No se aceptan enlaces de Google Drive, Dropbox, GitHub ni enlaces
        incompletos sin <code>https://</code>.
      </span>
    ),
  },
  {
    q: "¿Todos los miembros del equipo deben llenar el formulario del juego en Hero Hub?",
    a: "No. Solo UN (1) representante del equipo debe enviar el formulario inicial de Game Submission (y solo esa persona podrá editarlo). Sin embargo, todos los miembros deben estar registrados dentro del equipo en Hero Hub y haberse unido a la jam en Itch.io.",
  },
  {
    q: "¿Cuándo cerró el plazo para subir el Video Pitch y elegir categorías?",
    a: "El plazo finalizó el martes 20 de octubre de 2026 a las 23:59, hora de Brasilia (BRT), dos días después del cierre de la Jam en nuestra sede. Consulta tu proyecto en Hero Hub y los próximos anuncios oficiales de GameJamPlus.",
  },
  {
    q: "¿Qué pasa si quiero cambiar el enlace del Pitch o las categorías después de enviarlos?",
    a: "Las opciones 'Update pitch' y 'Change categories' estaban disponibles antes del cierre del plazo, el 20 de octubre de 2026 a las 23:59 BRT. Ese plazo ya finalizó; consulta el estado de tu proyecto en Hero Hub.",
  },
  {
    q: "¿Cómo podemos entrar a la etapa de Incubación de GameJamPlus?",
    a: "La postulación requería responder 'Yes' en la pregunta 'Do you want to take part in the INCUBATION stage?' del formulario de Hero Hub y enviar el Video Pitch antes del cierre. El plazo ya finalizó. Los proyectos seleccionados accederán a mentorías internacionales, aceleración y visibilidad ante publishers; sigue los anuncios oficiales de GameJamPlus.",
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="preguntas" className="bg-void text-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start gap-4">
          <PixelBadge>PREGUNTAS FRECUENTES</PixelBadge>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#150522] transition-colors hover:border-mint/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-white sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex-none font-display text-2xl text-mint transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 leading-relaxed text-lavender">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section — Institucional CracktiveLab                              */
/* ---------------------------------------------------------------- */

function Institutional() {
  return (
    <section className="bg-void">
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-mint/20 bg-gradient-to-br from-grape/70 via-grape/30 to-void p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <PixelBadge>CRACKTIVELAB</PixelBadge>
              <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                Epicentro de industrias digitales
              </h2>
              <p className="mt-4 text-base leading-relaxed text-lavender sm:text-lg">
                Entidad sin ánimo de lucro que dinamiza la industria de
                videojuegos y contenidos digitales en el Caribe colombiano,
                impulsando el talento creativo, la formación y el desarrollo de
                nuevas oportunidades para nuestra comunidad.
              </p>
            </div>

            <div className="flex-none">
              <PrimaryButton
                href="http://cracktivelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-8 py-4"
              >
                Sobre CracktiveLab
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Section 5 — Final CTA — Dark                                      */
/* ---------------------------------------------------------------- */

function FinalCta() {
  return (
    <section id="entregas-final" className="bg-void">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border-2 border-mint bg-gradient-to-br from-grape/60 via-void to-void px-8 py-16 text-center shadow-[0_0_80px_-20px_rgba(34,225,157,0.7)] sm:px-16">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-mint/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-grape/60 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex justify-center">
              <PixelBadge>ENTREGAS CERRADAS · CARIBE GAME JAM 2026</PixelBadge>
            </div>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              El viaje de tu juego{" "}
              <span className="text-mint">continúa</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-lavender sm:text-lg">
              La entrega de pitch y categorías ya cerró. Consulta tu proyecto en
              Hero Hub, explora la jam en Itch.io y sigue los próximos anuncios
              de GameJamPlus 26/27.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton
                href={HEROHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 text-base sm:text-lg"
              >
                IR A HERO HUB
              </PrimaryButton>
              <SecondaryButton
                href={ITCH_JAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 text-base sm:text-lg"
              >
                VER JAM EN ITCH.IO
              </SecondaryButton>
            </div>
            <p className="mt-8 text-sm text-lavender">
              Organizado por CracktiveLab (
              <a
                href="http://cracktivelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint underline-offset-2 hover:underline"
              >
                cracktivelab.com
              </a>
              ).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Footer — Charcoal                                                 */
/* ---------------------------------------------------------------- */

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cracktivelab?stkn=dGJ3c2s1M2d4Mjc5",
    icon: (
      <path d="M12 7.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9Zm5.8-7.6a1.05 1.05 0 1 1-1.05-1.05A1.05 1.05 0 0 1 17.8 7.3ZM20.9 8.4a5.2 5.2 0 0 0-1.4-3.7 5.2 5.2 0 0 0-3.7-1.4C14.3 3.2 9.7 3.2 8.2 3.3A5.2 5.2 0 0 0 4.5 4.7 5.2 5.2 0 0 0 3.1 8.4C3 9.9 3 14.5 3.1 16a5.2 5.2 0 0 0 1.4 3.7 5.2 5.2 0 0 0 3.7 1.4c1.5.1 6.1.1 7.6 0a5.2 5.2 0 0 0 3.7-1.4 5.2 5.2 0 0 0 1.4-3.7c.1-1.5.1-6.1 0-7.6Zm-1.9 9.2a2.9 2.9 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a2.9 2.9 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3a2.9 2.9 0 0 1 1.7-1.7c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4a2.9 2.9 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cracktivelab",
    icon: (
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
    ),
  },
]

function Footer() {
  return (
    <footer className="bg-[#09020D]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a
            href="#top"
            aria-label="Volver al inicio"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <img
              src="/assets/cracktivelab-blanco-verde.png"
              alt="CracktiveLab"
              className="h-8 w-auto"
            />
          </a>
          <p className="font-pixel text-[9px] leading-relaxed text-lavender">
            CARIBE GAME JAM 2026
          </p>
          <a
            href="http://cracktivelab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lavender/70 transition-colors hover:text-mint"
          >
            cracktivelab.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-grape/20 text-lavender transition-all hover:border-mint hover:text-mint"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden
              >
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5">
        <p className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-xs text-lavender/60 md:flex-row md:text-left">
          <span>© 2026 CracktiveLab. Todos los derechos reservados.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-mint">
              Términos
            </a>
            <a href="#" className="hover:text-mint">
              Privacidad
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.title = "Caribe Game Jam 2026"
  }, [])

  return (
    <div className="min-h-screen bg-void">
      <Nav />
      <main>
        <Hero />
        <MetricsRibbon />
        <ItchSubmission />
        <HeroHubGuide />
        <GameJamPlus />
        <CrackVibes />
        <Partners />
        <Faq />
        <Institutional />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
