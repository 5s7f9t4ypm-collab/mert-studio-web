import { ArrowUpRight, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">05 — İletişim</span>
          <h2 className="mt-6 font-heading text-5xl font-light leading-[0.95] tracking-tight text-foreground text-balance md:text-8xl">
            Birlikte
            <br />
            tasarlayalım.
          </h2>
          <a
            href="mailto:mert@hotmail.com"
            className="group mt-12 inline-flex items-center gap-3 font-heading text-2xl text-foreground transition-all duration-500 hover:gap-5 md:text-4xl"
          >
            mert@hotmail.com
            <ArrowUpRight className="h-7 w-7 text-primary transition-all duration-500 group-hover:rotate-45" />
          </a>
        </div>

        <div className="flex flex-col justify-end gap-10 md:col-span-5">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stüdyo</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Sokak Mahalle Adres<br />
                Kartal, İstanbul
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Telefon</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">+90 542 211 74 98</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
        <p className="font-heading text-2xl tracking-[0.2em] text-foreground">MERT</p>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          © 2026 MERT Mimarlik Stüdyosu — Tüm hakları saklıdır
        </p>
      </div>
    </section>
  )
}
