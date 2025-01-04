import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  labels: string[]
  variant: 'dark' | 'light' | 'lighter'
  delay: number
}

export function FeatureCard({ title, labels, variant, delay }: FeatureCardProps) {
  const styles = {
    dark: {
      container: 'bg-black text-white',
      label: 'border-white/20 bg-white/5 hover:bg-white/10'
    },
    light: {
      container: 'bg-[#f8f9fa]',
      label: 'border-black/10 bg-black/5 hover:bg-black/10'
    },
    lighter: {
      container: 'bg-[#f1f3f5]',
      label: 'border-black/10 bg-black/5 hover:bg-black/10'
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-3xl p-8 ${styles[variant].container}`}
    >
      <h3 className="text-2xl font-medium mb-6">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {labels.map((label, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${styles[variant].label}`}
          >
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

