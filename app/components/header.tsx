'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { Menu, X } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
})

interface HeaderProps {
  onProductClick: () => void
  onServicesClick: () => void
  onAboutClick: () => void
  onResourcesClick: () => void
}

export function Header({ onProductClick, onServicesClick, onAboutClick, onResourcesClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-4 py-2 md:px-8 md:py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className={`text-2xl md:text-3xl font-semibold text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] ${poppins.className}`}>
          Humonos
        </Link>
        <nav className="hidden md:block">
          <div className="flex items-center rounded-full bg-white/90 px-2 py-2">
            <button onClick={onProductClick} className="px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-50">
              Product
            </button>
            <button onClick={onServicesClick} className="px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-50">
              Services
            </button>
            <button onClick={onAboutClick} className="px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-50">
              About
            </button>
            <button onClick={onResourcesClick} className="px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-50">
              Resources
            </button>
          </div>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm mt-2 rounded-lg">
          <nav className="flex flex-col items-start py-2">
            <button onClick={() => { onProductClick(); toggleMenu(); }} className="w-full px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50">
              Product
            </button>
            <button onClick={() => { onServicesClick(); toggleMenu(); }} className="w-full px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50">
              Services
            </button>
            <button onClick={() => { onAboutClick(); toggleMenu(); }} className="w-full px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50">
              About
            </button>
            <button onClick={() => { onResourcesClick(); toggleMenu(); }} className="w-full px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50">
              Resources
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

