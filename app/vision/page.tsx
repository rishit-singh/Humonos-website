'use client'

import { Header } from '../components/header'

export default function Vision() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFFFF]">
      <Header
        onProductClick={() => { }}
        onServicesClick={() => { }}
        onAboutClick={() => { }}
        onResourcesClick={() => { }}
      />
      <main className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl text-black bg-white/80 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-light mb-8">Our Vision</h2>
          <p className="text-xl mb-6">
            We envision a future where intelligent, collaborative robotics revolutionize industries and enhance human capabilities. Humonos leads this transformation, creating systems that innovate and problem-solve in real-time.
          </p>
          <p className="text-xl mb-6">
            Our goal is to create a world where human creativity and machine efficiency work in perfect harmony, unlocking new possibilities across all sectors.
          </p>
          <p className="text-2xl font-medium">
            The future of intelligent, collaborative robotics is here, powered by Humonos.
          </p>
        </div>
      </main>
    </div>
  )
}

