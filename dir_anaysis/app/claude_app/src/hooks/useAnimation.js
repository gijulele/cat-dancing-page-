import { useCallback, useState } from 'react'

const SPEEDS = ['slow', 'normal', 'fast']
const STYLES = ['groove', 'spin']

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)
  const [speed, setSpeed] = useState('normal')
  const [style, setStyle] = useState('groove')

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const play = useCallback(() => setIsPlaying(true), [])
  const pause = useCallback(() => setIsPlaying(false), [])

  const cycleSpeed = useCallback(() => {
    setSpeed((prev) => SPEEDS[(SPEEDS.indexOf(prev) + 1) % SPEEDS.length])
  }, [])

  const cycleStyle = useCallback(() => {
    setStyle((prev) => STYLES[(STYLES.indexOf(prev) + 1) % STYLES.length])
  }, [])

  return {
    isPlaying,
    toggle,
    play,
    pause,
    speed,
    cycleSpeed,
    speeds: SPEEDS,
    style,
    cycleStyle,
    styles: STYLES,
  }
}
