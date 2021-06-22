import React from 'react'
import { Container } from 'react-bootstrap'
import CoinApp from './CoinApp';

function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
       
          <CoinApp />
          
        </div>
      </Container>

    



  )
}

export default App;
