import React from 'react'
import './search.css'
function Search() {
  return (
    <div className='search'>
        <div className="search-input">
            <i className="fas fa-search"></i>
            <input type="text" placeholder='search' />
        </div>
    </div>
  )
}

export default Search
