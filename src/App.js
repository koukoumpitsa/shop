import React,{useState} from "react";
import styled from "styled-components";
import './App.css';
import Body from "./Body/Body";
import NavBar from "./NavBar/NavBar";

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  grid-template-rows: minmax(60px, 10%) 1fr;
  grid-template-columns: 1fr;
`;

function App() {

  return (
    <AppWrapper>
      <NavBar/>
      <Body/>
    </AppWrapper>
  );
}

export default App;
