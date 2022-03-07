import useSound from "use-sound"
import lightOn from "../assets/audio/audio_light-on.mp3"
import lightOff from "../assets/audio/audio_light-off.mp3"

function Header ({ theme, switchTheme }) {
  return (
    <header className="header">
      <HeaderTitle title="Where in the World?"/>
      <Button theme={theme} switchTheme={switchTheme}/>
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

function Button ({ theme, switchTheme }) {
  const sun = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-sun toggle-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  const moon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon toggle-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>

  const [play] = useSound(lightOn)
  return (
    <button className="toggle-theme" role="switch" aria-label="light/dark mode" onClick={switchTheme} onMouseDown={play}>
      {theme === 'light' ? moon : sun}
        <span className="toggle-theme-text">{ theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  )
}



export default Header
