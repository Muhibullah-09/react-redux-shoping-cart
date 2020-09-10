import './App.css';
import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap';
import SubTotal from './components/SubTotal/SubTotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Total: 100,
      PickupSavings: -3.85,
      Taxes: 0,
      EstimatedTotal: 0
    };
  }
  render() {
    return (
      <div className="container">
        <Container className='purchase-card'>
          <Col>
            <SubTotal price={this.state.Total.toFixed(2)} />
            <br />
            <PickupSavings price={this.state.PickupSavings} />
            <br />
            <TaxesFees taxes={this.state.Taxes.toFixed(2)} />
            <hr /><br /><br />
            <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
          </Col>
        </Container>
      </div>
    )
  }
}
