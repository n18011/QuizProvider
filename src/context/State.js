import React, { createContext, useReducer } from 'react'

import { initialState, reducer } from './reducer'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeThemeForDark = () => {
    dispatch({ type: 'isDark' })
  }
  const handleQuiz = (payload) => {
    dispatch({type: 'sel_quiz', payload})
  }
  const sendResult = (payload) => {
    dispatch({type: 'send_result', payload})
  }

  return (
    <StateContext.Provider value={{ state, changeThemeForDark, handleQuiz, sendResult }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }