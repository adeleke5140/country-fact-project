function Nav({ input, getInput, continent, getCountry }) {
  return (
    <nav className="navigation">
      <SearchBar
        name="Search for a country"
        id="country-search"
        placeholder="Search for a country..."
        input={input}
        getInput={getInput}
      />

      <ContinentFilter country={continent} getCountry={getCountry} />
    </nav>
  )
}

function SearchBar({ name, id, placeholder, input, getInput }) {
  return (
    <div className="search-parent">
      <input
        type="search"
        name={name}
        id={id}
        placeholder={placeholder}
        value={input}
        onChange={(e) => getInput(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search search-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  )
}

function ContinentFilter({ country, getCountry }) {
  return (
    <>
      <label htmlFor="countries-filter" id="country-filter">
        Filter by Continent
      </label>
      <div className="select-parent">
        <select
          name="countries"
          id="countries-filter"
          value={country}
          onChange={(e) => getCountry(e.target.value)}
        >
          <option value="">Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  )
}

export default Nav
