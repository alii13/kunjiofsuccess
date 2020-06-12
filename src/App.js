import React from 'react'
import Menubar from './Components/Menubar'
import Homepage from './Components/Homepage'
import {Container} from 'react-bootstrap'
import TodoList from './Components/TodoList'
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
            </Switch>
            
            
          </Container>
          
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>         
        </>
    )
}

export default App 