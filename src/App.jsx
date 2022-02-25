function Header () {
  return (
    <div className="header">
      <h1 className="header__title">
        Where in the World
      </h1>
      <button className="toggle-theme">
        <span>dark Mode</span>
      </button>
    </div>
  )
}







function App () {

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
