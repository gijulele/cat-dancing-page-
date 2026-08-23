import { useCallback, useState } from 'react'

const SPEEDS = ['slow', 'normal', 'fast']

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)
  const [speed, setSpeed] = useState('normal')

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const play = useCallback(() => setIsPlaying(true), [])
  const pause = useCallback(() => setIsPlaying(false), [])

  const cycleSpeed = useCallback(() => {
    setSpeed((prev) => {
      const nextIndex = (SPEEDS.indexOf(prev) + 1) % SPEEDS.length
      return SPEEDS[nextIndex]
    })
  }, [])

  return { isPlaying, toggle, play, pause, speed, cycleSpeed, speeds: SPEEDS }
}
