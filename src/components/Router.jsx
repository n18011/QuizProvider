import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Test from './Test'
import Quiz from './Quiz'

export default () => {
    return (
        <>
        <Router>
            <Switch>
                <Route path='/top' component={Test}/>
                <Route path='/quiz/:quizId' component={Quiz}/>
                <Route path='/quiz/:quizId/result' component={Quiz}/>
                <Route path='/quiz/:quizId/history' component={Quiz}/>
                <Route path='/quiz/:quizId/questions/:question' component={Quiz}/>
            </Switch>
        </Router>
        </>
    )
}