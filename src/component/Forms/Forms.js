import React from "react"
import Input from "./inputs"
import Backmodal from "../Backmodal/Backmodal"
import Close from "../close/close"
import { useSelector } from "react-redux"
import "./Forms.css"

function Forms(props) {
  const modal = useSelector((state) => state.modal)
  let formout = ""
  if (modal.OUT_WITH_ANIMATION === true) {
    formout = "Formout"
  }

  switch (props.type) {
    case "signup":
      return (
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Backmodal />
          <div className={`Forms ${formout}`}>
            <Close />
            <div className="form-title-section">
              <h2>Signup</h2>
              <p>Please Signup to Continue</p>
            </div>
            <Input type="username" />
            <Input type="email" />
            <Input type="password1" />
            <Input type="password2" />
            <div className="button-container">
              <p>
                Already have an account? Please login{" "}
              </p>
              <button>Signup</button>
            </div>
          </div>
        </div>
      )
    case "login":
      return (
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Backmodal />
          <div className={`Forms login-form ${formout}`}>
            <Close />
            <div className="form-title-section">
              <h2>Login</h2>
              <p>Please Login to Continue</p>
            </div>
            <Input type="user-username" />
            <Input type="user-password" />
            <div className="button-container">
              <p>
                {" "}
                Forget Password?{" "}
              </p>
              <button>Login</button>
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className="Forms">
          <Input type="username" />
          <Input type="email" />
          <Input type="password1" />
          <Input type="password2" />
        </div>
      )
  }
}

export default Forms
