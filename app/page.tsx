'use client'

import { useRef } from 'react'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { ProductInfo } from './components/product-info'
import { Vision } from './components/vision'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const productRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Header 
        onProductClick={() => scrollToSection(productRef)}
        onServicesClick={() => scrollToSection(featuresRef)}
        onAboutClick={() => scrollToSection(visionRef)}
        onResourcesClick={() => scrollToSection(contactRef)}
      />
      <main>
        <Hero ref={heroRef} />
        <ProductInfo ref={productRef} />
        <Features ref={featuresRef} />
        <Vision ref={visionRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  )
}

