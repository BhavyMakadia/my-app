import React, { useState } from 'react'

export default function Textforms(props) 
{
    const[text,setText]=useState('');
    //setText('ehfjksddh');

    const handleupclick=()=>
    {
        console.log("on click");
let newText=text.toUpperCase();
setText(newText);
}



const handleupclick1=()=>
{
    console.log("on click");
let newText=text.toLowerCase();
setText(newText);
}
   const handleClearClick = ()=>{ 
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!", "success");
}
  

const handleonchange=(event)=>
{console.log("on change");
setText(event.target.value);
}

   // Credits: A
   const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}

// Credits: Coding Wala
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
 
    return(
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      

  <label for="myBox" className="form-label">{props.title}-{text}</label>
  <div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleonchange} id="myBox" rows="6"/>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleupclick} >uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleupclick1} >LowerCase</button>
        

<div className="container my-3">
<h1> some information</h1>
<p> { 

text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length}charaters</p>

<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            
<p> { 0.008 * text.split(" ").length } mintues read</p>
<h2> Preview </h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>


</div>
    </div>
  )
}
