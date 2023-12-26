import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleReverse = ()=>{
    let x='';
    for(let i=text.length - 1;i>-1;i--){
      x+=text.charAt(i);
      console.log(text.charAt(i));
    }
    setText(x);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  return (
    <>
    <div>
      <div className="container mb-3 my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="container mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleReverse} >Reverse the Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{Math.floor(0.008 * text.split(" ").length)} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}
