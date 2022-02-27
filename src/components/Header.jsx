function Header () {
  return (
    <header className="header">
      <HeaderTitle title="Where in the World?"/>
      <Button/>
    </header>
  )
}

function HeaderTitle ({ title }) {
  return (
    <h1 className="header__title">
        { title }
    </h1>
  )
}

function Button () {
  return (
    <button className="toggle-theme" role="switch" aria-label="light/dark mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon toggle-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <span className="toggle-theme-text">Dark Mode</span>
    </button>
  )
}

export default Header
