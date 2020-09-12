import React, { Component } from 'react'
import { connect } from 'react-redux';
import { promoCode } from '../../redux/PromoCode/PromoCodeAction';
import { Button, Collapse, Form, Row, Col, FormGroup, FormControl } from 'react-bootstrap';
class PromoCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    };
    render() {
        return (
            <div>
                <Button className='promo-code-button' variant="outline-primary" bsStyle='link' onClick={() => this.setState({ open: !this.state.open })}>
                    {this.state.open === false ? `Apply ` : `Hide `}
                     Promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className='show-grid'>
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId='formInlineName'>
                                        <label className='label'><strong>Promo Code</strong></label>
                                        <FormControl
                                            type='text'
                                            placeholder='Enter promo code'
                                            value={this.props.promoCode}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        block
                                        bsStyle='success'
                                        className='btn-round'
                                        variant="outline-dark"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscounts}
                                    >
                                        Apply
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

//mapStateProps is the alternate of useSelector Hook.
const mapStateToProps = state => {
    promoCode: state.promoCode.value
}
export default connect(mapStateToProps, { handleChange })(PromoCode);