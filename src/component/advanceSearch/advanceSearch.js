import React, { useState } from "react"
import Select from "../select/select"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../reduxStuff/actions/actionType"
import axios from "axios"
import "./advanceSearch.css"

function AdvanceSearch(props) {
  const [filter, setFilter] = useState({
    city: "",
    cuisine: { name: "Cuisine", id: null },
    rating: "Rating",
    sort: "Sort-by",
  })
  const initialState = {
    city: "",
    cuisine: { name: "Cuisine", id: null },
    rating: "Rating",
    sort: "Sort-by",
  }
  const showcase = useSelector((state) => state.showcase)
  const loading = useSelector((state) => state.loading.loading)
  const dispatch = useDispatch()
  function updateFilter(Parent, value, cuisineId) {
    switch (Parent) {
      case "cuisine":
        setFilter({ ...filter, cuisine: { name: value, id: cuisineId } })
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
  const setAnimation = () => {
    dispatch({
      type: actions.SHOWCASE_OPTION,
      payload: { showcase: 1, animation: true },
    })
    setTimeout(() => {
      dispatch({
        type: actions.SHOWCASE_OPTION,
        payload: { showcase: 2, animation: true },
      })
    }, 230)
  }
  const updateCity = (value) => {
    setFilter({ ...filter, city: value })
  }
  const clearFilter = () => {
    setFilter({ ...filter, ...initialState })
  }
  const getRestaurants = () => {
    dispatch({
      type: actions.LOADING,
      payload: true,
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
        "user-key": "2ee72a448846f7fcc7d50a9a84cd7535",
      },
    }
    const globalResults = {}
    //------------------------------------------ gets restaurants by city name
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=${filter.city}`,
        config
      )
      .then((res) => {
        //------------------------------------------ gets restaurants by cityid and searched for all restaurant in provided city
        const cityInfo = res.data.location_suggestions[0]
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=${cityInfo.city_id}&entity_type=city&cuisines=${filter.cuisine.id}`,
            config
          )
          //------------------------------------------ gets properties needed frin results and add in new object to push to the store
          .then((res) => {
            globalResults.resultsShown = res.data.results_shown
            const restaurants = res.data.restaurants.map((res) => {
              return res.restaurant
            })
            globalResults.restaurants = restaurants

            dispatch({
              type: actions.PUSH_RESULT,
              payload: globalResults,
            })
            dispatch({
              type: actions.LOADING,
              payload: false,
            })
            const animation = showcase.showcase === 1 ? setAnimation() : null
          })
          .catch((err) => console.log("Error From SECOND REQUEST " + err))
      })
      .catch((err) => console.log("Error From FIRST REQUEST " + err))
  }
  return (
    <div className={`advance-search ${props.homeSearch}`}>
      <h2>search Result: 28</h2>
      <Select
        filterType="city"
        type="select-from-advance"
        selectedName="City / Zip"
        updateCity={updateCity}
        cityValue={filter.city}
        readOnly={true}
        homeStyle={showcase.showcase === 1 ? "city-home-style" : ""}
      />
      <Select
        filterType="cuisine"
        type="select-from-advance"
        selectedName="Category"
        updateFilter={updateFilter}
        cuisineValue={filter.cuisine.name}
        homeStyle={showcase.showcase === 1 ? "cuisine-home-style" : ""}
      />
      <Select
        filterType="rating"
        type="select-from-advance"
        selectedName="Rating"
        updateFilter={updateFilter}
        ratingValue={filter.rating}
      />
      <Select
        filterType="sort"
        type="select-from-advance"
        selectedName="Sort"
        updateFilter={updateFilter}
        sortValue={filter.sort}
      />
      {/*------------------------ Search button */}
      <button
        onClick={() => {
          getRestaurants()
        }}
        className={
          showcase.showcase === 1
            ? `button-home-style ${loading === true ? "button-loading" : ""} `
            : ""
        }
      >
        {loading === true ? (
          <div className="lds-rippless">
            <div></div>
            <div></div>
          </div>
        ) : (
          ""
        )}
        <i className="fas fa-search"></i>&nbsp; <span>Apply +</span>
      </button>
      {/*------------------------ clear button */}
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
