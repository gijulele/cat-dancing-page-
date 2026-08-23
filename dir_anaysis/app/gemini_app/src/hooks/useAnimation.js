import { useCallback, useState } from 'react'

// 선택 가능한 춤 속도 목록 (배속 값)
export const SPEED_OPTIONS = [
  { value: 0.5, label: '0.5x' },
  { value: 1, label: '1x' },
  { value: 1.5, label: '1.5x' },
  { value: 2, label: '2x' },
]

const DEFAULT_SPEED = 1

/**
 * 고양이 춤 애니메이션의 재생 상태(재생/정지)와 속도를 관리하는 커스텀 훅.
 */
export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)
  const [speed, setSpeed] = useState(DEFAULT_SPEED)

  const play = useCallback(() => setIsPlaying(true), [])
  const stop = useCallback(() => setIsPlaying(false), [])
  const toggle = useCallback(() => setIsPlaying((prev) => !prev), [])

  return { isPlaying, play, stop, toggle, speed, setSpeed }
}
