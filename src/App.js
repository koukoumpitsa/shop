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
  const [item, setItem] = useState(0);

  function handleClickEvent(){
      setItem(item + 1);
  }

  return (
    <AppWrapper>
      <NavBar addedItem={item}/>
      <Body onButtonClick={handleClickEvent}/>
    </AppWrapper>
  );
}

export default App;
