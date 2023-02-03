import React, {useState} from 'react'
export default function Textform(props) {
  const handleupclick= ()=>{
    // console.log("uppercase was clicked"+ text)
    let newtext= text.toUpperCase()
    setText(newtext)
  }
  const handleloclick= ()=>{
    // console.log("uppercase was clicked"+ text)
    let newtext= text.toLowerCase()
    setText(newtext)
    props.showalert("converted to lowercase","success")
  }
 
  const handleonchange= (event)=>{
    // console.log("on change")
    setText(event.target.value)
  }

  
  const [text, setText] = useState('enter your text here');
  // useEffect(()=>{
    // setText("new text");
	// }, [])
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="textarea" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
  <button className="btn btn-primary" onClick={handleloclick}>convert to lowercase</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>your text summary here</h1>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.008*text.split(" ").length}minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
