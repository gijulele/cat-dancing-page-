import '../styles/animations.css'

function DancingCat({ isPlaying, speed, style }) {
  const stateClass = isPlaying ? 'is-playing' : 'is-paused'
  const speedClass = `speed-${speed}`
  const styleClass = `style-${style}`

  return (
    <div className={`dancing-cat ${stateClass} ${speedClass} ${styleClass}`}>
      <svg
        className="cat-svg"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="춤추는 고양이"
      >
        <ellipse className="cat-shadow" cx="110" cy="205" rx="55" ry="8" fill="#000" opacity="0.15" />

        <g className="cat-body-group">
          <path className="cat-paw cat-paw-left" d="M62 148 Q40 186 63 199 Q79 206 86 190 L96 148 Z" fill="#5b6472" />
          <path className="cat-paw cat-paw-right" d="M158 148 Q180 186 157 199 Q141 206 134 190 L124 148 Z" fill="#5b6472" />

          <path
            className="cat-tail"
            d="M150 158 Q192 150 196 104 Q198 72 178 60"
            stroke="#6b7688"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />

          <ellipse cx="110" cy="128" rx="52" ry="46" fill="#7c8798" />
          <ellipse cx="82" cy="140" rx="12" ry="16" fill="#fff" opacity="0.45" />
          <ellipse cx="138" cy="140" rx="12" ry="16" fill="#fff" opacity="0.45" />

          <g className="cat-head-group">
            <path className="cat-ear cat-ear-left" d="M70 58 L54 12 L96 44 Z" fill="#7c8798" />
            <path className="cat-ear cat-ear-left" d="M72 52 L62 26 L88 46 Z" fill="#e8b4d8" />
            <path className="cat-ear cat-ear-right" d="M150 58 L166 12 L124 44 Z" fill="#7c8798" />
            <path className="cat-ear cat-ear-right" d="M148 52 L158 26 L132 46 Z" fill="#e8b4d8" />

            <circle cx="110" cy="80" r="49" fill="#8b96a7" />
            <circle className="cat-eye" cx="88" cy="76" r="8" fill="#1f2937" />
            <circle className="cat-eye" cx="132" cy="76" r="8" fill="#1f2937" />
            <circle cx="91" cy="73" r="2.4" fill="#fff" />
            <circle cx="135" cy="73" r="2.4" fill="#fff" />

            <path d="M103 93 L117 93 L110 102 Z" fill="#e8829a" />
            <path d="M110 102 Q103 111 94 106" stroke="#3f3f46" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M110 102 Q117 111 126 106" stroke="#3f3f46" strokeWidth="2" fill="none" strokeLinecap="round" />

            <g className="cat-whiskers" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round">
              <line x1="42" y1="80" x2="74" y2="76" />
              <line x1="42" y1="91" x2="74" y2="89" />
              <line x1="146" y1="76" x2="178" y2="80" />
              <line x1="146" y1="89" x2="178" y2="91" />
            </g>
          </g>
        </g>

        <g className="cat-notes" aria-hidden="true">
          <text className="cat-note cat-note-1" x="30" y="60" fontSize="20">♪</text>
          <text className="cat-note cat-note-2" x="185" y="90" fontSize="16">♫</text>
          <text className="cat-note cat-note-3" x="20" y="140" fontSize="14">♪</text>
        </g>
      </svg>
    </div>
  )
}

export default DancingCat
