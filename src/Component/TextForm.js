import React, { useState } from 'react'



export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Clear was clicked");
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{color: props.mode ===  'light'?'#010621':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" style={{color:props.mode ==='dark'?'black':'black',backgroundColor: props.mode ===  'dark'?'#aaeaf2':'#aaf2d6',border:props.mode ===  'dark'?'1.5px solid #fa91e1':' 1.5px solid black'}} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button disabled={text.length===0} style={{color:props.mode ==='dark'?'white':'black',backgroundColor: props.mode ===  'dark'?'#2f9bc2':'#07f5aa',border:props.mode ===  'dark'?'1.5px solid white':' 1.5px solid black'}} className="btn mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} style={{color:props.mode ==='dark'?'white':'black',backgroundColor: props.mode ===  'dark'?'#2f9bc2':'#07f5aa', border:props.mode ===  'dark'?'1.5px solid white':' 1.5px solid black'}} className="btn mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} style={{color:props.mode ==='dark'?'white':'black',backgroundColor: props.mode ===  'dark'?'#2f9bc2':'#07f5aa',border:props.mode ===  'dark'?'1.5px solid white':' 1.5px solid black'}} className="btn mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className="container my-3" style={{color: props.mode ===  'light'?'#010621':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
