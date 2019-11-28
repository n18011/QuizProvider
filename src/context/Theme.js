import React, { useMemo, useContext } from 'react'

import {
  lightBlue,
  orange,
  lightGreen,
  amber
} from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { StateContext } from './State'


export default ({ children }) => {
  const { state } = useContext(StateContext)

  const theme = useMemo(() => createMuiTheme(
    state.isDark ? (
      {
        palette: {
          primary: orange,
          secondary: amber,
          type: 'dark'
        }
      }
    ) : (
        {
          palette: {
            primary: lightBlue,
            secondary: lightGreen,
            type: 'light'
          }
        }
      )
  ), [state.isDark])

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}