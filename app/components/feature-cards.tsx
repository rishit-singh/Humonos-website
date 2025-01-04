import { motion } from 'framer-motion'
import { FeatureCard } from './feature-card'

export function FeatureCards() {
  const features = [
    {
      title: 'Multi-Agent Collaboration',
      labels: ['Coordinate', 'Adapt', 'Optimize', 'Scale', 'Learn'],
      variant: 'dark' as const,
      delay: 0.2
    },
    {
      title: 'Real-Time Decision Making',
      labels: ['Process', 'Analyze', 'Execute'],
      variant: 'light' as const,
      delay: 0.3
    },
    {
      title: 'Dynamic Problem Solving',
      labels: ['Identify', 'Solve', 'Iterate'],
      variant: 'lighter' as const,
      delay: 0.4
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 mt-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  )
} 