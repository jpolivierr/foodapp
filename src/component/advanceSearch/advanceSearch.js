import React, { useState } from "react"
import Select from "../select/select"
import { useDispatch } from "react-redux"
import * as actions from "../../reduxStuff/actions/actionType"
import axios from "axios"
import "./advanceSearch.css"

function AdvanceSearch() {
  const [filter, setFilter] = useState({
    city: "",
    cuisine: "Cuisine",
    rating: "Rating",
    sort: "Sort-by",
  })
  const initialState = {
    city: "",
    cuisine: "Cuisine",
    rating: "Rating",
    sort: "Sort-by",
  }
  const dispatch = useDispatch()
  function updateFilter(Parent, value) {
    switch (Parent) {
      case "cuisine":
        setFilter({ ...filter, cuisine: value })
        break
      case "rating":
        setFilter({ ...filter, rating: value })
        break
      case "sort":
        setFilter({ ...filter, sort: value })
        break
      default:
        return null
    }
  }

  const updateCity = (value) => {
    setFilter({ ...filter, city: value })
  }

  const clearFilter = () => {
    setFilter({ ...filter, ...initialState })
  }

  const getCategory = () => {
    dispatch({
      type: actions.LOADING,
      payload: true
    })
    // const cuisine =
    //   "https://developers.zomato.com/api/v2.1/cuisines?city_id=291" // city and the cuisine
    // const restaurant =
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city" // restaurant search by city id and
    const config = {
      headers: {
        "Content-Type": "application/json",
        "user-key": "2ee72a448846f7fcc7d50a9a84cd7535",
      },
    }
    const globalResults = {}

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city",
        config
      )
      .then((res) => {
        console.log(res.data.restaurants[0].restaurant)
        globalResults.resultsShown = res.data.results_shown
        const restaurants = res.data.restaurants.map((res) => {
          return res.restaurant
        })
        globalResults.restaurants = restaurants
        // console.log(restaurants)
      })
      .then(() => {
        console.log(globalResults)
        dispatch({
          type: actions.PUSH_RESULT,
          payload: globalResults
        })
        
      })
      .then(()=>{
        dispatch({
          type: actions.LOADING,
          payload: false
        })
      })
      .catch((err) => console.log(err))
  }

  console.log(filter)
  return (
    <div className="advance-search">
      <h2>search Result: 28</h2>
      <Select
        filterType="city"
        type="select-from-advance"
        selectedName="City / Zip"
        updateCity={updateCity}
        cityValue={filter.city}
        readOnly={true}
      />
      <Select
        filterType="cuisine"
        type="select-from-advance"
        selectedName="Category"
        updateFilter={updateFilter}
        cuisineValue={filter.cuisine}
      />
      <Select
        filterType="rating"
        type="select-from-advance"
        selectedName="Rating"
        updateFilter={updateFilter}
        ratingValue={filter.rating}
      />
      {/* <Select type='select-from-advance' selectedName = 'Miles'/> */}
      <Select
        filterType="sort"
        type="select-from-advance"
        selectedName="Sort"
        updateFilter={updateFilter}
        sortValue={filter.sort}
      />
      <button onClick={() => getCategory()}>
        <i className="fas fa-search"></i>&nbsp; Apply +
      </button>
      <button
        onClick={() => {
          clearFilter()
        }}
      >
        <i className="fas fa-minus-circle"></i>&nbsp; clear
      </button>
    </div>
  )
}
export default AdvanceSearch
