import { SPEED_OPTIONS } from '../hooks/useAnimation'

/**
 * 시작/정지 버튼과 속도 선택 버튼을 보여주는 컨트롤 패널.
 */
function AnimationControls({ isPlaying, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls">
      <button
        type="button"
        className={`toggle-button ${isPlaying ? 'is-playing' : 'is-stopped'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-picker" role="group" aria-label="애니메이션 속도 선택">
        <span className="speed-picker__label">속도</span>
        <div className="speed-picker__options">
          {SPEED_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`speed-button ${speed === option.value ? 'is-active' : ''}`}
              onClick={() => onSpeedChange(option.value)}
              aria-pressed={speed === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimationControls
