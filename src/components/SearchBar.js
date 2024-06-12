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
    <div class="d-flex" role="search">
        <input 
        class="form-control me-2" 
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
        class="btn btn-outline-success" 
        type="submit"
        >Search</button>
      </div>
  )
}

export default SearchBar;