const SPEED_LABELS = {
  slow: '느리게',
  normal: '보통',
  fast: '빠르게',
}

const STYLE_LABELS = {
  groove: '그루브',
  spin: '스핀',
}

function AnimationControls({ isPlaying, onToggle, speed, onCycleSpeed, style, onCycleStyle }) {
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
      <button
        type="button"
        className="control-btn"
        onClick={onCycleStyle}
        aria-label="춤 스타일 변경"
      >
        스타일: {STYLE_LABELS[style]}
      </button>
    </div>
  )
}

export default AnimationControls
