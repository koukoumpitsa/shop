import React from "react";
import styled from "styled-components";
import ProductTable from "./ProductTable";

const BodyWrapper =styled.div`
    backround-color: #FAF3DD;
    height: 90%;
    width: 90%;
    display: grid;
    grid-template-rows: minmax(50px, 10%) 1fr;
    grid-template-columns: auto;
    place-items: center;
`;

const BodyTitlesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 2fr 2fr;
`;

const BodyTitleMain = styled.h4`
    font-weight: 400;
    font-size: 20px;
    text-align: left;
`;

const BodyTitleSecondary = styled.h5`
    font-weight: 400;
    font-size: 15px;
    text-align: right;
`;
export default function Body(props){
    return (
        <BodyWrapper>
            <BodyTitlesWrapper>
                <BodyTitleMain>
                    Our available products:
                </BodyTitleMain>
                <BodyTitleSecondary>
                    ** Free shipping above 25$
                </BodyTitleSecondary>
            </BodyTitlesWrapper>
            <ProductTable onButtonClick={props.onButtonClick}/>
        </BodyWrapper>
    );
}


