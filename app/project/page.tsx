"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Buraya kendi projelerinizin yüksek çözünürlüklü görsellerini gireceksiniz
const galleryItems = [
  {
    id: 1,
    title: "Kanyon Villası",
    category: "Konut Mimarisi",
    location: "Bodrum",
    image: "/projects/project-01.png", 
  },
  {
    id: 2,
    title: "Sahra Pavilyonu",
    category: "Ticari Yapı",
    location: "Dubai",
    image: "/projects/project-02.png",
  },
  {
    id: 3,
    title: "Monolitik Ofis",
    category: "İç Mekan",
    location: "İstanbul",
    image: "/projects/project-03.png",
  },
  {
    id: 4,
    title: "Traverten Ev",
    category: "Konut Mimarisi",
    location: "Çeşme",
    image: "/projects/project-04.png",
  },
  {
    id: 5,
    title: "Minimalist Çatı Katı",
    category: "İç Mekan",
    location: "İzmir",
    image: "/projects/project-01.png",
  },
  {
    id: 6,
    title: "Göl Evi",
    category: "Konut Mimarisi",
    location: "Sapanca",
    image: "/projects/project-02.png",
  },
]

export default function ProjectsGallery() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Üst Kısım: Geri Dönüş ve Başlık */}
        <div className="mb-24 flex flex-col gap-12">
          <Link 
            href="/" 
            className="group flex w-max items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Ana Sayfaya Dön
          </Link>
          
          <div className="flex items-end justify-between border-b border-border pb-8">
            <div>
              <h1 className="font-heading text-5xl font-light tracking-tight text-foreground md:text-7xl">
                Tüm Projeler
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Mekânı zamansız bir deneyime dönüştürdüğümüz, estetik ve işlevselliğin kesiştiği tüm mimari çalışmalarımız.
              </p>
            </div>
            <span className="hidden font-mono text-xs text-muted-foreground md:block">
              {galleryItems.length} PROJE
            </span>
          </div>
        </div>

        {/* Galeri Grid Alanı */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              // Framer Motion ile sayfayı kaydırdıkça süzülerek gelme (Smooth Reveal) efekti
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: index % 2 === 0 ? 0 : 0.15 // Çift ve tek kolonlara farklı gecikme vererek asimetrik lüks akış sağlıyoruz
              }}
              className={`group relative flex flex-col ${index % 2 === 1 ? "md:mt-32" : ""}`}
            >
              {/* Görsel Alanı: Siyah/Beyazdan Rengarenk Olmaya Geçiş */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  // İşte o büyü: grayscale başlar, hover olunca grayscale-0 (renkli) olur
                  className="h-full w-full object-cover grayscale transition-all duration-[800ms] ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Proje Detayları */}
              <div className="mt-8 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-light text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <span className="font-mono text-xs tracking-wider text-muted-foreground mt-2">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
