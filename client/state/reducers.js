import { CLICK_ON_CELL } from './actions.js'

// Default state is all cells are white (false)
const defaultCells = (new Array(64)).fill(false)

export const toggleCell = (state = defaultCells, action) => {
  switch (action.type) {
    case CLICK_ON_CELL:
      const n = action.payload // cell index
      const oldValue = state[n] // either true or false
      const newState = [ ...state.slice(0, n), !oldValue, ...state.slice(n + 1) ]
      return newState // TODO
    default:
      return state
  }
}