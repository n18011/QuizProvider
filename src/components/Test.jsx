import React, { useContext } from 'react'

import {
    Switch,
    Button,
    Typography
} from '@material-ui/core'
import { StateContext } from '../context/State'

export default () => {
    const { handleQuiz } = useContext(StateContext)


    return (
        <>
        <Button onClick={() => handleQuiz('seaj0')}>seaj0</Button>
        <Button onClick={() => handleQuiz('seaj1')}>seaj1</Button>
        </>
    )
}