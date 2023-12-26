import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange=(event)=>{
    // console.log('onchange');
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text Here');
  const handleUpClick = ()=>{
    // console.log('uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  )
}
