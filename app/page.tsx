"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import { motion } from "framer-motion"
import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Studio } from "@/components/studio"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-background">
        <h1 className="sr-only">Mert – İstanbul Mimarlık ve Üç Boyutlu Görselleştirme Ofisi</h1>
        
        <Sidebar />
        
        <main className="md:pl-72">
          {/* İçeriklerin süzülerek gelmesi için motion.div ile sarmalıyoruz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <Projects />
            <Studio />
            <Services />
            <Contact />
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  )
}