import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text )
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Uppercase","success")
    // setText("you clicked on handle click")
  }

  const handleloClick = ()=>{
    // console.log("Uppercase was clicked" + text )
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success")
    // setText("you clicked on handle click")
  }

  const handleOnChange =(event)=>{
    // console.log("ON CHANGE")
    setText(event.target.value)
    
  }

  const handlecClear =(event)=>{
    // console.log("clearing the text")
    let newText = "";
    setText(newText)
    props.showAlert("cleared","success")

  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("copied","success")

  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")

  }

  const [text, setText] = useState("");

//   text = "new text" //wrong way to change text
//   setText = "new text" //correct way to change text

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':"#042743"}} >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':"white", color: props.mode==='dark'?'white':"#042743"} } id="myBox" rows="8"></textarea>
        </div>
          <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>convert to uppercase</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleloClick}>convert to lowercase</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handlecClear}>clear</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>CopyText</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra space</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':"#042743"}}>
      <h2>YOUR TEXT SUMMARY</h2>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} minutes  to read</p>
      <h2>Preview</h2>
      <p>{text.lenght>0?text:"enter something above to preview here"}</p>
    </div>
    </>
  )
}
