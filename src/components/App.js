import React from 'react'
import { Container } from 'react-bootstrap'
import CoinApp from './CoinApp';
import Form from '../Form';
import PageSuccess from './PageSuccess';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div >
          <Switch>
          <Route exact path="/CoinApp">
          <CoinApp/>
          </Route>
          <Route exact path="/PageSuccess">
          <PageSuccess/>
          </Route>
          <Form />
          </Switch>
        
        </div>
      </Container>
    </Router>




  )
}

export default App;
