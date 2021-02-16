import React from "react";
import styled from "styled-components";
import Product from "./Product";
import data from "../data";

const ProductTableWrapper = styled.div`
// border: 1px solid black;
height: 100%;
width: 100%;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export default function ProductTable(){
    const productData = data.map((item,index) => <Product name={item.name} price={item.price} key={item.id} photo={item.photo}/>);

    return (
        <ProductTableWrapper>
            {productData}
        </ProductTableWrapper>
    )
}
