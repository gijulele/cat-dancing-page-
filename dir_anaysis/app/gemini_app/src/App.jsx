import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

function App() {
  const { isPlaying, toggle, speed, setSpeed } = useAnimation(true)

  // 스페이스 바를 누르면 시작/정지가 토글되도록 키보드 접근성을 지원한다.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </Layout>
  )
}

export default App
