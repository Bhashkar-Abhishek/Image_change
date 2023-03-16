import React from 'react'
import { useState } from "react";
import './Text.css';

function Text() {

const [text, setText]=useState('')
function handleChange(e){
  setText(e.target.value)

}
function limit(){
    if(text.length==100)
    alert("limit reached")
}

  return (
    <div>
      <textarea maxLength="100" cols="20" rows="5" onChange={handleChange}></textarea>
      <p>
        {text.length} / 100 
      </p>
      {text.length==100?limit():""}
    </div>
  )
}

export default Text
