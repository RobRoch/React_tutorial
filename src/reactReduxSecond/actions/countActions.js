export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const RESET = 'RESET'

export const addCounter = () => ({
  type: ADD
})

export const removeCounter = () => ({
  type: REMOVE
})

export const resetCounter = () => ({
  type: RESET,
  payload : 0
})

