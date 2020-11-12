import React, {useState} from "react"
import { useSelector } from "react-redux"
import "./result.css"

function Result() {
  const loading = useSelector((state) => state.loading)
  const results = useSelector((state) => state.result)
  const restaurants =
    results.Results.restaurants === "undefined"
      ? "hell"
      : results.Results.restaurants
  //  const resultsShown = useSelector(state => state.result.Results.resultsShown)
   const [selected, setSelected] = useState({
    newresult: results.Results.restaurants[0]
   })

  const selectedRes=(e)=>{
      const allres = results.Results.restaurants
      const selectedRes = allres.filter(res => {return res.id === e.target.id} )
      const newresult = selectedRes[0]
      setSelected({...selected, newresult})
  }


  const resultToDisplay = selected.newresult === 'undefined' ? selected.newresult : selected.newresult


  switch (restaurants) {
    case undefined:
      return null
    default:
      return (
        <div
          className={`result ${
            loading.loading === true ? "result-is-loading" : ""
          } `}
        >
          {loading.loading === true ? (
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          ) : (
            ""
          )}
          <div className="snip-result">
            {restaurants.map((res) => {
              const resId = res.R.res_id
              const location = res.location
              const rating = res.user_rating.aggregate_rating
              return (
                <div key={resId} className="box" id={resId} onClick={(e)=> selectedRes(e)}>
                  <div id={resId} className="img"></div>
                  <h2 id={resId}>{res.name}</h2>
                  <div id={resId} className="basic-info info">
                    Rating:${rating} currency:{res.currency}cuisine:{" "}
                    {res.cuisines}
                  </div>
                  <div id={resId} className="address info">
                    <i className="fas fa-map-marker-alt"></i> {location.address}
                  </div>
                  <div id={resId} className="Phone info">
                    <i className="fas fa-phone"></i> {res.phone_numbers}
                  </div>
                  <div id={resId} className="open-hours info">
                    <i className="fas fa-clock"></i> Open: 10AM - 11PM
                  </div>
                </div>
              )
            })}
          </div>

          <div className="full-result">
            <div className="main-img">
              <div className="main-img-box">
          <h2>{resultToDisplay.name}</h2>
                <p>Cuisine: {resultToDisplay.cuisines}</p>
              </div>
            </div>
            <div className="link-bar">
              <div className="menu r-btn">
                <i className="fas fa-book-reader"></i> Menu
              </div>
              <div className="call r-btn">
                <i className="fas fa-phone"></i> Call
              </div>
              <div className="website r-btn">
                <i className="fas fa-globe"></i> Website
              </div>
            </div>

            <div className="link-info">
              <div className="address r-info">
                <i className="fas fa-map-marker-alt"></i>  {resultToDisplay.location.address}
              </div>
              <div className="Phone r-info">
                <i className="fas fa-phone"></i>  {resultToDisplay.phone_numbers}
              </div>
              <div className="open-hours r-info">
                <i className="fas fa-clock"></i> Open: {resultToDisplay.timings}
              </div>
            </div>
            <h3>Photos</h3>
            <div className="restaurant-photos">
              <div className="small-img small-img-1"></div>
              <div className="small-img small-img-2"></div>
              <div className="small-img small-img-3"></div>
              <div className="small-img small-img-4"></div>
              <div className="small-img small-img-5"></div>
              <div className="small-img small-img-6"></div>
            </div>
          </div>
        </div>
      )
  }
}

export default Result
