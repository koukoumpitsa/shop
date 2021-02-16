import styled from "styled-components";

const ProductWrapper = styled.div`

`;
export default function Product(){
    return(
        <ProductWrapper>
        <div className="item">
            <p>Image of Product</p>
            <p>Product name</p>
            <p>$30</p>
            <p>Immediatly available</p>
            <button >+ &#x1F6D2;</button>
        </div> 
        </ProductWrapper>
    );
}