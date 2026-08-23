import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/global.css'

function App() {
  const { isPlaying, toggle, speed, cycleSpeed } = useAnimation(true)

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
        onCycleSpeed={cycleSpeed}
      />
    </Layout>
  )
}

export default App
