import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!','success');
  }
  const handleReverse = ()=>{
    let x='';
    for(let i=text.length - 1;i>-1;i--){
      x+=text.charAt(i);
      console.log(text.charAt(i));
    }
    setText(x);
    props.showAlert('Converted to reverse letter!','success');
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!','success');
  }
  return (
    <>
    <div>
      <div className="container mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="container mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" onChange={handleOnChange} value={text} ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleReverse} >Reverse the Text</button>
    </div>
    <div className="container mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p>{Math.floor(0.008 * text.split(" ").length)} Minutes Read</p>
      <h2>Preview</h2>
      <p style={{color:props.mode ==='dark'?'Red':'Grey'}}>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}
