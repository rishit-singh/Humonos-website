'use client'

import { Header } from '../components/header'

export default function About() {
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
          <h2 className="text-4xl font-light mb-8">Scalable, Autonomous Systems for the New Era</h2>
          <p className="text-xl mb-6">
            By utilizing decentralized AI and machine learning, our robots communicate, adapt, and optimize based on real-time data. This enables dynamic problem-solving in complex, high-stakes environments.
          </p>
          <p className="text-xl">
            Our systems allow for self-organization, ensuring each agent contributes efficiently to the overall mission, optimizing workflows and resource allocation.
          </p>
        </div>
      </main>
    </div>
  )
}

