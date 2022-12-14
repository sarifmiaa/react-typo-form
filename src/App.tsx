import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './components/flows/BuyFlow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_designer">
            <Buyflow productId={ProductIds.desIns} />
          </Route>
          <Route path="/">
            <div style={{ textAlign: 'center' }}>
              <p>Welcome to Getsafe's Developer Insurance</p>
              <Link to="/buy/insurance_dev" style={{ marginRight: '10px' }}>
                Dev Insurance
              </Link>
              <Link to="/buy/insurance_designer">Design Insurance</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
