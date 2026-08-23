const SPEED_LABELS = {
  slow: '느리게',
  normal: '보통',
  fast: '빠르게',
}

function AnimationControls({ isPlaying, onToggle, speed, onCycleSpeed }) {
  return (
    <div className="animation-controls">
      <button
        type="button"
        className="control-btn control-btn-primary"
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>
      <button
        type="button"
        className="control-btn"
        onClick={onCycleSpeed}
        aria-label="애니메이션 속도 변경"
      >
        속도: {SPEED_LABELS[speed]}
      </button>
    </div>
  )
}

export default AnimationControls
