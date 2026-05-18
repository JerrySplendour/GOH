'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal')
            // Optional: stop observing after animation
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        margin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getInitialTransform = () => {
    switch (direction) {
      case 'down':
        return 'translateY(-20px)'
      case 'left':
        return 'translateX(20px)'
      case 'right':
        return 'translateX(-20px)'
      case 'none':
        return 'scale(0.95)'
      default: // 'up'
        return 'translateY(20px)'
    }
  }

  const style: CSSProperties = {
    opacity: 0,
    transform: getInitialTransform(),
    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`${className}`}
      onAnimationStart={() => {
        if (ref.current) {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translate(0) scale(1)'
        }
      }}
    >
      {children}
    </div>
  )
}
