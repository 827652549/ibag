import * as constants from './constants'
const defaultState = {
  num1: 0,
  num2: 0,
}

const reducer = (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case constants.CHANGE_NUM_1:
      newState.num1 = action.num1
      break
    case constants.CHANGE_NUM_2:
      newState.num2 = action.num2
      break
    default:
      return state
  }
  return newState
}
export default reducer
