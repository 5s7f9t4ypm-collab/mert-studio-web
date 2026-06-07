"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Studio } from "@/components/studio"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    // root: true tüm tarayıcıyı o lüks akışa bırakır
    // lerp: 0.08 tam arkadaşının sitesindeki o ghosting yumuşaklık kıvamı
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-background">
        <h1 className="sr-only">Mert – İstanbul Mimarlık ve Üç Boyutlu Görselleştirme Ofisi</h1>
        <Sidebar />
        <main className="md:pl-72">
          <Hero />
          <Projects />
          <Studio />
          <Services />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  )
}