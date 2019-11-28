import React, { createContext, useReducer } from 'react'

import { initialState, reducer } from './reducer'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeThemeForDark = () => {
    dispatch({ type: 'isDark' })
  }
  const handleQuiz = (quizId) => {
    dispatch({type: 'sel_quiz', payload: quizId})
  }
  return (
    <StateContext.Provider value={{ state, changeThemeForDark, handleQuiz }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }