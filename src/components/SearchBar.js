import { useState } from "react";

function SearchBar(
  {
    onNewSearch = () =>{ }
  } 
) {
  

  const [searchInput, setSearchInput] = useState("")


  const handleInputSearch = (searchInput) => {
    setSearchInput(searchInput)
  }

  return (
    <div className="d-flex" role="search">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        value={searchInput}
        aria-label="Search"
        onChange={(e) => {
          handleInputSearch(e.target.value)
        }}
        />
        <button 
         onClick={() => {
          onNewSearch(searchInput)
         }}
        className="btn btn-outline-success" 
        type="submit"
        >Search</button>
      </div>
  )
}

export default SearchBar;