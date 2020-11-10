import React from "react"
import "./searchbar.css"
import * as actions from "../../reduxStuff/actions/actionType"
import { useDispatch, useSelector } from "react-redux"
import Select from "../select/select"

function Searchbar() {
  const dispatch = useDispatch()
  const showcase = useSelector((state) => state.showcase)
  let sectionAnimation

  if (showcase.animation) {
    sectionAnimation = "sectionAnimation"
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

  // const [filter, setFilter] = useState({
  //   city: "",
  //   cuisine: "Cuisine",
  //   rating: "Rating",
  //   sort: "Sort-by",
  // })

//   const updateCity =(value)=>{
//     setFilter({...filter, city: value})
// }

  return (
    <div className={`search-section ${sectionAnimation}`}>
      <h1>
        Search For Restaurants <br /> Near You
      </h1>

      <div className="search-bar">
      <Select
        filterType="city"
        type="select-from-advance"
        selectedName="City / Zip"
        // updateCity ={updateCity}
        // cityValue = {filter.city}
      />
      <Select
        filterType="cuisine"
        type="select-from-advance"
        selectedName="Category"
        // updateFilter={updateFilter}
        // cuisineValue={filter.cuisine}
      />
        <div
          className="search-button"
          onClick={() => {
            setAnimation()
          }}
        >
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
