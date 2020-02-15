import React from 'react';
import * as bs from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Help(props){
    return(
        <bs.Container fluid>
            <bs.Row >
                <bs.Col>
                    <h1 className="text-center mt-4" style={{color:"#f2f2f2"}}>
                        Help&nbsp;
                        <i className="fas fa-kiwi-bird pr-2" style={{fontSize:"2rem", color:"#f2f2f2"}}></i>
                    </h1>
                    
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md={{ span: 10, offset: 1, }} className="pb-5">
                    <br/>
                    <p style={{color:"#f2f2f2"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    
                </bs.Col>
            </bs.Row>
        </bs.Container>

    )
}
export default Help