import styled from "styled-components";
import React,{useState} from "react";

const ProductWrapper = styled.div`
    height: 80%;
    // border: 1px solid black;
    display: grid;
    grid-template-rows: minmax(10px, 25%) 25px 25px 25px;
    grid-template-columns: auto;
    place-items: start;
    grid-gap: .3em;
    margin: 1em;
`;

const ProductPhoto = styled.div`
    display: grid;
    place-items: center;
    height: 1fr;
    img {
        height: 50%;
        align-self: center;
    }
`;

const ProductName = styled.p`
    font-weight: 500;
    font-size: 20px;
    font-style: bold;
`;

const ProductPrice = styled.p`
    color: #DD6E42;
    font-weight: 500;
    font-size: 20px;
    font-style: bold;
    letter-spacing: .5px;
`;

const ProductAvailability = styled.p`
    font-weight: 400;
    font-size: 15px;
    letter-spacing: .5px;
`;

const ProductAddButton = styled.button`
    background-color: #F5CB5C;
    width: 50px;
    height: 30px;
    border: none;
    border-bottom: .5px solid black;
    cursor: pointer;
`;

export default function Product(props){

    return (
        <ProductWrapper>
        <ProductPhoto>
            {/* <img src={props.photo} alt="product"/> */}
        </ProductPhoto>
        <ProductName>
            {props.name}
        </ProductName>
        <ProductPrice>
            ${props.price}
        </ProductPrice>
        < ProductAvailability>
        Immediatly available
        </ProductAvailability>
        <ProductAddButton onClick={props.onClick}>
        + &#x1F6D2;
        </ProductAddButton>
    </ProductWrapper>
    );
}

