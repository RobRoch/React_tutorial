import { ADD, REMOVE, RESET } from '../actions/countActions'

const initialState = {
  count: 3
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { ...state, count: state.count + 1 }

  case REMOVE:
    return { ...state, count: state.count - 1 }
    
  case RESET:
    return { ...state, count: 0 }

  default:
    return state
  }
}
