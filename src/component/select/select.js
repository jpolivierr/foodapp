import React from "react"
import { useState,  } from "react"
import "./select.css"
function Select(props) {
  const [filter, setFilter] = useState({
    city: "",
    cuisine: "Cuisine",
    rating: "Rating",
    sort: "Sort-by",
  })

  const clicked = (e) => {
    const Parent = e.target.dataset.idtype
    switch (Parent) {
      case "cuisine":
        props.updateFilter(Parent, e.target.id)
        break
      case "city":
        setFilter({ ...filter, city: e.target.id })
        break
      case "rating":
        props.updateFilter(Parent, e.target.id)
        break
      case "sort":
        props.updateFilter(Parent, e.target.id)
        break
        default:
            return null
    }
  }

  const onChange = (e) => {
    props.updateCity(e.target.value)
  }

  switch (props.filterType) {
    case "city":
      return (
        <div
          onChange={(e) => onChange(e)}
          id="city"
          className={`select active ${props.type} `}
        >
          <input
            type="text"
            placeholder={props.selectedName}
            value={props.cityValue}
          />
        </div>
      )
    case "cuisine":
      return (
        <div
          id="cuisine"
          onClick={(e) => clicked(e)}
          className={`select active ${props.type} `}
        >
          <div className="selected">{props.cuisineValue}</div>
          <i className="fas fa-caret-down"></i>

          <div className="select-box">
            <div className="option" id="Chinese" data-idtype="cuisine">
              Chinese
            </div>
            <div className="option" id="Haitian" data-idtype="cuisine">
              Haitian
            </div>
            <div className="option" id="jamaican" data-idtype="cuisine">
              jamaican
            </div>
          </div>
        </div>
      )
    case "rating":
      return (
        <div
          onClick={(e) => clicked(e)}
          id="rating"
          className={`select active ${props.type} `}
        >
          <div className="selected">{props.ratingValue}</div>
          <i className="fas fa-caret-down"></i>

          <div className="select-box">
            <div className="option" id={5} data-idtype="rating">
              5
            </div>
            <div className="option" id={4} data-idtype="rating">
              4
            </div>
            <div className="option" id={3} data-idtype="rating">
              3
            </div>
            <div className="option" id={2} data-idtype="rating">
              2
            </div>
            <div className="option" id={1} data-idtype="rating">
              1
            </div>
          </div>
        </div>
      )
    case "sort":
      return (
        <div
          onClick={(e) => clicked(e)}
          id="sort"
          className={`select active ${props.type} `}
        >
          <div className="selected">{props.sortValue}</div>
          <i className="fas fa-caret-down"></i>

          <div className="select-box">
            <div className="option" id="A-Z" data-idtype="sort">
              A-Z
            </div>
            <div className="option" id="Z-A" data-idtype="sort">
              Z-A
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className={`select active ${props.type} `}>
          <div className="selected">{props.selectedName}</div>
          <i className="fas fa-caret-down"></i>

          <div className="select-box"></div>
        </div>
      )
  }
}

export default Select
