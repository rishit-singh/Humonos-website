'use client'

import { Header } from '../components/header'

export default function Technology() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      <Header 
        onProductClick={() => {}}
        onServicesClick={() => {}}
        onAboutClick={() => {}}
        onResourcesClick={() => {}}
      />
      <main className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl text-black bg-white/80 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-light mb-8">Our Technology</h2>
          <p className="text-xl mb-6">
            At Humonos, we&apos;re building intelligent ecosystems that push the boundaries of autonomous systems. Our multi-agent systems use advanced coordination protocols, reinforcement learning, and predictive analytics to scale and evolve continuously.
          </p>
          <p className="text-xl">
            Our technology enables robots to optimize their actions in real-time, providing unmatched efficiency and transforming industries at an exponential scale.
          </p>
        </div>
      </main>
    </div>
  )
}

