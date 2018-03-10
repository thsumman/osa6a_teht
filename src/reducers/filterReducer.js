//import { initialState } from './anecdoteReducer'

const filterReducer = (state = '', action) => {
  switch (action.type) {
  case ('FILTER'):
    return action.filter
  default:
    return state
  }
}

export const filteroi = (filter) => {
  return {
    type: 'FILTER',
    filter
  }
}

export default filterReducer