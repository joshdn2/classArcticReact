import React from 'react';
import * as bs from 'react-bootstrap';
import './App.scss';

function RightTab(props){
    return(
        <bs.Container>
            <bs.Row>
                <bs.Col className="assayRight">
                    <h3 className="pt-2 pl-3">Recent: </h3>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
    
}
export default RightTab