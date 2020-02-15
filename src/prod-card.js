import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProdCard(props){
    let thisProd = props.product
    
    return(
        <bs.Card>
            <bs.Card.Img variant="top" src={`/products/${thisProd.filename}-1.png`} />
            <bs.Card.Body>
                <Link to={`/product/${thisProd.id}`} className="position-absolute btn-dark p-1" style={{top:0, right:0, borderRadius:3}}>
                    Details
                </Link>
                <bs.Card.Title>{thisProd.name}</bs.Card.Title>
                <bs.Card.Text>${thisProd.price.toFixed(2)}</bs.Card.Text>
            </bs.Card.Body>
        </bs.Card>
    )
    
}
export default ProdCard