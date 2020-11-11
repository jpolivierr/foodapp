import * as actions from "../actions/actionType"

const loading = (state = { loading: false }, action) => {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
 export default loading