const initialState = {
    userItems: [],
    bill: 0,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}