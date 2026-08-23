function Layout({ children }) {
  return (
    <div className="page-layout">
      <header className="page-header">
        <h1>🪩 디스코 고양이</h1>
        <p>스페이스바 또는 버튼을 눌러 고양이를 춤추게 해보세요</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>Made with React & CSS Animations</p>
      </footer>
    </div>
  )
}

export default Layout
