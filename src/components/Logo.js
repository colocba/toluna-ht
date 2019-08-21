import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Logo.css'
import logo from '../assets/Materials/Toluna-Logo.png'

export default function Logo() {
    return (
        <div>
            <Row className="justify-content-md-center justify-content-xs-center">
                <Col xs={12} xl={12}>
                    <img src={logo} className="logo-img" alt="Logo"></img>
                </Col>
            </Row>
        </div>
    )
}
