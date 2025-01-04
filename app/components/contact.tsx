import { forwardRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export const Contact = forwardRef<HTMLElement>(function Contact(props, ref) {
  return (
    <section 
      ref={ref} 
      id="contact"
      className="min-h-screen flex items-center py-24 px-4 md:px-8 bg-white"
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-4xl font-light mb-6 md:mb-8">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 md:mb-6 mx-auto max-w-2xl leading-relaxed">
          Ready to revolutionize your industry with Humonos? Let&apos;s discuss how our decentralized intelligence solutions can transform your operations.
        </p>
        <Link
          href="mailto:jaskirat880singh@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-white hover:bg-opacity-80 transition-colors"
        >
          <Mail className="h-5 w-5 md:h-6 md:w-6" />
          Contact Us
          <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
        </Link>
      </div>
    </section>
  )
})

