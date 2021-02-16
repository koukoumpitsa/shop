import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductTableWrapper = styled.div`

`;
export default function ProductTable(){
    return(
        <ProductTableWrapper>
            <Product/>
        </ProductTableWrapper>
    );
}