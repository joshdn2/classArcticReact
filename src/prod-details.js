import React from 'react';
import * as bs from 'react-bootstrap';
import PRODUCTS from './products.js'
import { useRouteMatch } from 'react-router-dom';
import './App.scss';


function ProdDetails(props){
    const matchingProd = useRouteMatch("/product/:pid")
    let arrayProducts = Object.values(PRODUCTS)
    const [index,setIndex] = React.useState(1)
    
    if (matchingProd){
        arrayProducts = arrayProducts.filter(eachProduct => {
            return eachProduct.id === matchingProd.params.pid
        })
        if (arrayProducts.length >= 1){
            let thisProd = arrayProducts[0]
            let arrayIndex = [1,2,3,4]
            
            return(
                    <bs.Container  style={{backgroundColor:"#f2f2f2"}}>
                        <bs.Row >
                            <bs.Col  className="pl-3">{/*This has the product name, price, and description*/}
                                <div className="clearfix">
                                    <br></br>
                                    <div className="box1">
                                        <h2>{thisProd.name}</h2>
                                        <h4>${thisProd.price.toFixed(2)}</h4>
                                        <br></br>
                                        <p>{thisProd.description}</p>
                                    </div>
                                    <div className="float-right box2">
                                        <bs.Image alt={`${thisProd.name}`} width={300} height={300} thumbnail src={`/products/${thisProd.filename}-${index}.png`} />
                                        {arrayIndex.map(num => (
                                                <bs.Image key={num} onMouseEnter={() => setIndex(num)} width={30} height={30} thumbnail src={`/products/${thisProd.filename}-${num}.png`}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </bs.Col>
                        </bs.Row>
                    </bs.Container>
            )
        }
        else{
            return(
                <h2>Not Found</h2>
            )
        }
    }
}
export default ProdDetails