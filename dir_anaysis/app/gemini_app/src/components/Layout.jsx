/**
 * 페이지 전체 배경과 여백, 제목을 담당하는 레이아웃 컴포넌트.
 */
function Layout({ children }) {
  return (
    <div className="page">
      <header className="page__header">
        <h1>춤추는 고양이 🐱</h1>
        <p>버튼을 눌러 고양이의 춤을 시작하거나 멈춰보세요</p>
      </header>

      <main className="page__stage">{children}</main>

      <footer className="page__footer">
        <p>스페이스 바로도 시작/정지를 전환할 수 있어요</p>
      </footer>
    </div>
  )
}

export default Layout
