"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Ana Sayfa", href: "#home", index: "01" },
  { label: "Projeler", href: "/projects", index: "02" },
  { label: "Stüdyo", href: "#studio", index: "03" },
  { label: "Hizmetler", href: "#services", index: "04" },
  { label: "İletişim", href: "#contact", index: "05" },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  // Hem sayfa içi kaydırma hem de sayfa değişimi için akıllı fonksiyon
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false) // Tıklanınca menü her zaman kapansın

    // Eğer link "#" ile başlıyorsa ana sayfada kaydırma yap
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("#", "")
      const element = document.getElementById(id)
      
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    // Eğer "/projects" gibi farklı bir rota ise, e.preventDefault() 
    // çalışmaz ve Next.js otomatik olarak o sayfaya yönlendirir.
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-sidebar/95 px-6 py-4 backdrop-blur md:hidden">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="font-heading text-2xl tracking-[0.2em] text-foreground">
          MERT
        </a>
        <button
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground transition-all duration-500 hover:text-primary"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col justify-between border-r border-border bg-sidebar px-8 py-10 transition-all duration-500 md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Brand */}
        <div>
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="group block">
            <span className="block font-heading text-4xl leading-none tracking-[0.25em] text-foreground transition-all duration-500 group-hover:tracking-[0.3em]">
              MERT
            </span>
            <span className="mt-3 block text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
              Mimarlık Stüdyosu
            </span>
          </a>

          {/* Nav */}
          <nav className="mt-20">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="group flex items-baseline gap-4 py-3 transition-all duration-500"
                  >
                    <span className="font-mono text-[0.65rem] text-muted-foreground transition-all duration-500 group-hover:text-primary">
                      {item.index}
                    </span>
                    <span className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-5 text-[0.65rem] uppercase tracking-[0.25em]">
            <a
              href="#"
              className="text-muted-foreground transition-all duration-500 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-all duration-500 hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            İstanbul
            <br />© 2026 MERT Studio
          </p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <button
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  )
}