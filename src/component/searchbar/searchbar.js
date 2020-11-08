import React from "react"
import "./searchbar.css"

function searchbar() {
  return (
    <div className="search-section">
      <h1>Search For Restaurants <br/> Near You</h1>

      <div className="search-bar">
        <div className="cuisine-select">
          <select name="" id="">
            <option value="creole">Creole</option>
            <option value="creole">Chinese</option>
            <option value="creole">indian</option>
          </select>
        </div>

        <input type="text" placeholder="zip/City" value="" />
        <div className="search-button">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default searchbar
