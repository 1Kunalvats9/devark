import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { Works } from "@/components/works"
import { ZoomParallax } from "@/components/WorkImagesParralax"
import { images } from "@/lib/images"
export default function Home() {

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <ZoomParallax images={images} />
        <TechMarquee />
        <Footer />
      </main>
      {/* <ZoomParallax images={images} /> */}
    </SmoothScroll>
  )
}
