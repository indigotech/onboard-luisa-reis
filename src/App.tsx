import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Form from './components/pages/Form'
import NovaPagina from './components/pages/nova-pagina'

const App=()=>{
  return(
    <Router>
      <div className="App">
        <Link to="/"></Link>
        <Link to="/pag2"></Link>
      <Switch>
        <Route path="/" exact component={Form}/>
        <Route path="/pag2" component={NovaPagina}/>
      </Switch>
      </div>
    </Router>
  )
}

export default App;