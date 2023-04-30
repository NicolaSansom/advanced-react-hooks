// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case 'INCREMENT':
      return !state.count
        ? {count: dispatch.step}
        : {count: state.count + dispatch.step}

    default:
      console.log("I don't know what fruit this is.")
  }
}

function Counter({initialCount = 0, step = 2}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT'})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
