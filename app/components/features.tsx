import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const Features = forwardRef<HTMLElement>((props, ref) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen flex items-center py-12 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-center text-gray-800">
          The robotics platform for quickly & securely bringing decentralized intelligence into enterprise operations.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            variants={cardVariants}
            className="bg-black text-white p-6 rounded-2xl min-h-[160px] flex flex-col justify-between"
          >
            <h3 className="text-xl font-medium">Multi-Agent Collaboration</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Coordinate
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Adapt
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Optimize
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Scale
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Learn
              </span>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between"
          >
            <h3 className="text-xl font-medium">Real-Time Decision Making</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Process
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Analyze
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Execute
              </span>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-gray-200 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between"
          >
            <h3 className="text-xl font-medium">Dynamic Problem Solving</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Identify
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Solve
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border border-black/10 bg-black/5 hover:bg-black/10 transition-colors">
                Iterate
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
})

Features.displayName = 'Features'

