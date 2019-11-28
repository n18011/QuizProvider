import React, { useContext } from 'react'

import {
    Switch, Typography
} from '@material-ui/core'
import { StateContext } from '../context/State'

export default () => {
    const { changeThemeForDark } = useContext(StateContext)


    return (
        <>
            <Switch color='primary' onChange={() => changeThemeForDark()} />
            <Typography color="textPrimary" >primary</Typography>
            <Typography color="textSecondary" >secondary</Typography>
        </>
    )
}