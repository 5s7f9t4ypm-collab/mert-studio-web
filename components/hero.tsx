import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/projects/hero.png"
          alt="MERT Studio tarafından tasarlanan monolitik beton ve cam mimari yapı"
          className="h-full w-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>

      {/* Top meta */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-24 md:px-16 md:pt-12">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          Selected Works — 2026
        </span>
        <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground md:block">
          25.2048° N, 55.2708° E
        </span>
      </div>

      {/* Headline */}
      <div className="relative z-10 px-6 pb-16 md:px-16 md:pb-24">
        <h1 className="max-w-4xl font-heading text-[3.25rem] font-light leading-[0.95] tracking-tight text-foreground text-balance md:text-[7rem]">
          Mekânı zamansız bir deneyime dönüştürüyoruz.
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            MERT; mimarlık, iç mekan ve mekan tasarımında sadeliği, ışığı ve malzemenin
            dürüstlüğünü merkeze alan çağdaş bir tasarım stüdyosudur.
          </p>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-500 hover:gap-5"
          >
            Projeleri Keşfet
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
