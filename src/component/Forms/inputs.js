import React from "react"
import './inputs.css'

function inputs(props) {
  switch (props.type) {
    case "username":
      return (
        <input
          type="text"
          className="form-input"
          placeholder="Create a user name"
        />
      )
    case "name":
      return (
        <input type="text" className="form-input" placeholder="Enter Name " />
      )
    case "email":
      return (
        <input type="email" className="form-input" placeholder="Enter email " />
      )
    case "password1":
      return (
        <input
          type="password"
          className="form-input"
          placeholder="Create password "
        />
      )
    case "password2":
      return (
        <input
          type="password"
          className="form-input"
          placeholder="Re-enter passowrd"
        />
      )
    case "user-username":
      return (
        <input
          type="text"
          className="form-input"
          placeholder="Enter username/email"
        />
      )
    case "user-password":
      return (
        <input
          type="password"
          className="form-input"
          placeholder="Enter password"
        />
      )
  }
}

export default inputs
