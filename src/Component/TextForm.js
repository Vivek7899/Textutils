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
                    <textarea className="form-control my-3" style={{color:props.mode ==='dark'?'white':'black',backgroundColor: props.mode ===  'dark'?'grey':'#f1d5f7'}} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className="container my-3" style={{color: props.mode ===  'light'?'#010621':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </>
    )
}
