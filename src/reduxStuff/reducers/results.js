import * as actions from "../actions/actionType"

const initialState = ''

const results = (state = initialState, action) => {
  const Results = action.payload
  console.log(Results)
  switch (action.type) {
      
    case actions.PUSH_RESULT:
      return { ...state, Results }
    default:
      return state
  }
}

export default results
