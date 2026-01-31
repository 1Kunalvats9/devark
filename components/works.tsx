"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const projects = [
  {
    title: "Infeed Media",
    description: "Marketing and photoshooting agency",
    url: "https://infeed-weld.vercel.app/",
    tags: ["Next.js", "Fullstack", "GSAP", "TypeScript", "Marketing", "Photoshoot", "Agency", "Animations"],
    year: "2024",
  },
  {
    title: "Kunafa Mafias",
    description: "Shark Tank brand — premium kunafas and dishes",
    url: "https://kunafa-mafia.vercel.app/",
    tags: ["Next.js", "Fullstack", "E-Commerce", "Shark Tank", "GSAP", "TypeScript", "Backend", "Animations"],
    year: "2024",
  },
  {
    title: "Haridwar Elmas",
    description: "Cricket team of Uttarakhand",
    url: "https://www.haridwarelmas.cricket/",
    tags: ["Next.js", "Fullstack", "Sports", "Cricket", "GSAP", "TypeScript", "Website", "Animations"],
    year: "2023",
  },
  {
    title: "Neobrix",
    description: "Property and real estate",
    url: "https://neobrix.com",
    tags: ["Next.js", "Fullstack", "Real Estate", "Property", "GSAP", "TypeScript", "Backend", "Website"],
    year: "2023",
  },
]

function getProjectImagePath(title: string): string {
  return `/images/${title.toLowerCase().replace(/\s+/g, "_")}.jpg`
}

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — SELECTED WORKS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Our Portfolio & Expertise</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-8 md:py-12 works-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Mobile: inline image preview (no hover on touch) */}
              <div className="md:hidden order-0 w-full aspect-video rounded-lg overflow-hidden mb-4 bg-white/5">
                <img
                  src={getProjectImagePath(project.title)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(30%) contrast(1.05)" }}
                />
              </div>

              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 md:order-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile: visit site hint */}
              <span className="md:hidden order-3 font-mono text-[10px] tracking-wider text-muted-foreground mt-1">
                Tap to visit site →
              </span>
            </a>
          </motion.div>
        ))}

        {/* Floating Image — desktop only (hidden on touch / mobile) */}
        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg hidden md:block"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={getProjectImagePath(projects[hoveredIndex].title)}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
