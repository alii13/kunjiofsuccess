import React from 'react'
import Menubar from './Components/Menubar'
import Homepage from './Components/Homepage'
import {Container} from 'react-bootstrap'
import TodoList from './Components/TodoList'
import PageNotFound from './Components/PageNotFound'
import StartupCal from './Components/StartupCal.js'
import {  Switch, Route } from 'react-router-dom';

const App=()=>{
    return(
        <>
          <Container fluid>
            <Menubar/>
            
            <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route  path='/todolist' component={TodoList}/>
                    <Route  path='/startup-calculator' component={StartupCal}/>
                    <Route  path='/*' component={PageNotFound}/>
            </Switch>
            
            
          </Container>
          
        </>
    )
}

export default App 