import React from "react";
import styled from "styled-components";

const NavBarWrapper =styled.div`
    background-color: #C8D5B9;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr; 
    grid-template-rows: 1fr;
    place-items: center ;
`;

const TitleBox = styled.div`
`;

const StoreTitleMain = styled.h3`
    font-weight: 900;
    font-style: bold;
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: 5px;
    // text-shadow: 3px 3px 6px #29331F;
    box-sizing: border-box;
`;

const ButtonCart= styled.button`
    height: 40%;
    width: 40%;
    display: grid;
    place-items: center;
`;

export default function NavBar(props){
    return (
        <NavBarWrapper>
            <TitleBox>
            <StoreTitleMain>
                    My-Shop.com
                </StoreTitleMain>
            </TitleBox>
        
            <ButtonCart>
                &#x1F6D2; {props.cart}
            </ButtonCart>
       
        </NavBarWrapper>
    );
}