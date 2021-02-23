
import React, { Component, useState } from "react";
import '../styles/App.css';
import Data from "./data";

const App = () => {
  return (
    <div id="main">
      <ol>
        {Data.map((value,index)=>{
          if(value.country=="India")
          {
            return <li key={"location"+(index+1)}>{value.name}</li>
          }
        })}
      </ol>
    </div>
  )
}



export default App;

