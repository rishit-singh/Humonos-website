import { forwardRef } from 'react'
import Image from 'next/image'

export const ProductInfo = forwardRef<HTMLElement>(function ProductInfo(props, ref) {
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-12 md:py-24 px-4 md:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6 md:gap-8 w-full md:max-w-xl mx-auto px-2 md:px-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light mb-3 md:mb-4">
                Scalable, adaptive robotics through decentralized intelligence
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                Our systems allow for self-organization, ensuring each agent contributes efficiently to the overall mission.
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full md:w-[110%] md:-right-[5%] mt-8 md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1717501219604-cc1902b5d845?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Neural network visualization representing decentralized intelligence"
              fill
              className="object-cover rounded-2xl md:rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
})
