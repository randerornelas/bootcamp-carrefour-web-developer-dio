import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  count: 0
}

function counterReducer(prevState = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: prevState.count + 1
      }
    case DECREMENT:
      return {
        count: prevState.count - 1
      }
    default:
      return prevState
  }
}

export default counterReducer
