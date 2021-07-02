import React from 'react'
import { Container } from 'react-bootstrap'
import CoinApp from './CoinApp';
import Form from '../Form';
function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
       <Form/>
          <CoinApp />
          
        </div>
      </Container>

    



  )
}

export default App;
