import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class EstimatedTotal extends Component {
    render() {
        return (
            <Row>
                <Col md={6}>
                    <h5>Est. Total</h5>
                </Col>
                <Col md={6}>
                    <h5>{`PKR ${this.props.total}`}</h5>
                </Col>
            </Row>
        )
    }
}
