import * as actions from "../actions/actionType"
import cuisines from '../../component/advanceSearch/cuisine'

const initialState = {
  cuisine: [...cuisines]
}

const results = (state = initialState, action) => {
  const Results = action.payload
  switch (action.type) {
    case actions.PUSH_RESULT:
      return { ...state, Results }
    default:
      return state
  }
}

export default results
