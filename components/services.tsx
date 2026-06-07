import { Building2, Compass, Lamp, Trees } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Mimari Tasarım",
    description: "Konsept geliştirmeden uygulama projelerine kadar bütüncül mimari çözümler.",
  },
  {
    icon: Lamp,
    title: "İç Mekan",
    description: "Mekanın ruhunu yansıtan, ışık ve malzeme odaklı iç mekan tasarımı.",
  },
  {
    icon: Compass,
    title: "Danışmanlık",
    description: "Fizibilite, master plan ve tasarım yönetimi süreçlerinde stratejik rehberlik.",
  },
  {
    icon: Trees,
    title: "Peyzaj",
    description: "Yapıyı çevresiyle bütünleştiren, sürdürülebilir dış mekan kurguları.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="mb-16">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">04 — Hizmetler</span>
        <h2 className="mt-4 max-w-2xl font-heading text-4xl font-light tracking-tight text-foreground text-balance md:text-6xl">
          Fikirden mekâna uzanan bütüncül süreç
        </h2>
      </div>

      <div className="grid grid-cols-1 border-l border-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group border-b border-r border-t border-border p-8 transition-all duration-500 hover:bg-card"
          >
            <service.icon className="h-7 w-7 text-primary transition-all duration-500 group-hover:-translate-y-1" />
            <h3 className="mt-10 font-heading text-2xl font-normal text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
