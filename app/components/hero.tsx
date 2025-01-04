import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const Hero = forwardRef<HTMLElement>((props, ref) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[90vh] overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1664447972862-e26efc5b709f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract technology background"
            fill
            className="object-cover object-center rounded-3xl blur-[0.5px] opacity-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-3xl" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight tracking-tight mb-3 md:mb-4 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
            Decentralized Intelligence
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)] font-medium">
            Scalable, adaptive robotics through decentralized intelligence. Our systems allow for self-organization, ensuring each agent contributes efficiently to the overall mission.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium hover:bg-opacity-90 transition-colors"
            >
              GET A DEMO
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 max-w-xs md:max-w-sm"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg">
            <p className="text-base md:text-lg text-gray-900">
              Our technology ensures that autonomous machines work together to achieve more, making real-time decisions as a cohesive unit.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
})

Hero.displayName = 'Hero'

