'use client'

import { Header } from '../components/header'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      <Header 
        onProductClick={() => {}}
        onServicesClick={() => {}}
        onAboutClick={() => {}}
        onResourcesClick={() => {}}
      />
      <main className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-black bg-white/80 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl font-light mb-8">Get in Touch</h2>
          <p className="text-xl mb-6">
            Ready to revolutionize your industry with Humonos? Let&apos;s discuss how our decentralized intelligence solutions can transform your operations.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded border border-gray-300" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded border border-gray-300"></textarea>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-opacity-80 transition-colors">
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

