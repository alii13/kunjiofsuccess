import React from 'react'
import Menubar from './Components/Menubar'
import Homepage from './Components/Homepage'
import {Container} from 'react-bootstrap'
import TodoList from './Components/TodoList'
import Terms from './Components/Terms'
import PageNotFound from './Components/PageNotFound'
import Footer from './Components/Footer'
import About from './Components/About/About'
import StartupCal from './Components/StartupCal.js'
import {  Switch, Route } from 'react-router-dom';
import Privacy_policy from './Components/Privacy_policy'
import Disclaimer from './Components/Disclaimer'

const App=()=>{
    return(
        <>
          <Container fluid>
            <Menubar/>
            
            <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route  path='/todolist' component={TodoList}/>
                    <Route  path='/startup-calculator' component={StartupCal}/>
                    <Route  path='/about-us' component={About}/>
                    <Route  path='/terms-and-conditions' component={Terms}/>
                    <Route  path='/privacy-policy' component={Privacy_policy}/>
                    <Route  path='/disclaimer' component={Disclaimer}/>
                    <Route  path='/*' component={PageNotFound}/>
            </Switch>
            <Footer/>
            
            
          </Container>
          
        </>
    )
}

export default App 