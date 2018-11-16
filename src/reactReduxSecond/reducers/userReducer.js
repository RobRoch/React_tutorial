import {FETCH_USERS_START, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from '../actions/userActions'

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  users: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_USERS_START:
    return { ...state, fetching:true }

  case FETCH_USERS_SUCCESS:
    return { ...state, fetching:false, fetched:true, users: payload.users}

  case FETCH_USERS_ERROR:
    return { ...state, fetching:false, error: payload.error }

  default:
    return state
  }
}
