import '../styles/animations.css'

function DancingCat({ isPlaying, speed }) {
  const stateClass = isPlaying ? 'is-playing' : 'is-paused'
  const speedClass = `speed-${speed}`

  return (
    <div className={`dancing-cat ${stateClass} ${speedClass}`}>
      <svg
        className="cat-svg"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="춤추는 고양이"
      >
        <ellipse className="cat-shadow" cx="110" cy="205" rx="55" ry="8" fill="#000" opacity="0.12" />

        <g className="cat-body-group">
          <path className="cat-paw cat-paw-left" d="M60 150 Q40 190 65 200 Q80 205 85 190 L95 150 Z" fill="#f5a623" />
          <path className="cat-paw cat-paw-right" d="M160 150 Q180 190 155 200 Q140 205 135 190 L125 150 Z" fill="#f5a623" />

          <ellipse cx="110" cy="130" rx="50" ry="45" fill="#f7b955" />
          <ellipse cx="85" cy="145" rx="10" ry="14" fill="#fff" opacity="0.5" />
          <ellipse cx="135" cy="145" rx="10" ry="14" fill="#fff" opacity="0.5" />

          <path
            className="cat-tail"
            d="M155 160 Q195 150 195 100 Q195 70 175 65"
            stroke="#f7b955"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />

          <g className="cat-head-group">
            <path className="cat-ear cat-ear-left" d="M70 60 L55 15 L95 45 Z" fill="#f7b955" />
            <path className="cat-ear cat-ear-left" d="M72 55 L63 28 L88 48 Z" fill="#ffd9a0" />
            <path className="cat-ear cat-ear-right" d="M150 60 L165 15 L125 45 Z" fill="#f7b955" />
            <path className="cat-ear cat-ear-right" d="M148 55 L157 28 L132 48 Z" fill="#ffd9a0" />

            <circle cx="110" cy="80" r="48" fill="#f9c473" />
            <circle className="cat-eye" cx="90" cy="75" r="7" fill="#2b2b2b" />
            <circle className="cat-eye" cx="130" cy="75" r="7" fill="#2b2b2b" />
            <circle cx="92" cy="72" r="2" fill="#fff" />
            <circle cx="132" cy="72" r="2" fill="#fff" />

            <path d="M104 92 L116 92 L110 100 Z" fill="#e8829a" />
            <path d="M110 100 Q104 108 96 104" stroke="#5a3c1e" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M110 100 Q116 108 124 104" stroke="#5a3c1e" strokeWidth="2" fill="none" strokeLinecap="round" />

            <g className="cat-whiskers" stroke="#5a3c1e" strokeWidth="1.5" strokeLinecap="round">
              <line x1="45" y1="82" x2="75" y2="78" />
              <line x1="45" y1="92" x2="75" y2="90" />
              <line x1="145" y1="78" x2="175" y2="82" />
              <line x1="145" y1="90" x2="175" y2="92" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default DancingCat
