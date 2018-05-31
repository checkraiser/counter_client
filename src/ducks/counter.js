export const types = {
  INCREASE_COUNT : 'INCREASE_COUNT',
}

export const actions = {
  increaseCount: (amount = 2) => ({
    type: types.INCREASE_COUNT,
    payload: amount
  })
}

const DEFAULT_STATE = {
  count: 0
}

export const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch(action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
}
