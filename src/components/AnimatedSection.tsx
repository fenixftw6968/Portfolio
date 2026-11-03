import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function AnimatedSection({ children, className = '', id, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 }
      case 'down':
        return { y: -24, x: 0 }
      case 'left':
        return { x: 28, y: 0 }
      case 'right':
        return { x: -28, y: 0 }
      default:
        return { y: 24, x: 0 }
    }
  }

  const offset = getInitialPosition()

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delayOrder?: number
}

export function StaggerContainer({ children, className = '', delayOrder = 0 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delayOrder,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


