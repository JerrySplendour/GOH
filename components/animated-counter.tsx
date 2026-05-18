'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  format?: (value: number) => string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  format,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startAnimation = () => {
      setHasStarted(true)
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(end * easeOut)

        setCount(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    }

    // Start animation when component mounts
    startAnimation()
  }, [end, duration])

  const displayValue = format ? format(count) : count

  return (
    <span className="font-bold text-primary animate-fade-in">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
