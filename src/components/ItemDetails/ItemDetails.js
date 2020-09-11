import React, { Component } from 'react'
import { Button, Collapse, Media, Col, Row } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button className='item-details-button' variant="outline-primary" bsStyle='link' onClick={() => this.setState({ open: !this.state.open })}>
                    {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button><br />
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img
                                width={100}
                                height={100}
                                alt='thumbnail'
                                src='https://i5.walmartimages.com/asr/a175ed92-67e9-4fa7-94ff-656ba954638e.94745908f43c6a37c81ae9c9778e999c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
                            />
                            <Media.Body>
                                <p>Essential by OFM ESS-3085 Racing Leather Gaming Chair, Red</p>
                                <Row className='show-grid'>
                                    <Col md={6}>
                                        <strong>{`PKR ${this.props.price}`}</strong>
                                        <br />
                                        <strong className='price-strike'>{`PKR ${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty: 1
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        )
    }
}
