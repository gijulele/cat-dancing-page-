import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // WSL2 안에서 실행 중인 서버를 Windows 호스트(브라우저)에서 열 수 있도록
    // 루프백(127.0.0.1)뿐 아니라 모든 네트워크 인터페이스에서 접속을 받는다.
    host: true,
    port: 5173,
  },
})
