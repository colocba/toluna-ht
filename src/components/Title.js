import React from 'react'
import './Title.css'
import Row from 'react-bootstrap/Row';

export default function Title(props) {
    return (
        <Row>
            <div className="divider" style={{ marginTop: 10, marginBottom: 10 }}>
                <hr className="left"></hr>
                <label className="label">{props.text}</label>
                <hr className="right"></hr>
            </div>
        </Row>
    )
}
