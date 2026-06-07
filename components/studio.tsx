const stats = [
  { value: "120+", label: "Tamamlanan Proje" },
  { value: "14", label: "Yıllık Deneyim" },
  { value: "9", label: "Uluslararası Ödül" },
]

export function Studio() {
  return (
    <section id="studio" className="border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">03 — Stüdyo</span>
        </div>
        <div className="md:col-span-9">
          <p className="max-w-3xl font-heading text-3xl font-light leading-snug tracking-tight text-foreground text-balance md:text-5xl">
            Tasarımı bir gösteri değil, yaşanan bir deneyim olarak görüyoruz. Her proje;
            ışığın, malzemenin ve boşluğun sessiz diyaloğundan doğar.
          </p>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            2012'den bu yana, konuttan ticari yapılara uzanan geniş bir yelpazede,
            bağlamına saygılı ve zamansız mekanlar tasarlıyoruz. Disiplinler arası
            ekibimiz; mimari, iç mekan ve peyzajı tek bir bütüncül vizyonda buluşturur.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <span className="block font-heading text-5xl font-light text-foreground transition-all duration-500 group-hover:text-primary md:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
