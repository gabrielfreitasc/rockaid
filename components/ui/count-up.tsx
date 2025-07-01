
'use client'

import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  start?: number
}

export function CountUp({ end, duration = 2, start = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * (end - start) + start))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return <span>{count.toLocaleString()}</span>
}
