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
  const [complete, setComplete] = useState(false);

  function handleClickEvent(){
    if(item < 10){
      setItem(item + 1);
    } else if (item == 10) {
      setComplete("true");
    }
      
  }

  return (
    <AppWrapper>
      <NavBar addedItem={item} completed={complete}/>
      <Body onButtonClick={handleClickEvent} />   
    </AppWrapper>
  );
}

export default App;
