import React from "react"
import {useDispatch } from "react-redux"
import * as actions from "../../reduxStuff/actions/actionType"
import "./Navigation.css"

function Navigation() {
  const dispatch = useDispatch()
  return (
    <div className="Navigation">
      <div className="logo" onClick={()=> {dispatch({
          type: actions.SHOWCASE_OPTION,
          payload:{ showcase: 1, animation: false},
        })}}>
        {" "}
        <span>Food</span>App
      </div>
      <div className="registration">
        <div
          className="sign-up user"
          onClick={() =>
            dispatch({
              type: actions.MODALON,
              payload: { modaltype: "signup",OUT_WITH_ANIMATION: false },
            })
          }
        >
          Sign Up
        </div>
        <div
          className="log-in user"
          onClick={() =>
            dispatch({
              type: actions.MODALON,
              payload: { modaltype: "login", OUT_WITH_ANIMATION: false },
            })
          }
        >
          Log In
        </div>
      </div>
    </div>
  )
}

export default Navigation
