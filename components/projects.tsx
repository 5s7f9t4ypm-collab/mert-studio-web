"use client"

import React, { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Casa Monolith",
    category: "Konut Mimarisi",
    year: "2025",
    location: "Dubai Hills",
    image: "/projects/project-01.png",
  },
  {
    title: "Travertine House",
    category: "İç Mekan",
    year: "2025",
    location: "Yalıkavak",
    image: "/projects/project-02.png",
  },
  {
    title: "The Concrete Block",
    category: "Ticari Yapı",
    year: "2024",
    location: "İstanbul",
    image: "/projects/project-03.png",
  },
  {
    title: "Dune Residence",
    category: "Konut Mimarisi",
    year: "2024",
    location: "Al Ain",
    image: "/projects/project-04.png",
  },
]

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Performans optimize: Ekran dışındaysa işlem yapma
      if (rect.top > windowHeight || rect.bottom < 0) return

      const items = containerRef.current.querySelectorAll(".premium-card")

      items.forEach((item, index) => {
        const element = item as HTMLElement
        const elementRect = element.getBoundingClientRect()
        
        // Elementin ekranın merkezine olan mesafesini hesaplıyoruz
        const elementCenter = elementRect.top + elementRect.height / 2
        const screenCenter = windowHeight / 2
        const distanceFromCenter = elementCenter - screenCenter

        // Asimetrik Kayma: Çift ve tek indeksli kartlara zıt ve farklı hızlarda akış veriyoruz
        // Bu sayede blok halinde durma hissi tamamen kırılıyor, her parça bağımsız hareket ediyor
        const cardSpeed = index % 2 === 0 ? -0.07 : 0.04
        const cardY = distanceFromCenter * cardSpeed

        // Resimlerin çerçeve içinde sinematik olarak süzülmesi (Parallax)
        const img = element.querySelector(".ghost-img") as HTMLElement
        const imgSpeed = 0.12
        const imgY = distanceFromCenter * imgSpeed

        // Yazıların ve detayların fotoğraftan bağımsız, gecikmeli gelmesi (Ghosting)
        const details = element.querySelector(".ghost-details") as HTMLElement
        const detailsY = cardY * 0.4 

        // Akıcı transform matrisleri uyguluyoruz
        element.style.transform = `translateY(${cardY}px)`
        if (img) {
          img.style.transform = `scale(1.15) translateY(${imgY}px)`
        }
        if (details) {
          details.style.transform = `translateY(${detailsY}px)`
          // Yaklaştıkça opaklığı artırarak hayalet efektini güçlendiriyoruz
          const opacity = Math.max(0.3, 1 - Math.abs(distanceFromCenter) / (windowHeight * 0.8))
          details.style.opacity = opacity.toString()
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // İlk açılış tetiklemesi

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="projects" className="px-6 py-32 md:px-16 md:py-48 bg-background" ref={containerRef}>
      {/* Section header */}
      <div className="mb-24 flex items-end justify-between border-b border-border pb-8">
        <div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">02 — Projeler</span>
          <h2 className="mt-4 font-heading text-4xl font-light tracking-tight text-foreground md:text-6xl">
            Seçili İşler
          </h2>
        </div>
        <span className="hidden font-mono text-xs text-muted-foreground md:block">/ 04</span>
      </div>

      {/* Yenilikçi, Kalıpları Yıkan Asimetrik Grid Düzeni */}
      <div className="grid grid-cols-1 gap-x-16 gap-y-32 md:grid-cols-2 md:gap-y-56">
        {projects.map((project, i) => (
          <div
            key={project.title}
            // premium-card: Akışın hesaplandığı ana gövde
            // md:mt-32 ile en baştan hizalamayı bozuyoruz ki şablon görüntüsü ilk saniyede yok olsun
            className={`premium-card group relative block will-change-transform transition-transform duration-500 ease-out ${
              i % 2 === 1 ? "md:mt-32" : ""
            }`}
          >
            {/* Görsel Çerçevesi */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-card">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                // ghost-img: Çerçevenin içinde bağımsız akan lüks görsel
                className="ghost-img h-[130%] w-full object-cover absolute -top-[15%] left-0 will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/0 transition-all duration-500 group-hover:bg-background/10" />
              
              {/* Minimal Ok Butonu */}
              <span className="absolute right-6 top-6 z-10 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 mix-blend-difference">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            {/* ghost-details: Fotoğraftan bağımsız akan, sonradan süzülen metin alanı */}
            <div className="ghost-details mt-8 flex items-start justify-between will-change-transform transition-all duration-500 ease-out">
              <div>
                <h3 className="font-heading text-3xl font-light text-foreground transition-all duration-500 group-hover:text-primary md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {project.category} · {project.location}
                </p>
              </div>
              <span className="font-mono text-xs tracking-wider text-muted-foreground mt-2">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects