import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.scss';
import PRODUCTS from './products.js'

function LeftTab(props){
    const categories = {}
    for (let p of Object.values(PRODUCTS)){
        categories[p.category] = (categories[p.category] || 0) + 1;
    }
    let arrayKeys = []
    let arrayVals = []
    for (var key in categories){
        arrayKeys.push(key)
        arrayVals.push(categories[key])
    }

    return(
        <bs.Nav defaultActiveKey="/" className="flex-column pt-2 pl-3">
            <Link to='/' className="nav-link" style={{color:"#f2f2f2"}}>
                {"All Products (" + Object.values(PRODUCTS).length + ")"}
            </Link>
            {arrayKeys.map(prod => (
                <Link key={prod} to={'/category/' + prod} className="nav-link" style={{color:"#f2f2f2"}}>
                    {prod + " (" + arrayVals[arrayKeys.indexOf(prod)] + ")"}
                </Link>
                ))
            }
        </bs.Nav>
    )
    
}
export default LeftTab