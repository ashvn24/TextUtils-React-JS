import React, {useState} from 'react'

export default function Form(props) {

    const [text,upText]=useState('');

    const select=(event)=>{
        upText(event.target.value)
    }

    const toUp=()=>{
        let change=text.toUpperCase();
        upText(change)
    }
    const toLo=()=>{
        let change=text.toLowerCase();
        upText(change)
    }

    const clear=()=>{
        upText('')
    }

    const rmvSpace=()=>{
        let newText=text.split(/[ ]+/);
        upText(newText.join(" "))
    }

  return (
    <div class="container my-5"style={{backgroundColor:props.mode==='light'?'white':'#254e8b',color:props.mode==='light'?'black':'white'}}>
    <div >
        <h1>{props.head}</h1>
      <div className="mb-3">
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Example textarea</label>
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#254e8b',color:props.mode==='light'?'black':'white'}} value={text} onChange={select} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={toUp}>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={toLo}>Lowecase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={rmvSpace}>Remove Space</button>
    </div>
    <div className="container my-3" >
        <h1>Text Summary</h1>
        <p>Your text contains {text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length}minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </div>
    
  )
}
