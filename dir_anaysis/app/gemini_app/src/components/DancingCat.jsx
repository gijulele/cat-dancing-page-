import '../styles/animations.css'

/**
 * 화면 중앙에 표시되는 귀여운 고양이 SVG.
 * isPlaying=true 이면 CSS 애니메이션이 재생되고, false 이면 그 자리에서 멈춘다.
 * speed 는 애니메이션 재생 배속(0.5 ~ 2)이며 CSS 변수(--dance-speed)로 전달한다.
 */
function DancingCat({ isPlaying, speed }) {
  return (
    <div
      className={`cat-stage ${isPlaying ? 'is-dancing' : 'is-paused'}`}
      style={{ '--dance-speed': speed }}
      role="img"
      aria-label={isPlaying ? '춤을 추는 고양이' : '멈춰 있는 고양이'}
    >
      <svg
        className="cat"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 꼬리 */}
        <path
          className="cat__part cat__tail"
          d="M215 210 C 270 200, 280 140, 250 110 C 235 95, 220 110, 232 122 C 250 140, 245 175, 205 190 Z"
          fill="#f6a35e"
        />

        {/* 몸통 + 앞발 */}
        <g className="cat__part cat__body">
          <ellipse cx="150" cy="210" rx="70" ry="55" fill="#f8b76d" />
          <ellipse
            className="cat__part cat__paw cat__paw--left"
            cx="115"
            cy="255"
            rx="16"
            ry="20"
            fill="#fff4e6"
          />
          <ellipse
            className="cat__part cat__paw cat__paw--right"
            cx="185"
            cy="255"
            rx="16"
            ry="20"
            fill="#fff4e6"
          />
          <ellipse cx="150" cy="222" rx="34" ry="26" fill="#fff4e6" />
        </g>

        {/* 머리 */}
        <g className="cat__part cat__head">
          <path
            className="cat__part cat__ear cat__ear--left"
            d="M100 110 L82 55 L138 92 Z"
            fill="#f8b76d"
          />
          <path
            className="cat__part cat__ear cat__ear--right"
            d="M200 110 L218 55 L162 92 Z"
            fill="#f8b76d"
          />
          <path d="M108 100 L96 68 L128 90 Z" fill="#ffd7e6" />
          <path d="M192 100 L204 68 L172 90 Z" fill="#ffd7e6" />

          <circle cx="150" cy="140" r="68" fill="#f8b76d" />

          {/* 얼굴 */}
          <circle cx="122" cy="140" r="26" fill="#ffffff" />
          <circle cx="178" cy="140" r="26" fill="#ffffff" />
          <circle className="cat__eye cat__eye--left" cx="122" cy="142" r="10" fill="#3a2b22" />
          <circle className="cat__eye cat__eye--right" cx="178" cy="142" r="10" fill="#3a2b22" />
          <circle cx="126" cy="138" r="3" fill="#ffffff" />
          <circle cx="182" cy="138" r="3" fill="#ffffff" />

          <circle cx="100" cy="160" r="12" fill="#ffb6c9" opacity="0.7" />
          <circle cx="200" cy="160" r="12" fill="#ffb6c9" opacity="0.7" />

          <path d="M150 155 L142 168 L158 168 Z" fill="#ff8fa3" />
          <path
            d="M150 168 Q150 178 138 178 M150 168 Q150 178 162 178"
            stroke="#7a4a33"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          <g className="cat__whiskers cat__whiskers--left" stroke="#7a4a33" strokeWidth="2" strokeLinecap="round">
            <line x1="60" y1="140" x2="98" y2="146" />
            <line x1="58" y1="155" x2="98" y2="156" />
          </g>
          <g className="cat__whiskers cat__whiskers--right" stroke="#7a4a33" strokeWidth="2" strokeLinecap="round">
            <line x1="240" y1="140" x2="202" y2="146" />
            <line x1="242" y1="155" x2="202" y2="156" />
          </g>
        </g>
      </svg>

      <div className="cat-shadow" />
    </div>
  )
}

export default DancingCat
