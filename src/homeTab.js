import React from 'react';
import * as bs from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PRODUCTS from './products.js'
import { useRouteMatch } from 'react-router-dom';
import ProdCard from './prod-card'

function Home(props) {
    //this is where we create the rows
    const cols = 4
    let arrayProducts = Object.values(PRODUCTS)
    const matchingCat = useRouteMatch("/category/:cid")
    if (matchingCat){
        arrayProducts = arrayProducts.filter(eachProduct => {
            return eachProduct.category === matchingCat.params.cid
        })
    }
    const allRows=[]
    for(let x=0; x < arrayProducts.length; x += cols){
        allRows.push(arrayProducts.slice(x, x+cols))
    }

    return (
        <bs.Container style={{backgroundColor:"#f2f2f2"}} fluid >
            <br></br>
            {allRows.map((row, rowIndex) => (
                <bs.Row  key={rowIndex}>
                    {row.map(product  => (
                        <bs.Col md="3" className="my-2" key={product.id}>
                            <ProdCard product={product} />
                        </bs.Col>
                    ))}
                </bs.Row>
            ))

            }
        </bs.Container>

    )
}
export default Home