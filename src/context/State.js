import React, { createContext, useReducer } from 'react'


const initialState = {
  isDark: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'isDark':
      return { ...state, isDark: !state.isDark }
    default:
      throw new Error()
  }
}

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeThemeForDark = () => {
    dispatch({ type: 'isDark' })
  }
  return (
    <StateContext.Provider value={{ state, changeThemeForDark }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }