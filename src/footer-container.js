import React from 'react'
import * as bs from 'react-bootstrap'
import './App.scss';

function FooterContainer(props){
    return(
        <bs.Container variant="dark">
            <bs.Row>
                <bs.Col className="py-3">
                    <center>
                        &copy;2020 - Arctic Kiwi&nbsp;
                        <i className="fas fa-kiwi-bird pr-2" style={{color:"#f2f2f2"}}></i>
                    </center>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
    
}
export default FooterContainer