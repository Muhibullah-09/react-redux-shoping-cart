import './App.css';
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTotal from './components/subtotal/SubTotal';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 100
    }
  }

  render() {
    return (
      <div className="container">
        <Container className='purchase-card'>
          <Row>
            <SubTotal price={this.state.total.toFixed(2)} />
          </Row>
        </Container>
      </div>
    )
  }
}
