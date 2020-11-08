import * as actions from "../actions/actionType"

const initialState = {
  modaltype: "",
}

function Modal(state = initialState, action){
  switch (action.type) {
    case actions.MODALON:
      return { ...state, ...action.payload}
    case actions.MODALOFF:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default Modal
