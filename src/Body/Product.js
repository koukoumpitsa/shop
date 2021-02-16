import styled from "styled-components";

const ProductWrapper = styled.div`
    height: 80%;
    // border: 1px solid black;
    display: grid;
    grid-template-rows: 3fr 1fr 1fr 1fr 1fr;
    place-items: start;
    grid-gap: .3em;
    margin: 1em;
`;

const ProductPhoto = styled.div`

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

export default function Product(){
    return(
        <ProductWrapper>
            <ProductPhoto>
                <img src="#" alt=""/>
            </ProductPhoto>
            <ProductName>
                Product Name
            </ProductName>
            <ProductPrice>
                $30
            </ProductPrice>
            < ProductAvailability>
            Immediatly available
            </ProductAvailability>
            <ProductAddButton>
            + &#x1F6D2;
            </ProductAddButton>
        </ProductWrapper>
    );
}