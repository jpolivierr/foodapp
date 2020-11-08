import React from "react"
import * as actions from "../../reduxStuff/actions/actionType"
import { useDispatch } from "react-redux"

function Close() {
  const Style = {
    width: "min-content",
    position: "absolute",
    fontSize: "2rem",
    right: "10px",
    top: "10px",
    transform: "rotate(45deg)",
    cursor: "pointer",
    color: "rgb(104, 104, 104)",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    padding: "0",
  }

  const dispatch = useDispatch()
  return (
    <div
      className="close"
      style={Style}
      onClick={() => {
        dispatch({
          type: actions.MODALOFF,
          payload: { modaltype: "" },
        })
      }}
    >
      +
    </div>
  )
}

export default Close
