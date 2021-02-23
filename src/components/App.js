
import React, { Component, useState } from "react";
import '../styles/App.css';
import Data from "./data";

const App = () => {
  var i=0;
  return (
    <div id="main">
      <ol type="1">
        {Data.map((value,index)=>{
          if(value.country=="India")
          {
            i++;
            
            return <li key={"location"+(i)}>{value.name}</li>
          }
        })}
      </ol>
    </div>
  )
}



export default App;
