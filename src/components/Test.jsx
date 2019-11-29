import React, { useContext } from 'react'

import {
    Switch,
    Button,
    Typography
} from '@material-ui/core'
import { StateContext } from '../context/State'

export default () => {
    const { handleQuiz, sendResult } = useContext(StateContext)


    return (
        <>
        <Button href='/quiz/seaj0' onClick={() => handleQuiz('seaj0')}>seaj0</Button>
        <Button href='/quiz/seaj1' onClick={() => handleQuiz('seaj1')}>seaj1</Button>
        <Button  onClick={() => sendResult({q1: '正解', q2: '不正解'})}>send result</Button>
        </>
    )
}