import { forwardRef } from 'react'

export const Vision = forwardRef<HTMLElement>(function Vision(props, ref) {
  return (
    <section ref={ref} className="min-h-screen flex items-center py-24 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-8">Our Vision</h2>
        <p className="text-xl mb-6">
          We envision a future where intelligent, collaborative robotics revolutionize industries and enhance human capabilities. Humonos is at the forefront of this transformation, creating systems that not only automate tasks but also innovate and problem-solve in real-time.
        </p>
        <p className="text-xl mb-6">
          Our goal is to create a world where human creativity and machine efficiency work in perfect harmony, unlocking new possibilities and driving unprecedented progress across all sectors.
        </p>
        <p className="text-2xl font-medium">
          The future of intelligent, collaborative robotics is here, and it&apos;s powered by Humonos.
        </p>
      </div>
    </section>
  )
})

