import About from './About';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import React,{useState} from 'react';
// import {Route,Switch} from "react-router-dom"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  const toggleMode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor ="#042743"
      showAlert("dark mode is enabled","success")
      document.title = "TEXTUTILS - DARKMODE"
      // setInterval(()=>{
      //   document.title = "phone has catched virus"
      // },2000)
      // setInterval(()=>{
      //   document.title = "LAPOP IS SLOWING DOWN"
      // },1500)
    }
    else{
      setMode("light")
      document.body.style.backgroundColor ="white"
      showAlert("light mode is enabled","success")
      document.title = "TEXTUTILS - LIGHTMODE"
    }
  }
    return (
      <>
      
      {/* <Navbar title="Textutils" aboutText="about TEXT"/> */}
      
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <BrowserRouter>
        <Routes>
          <Route  path="/about" element={<About/>} />            
          <Route  path="/" element={<Textform showAlert={showAlert} heading="Textutils" mode={mode}/> }/>   
        </Routes>
      </BrowserRouter>

      </div>
      </>      
    );
}

export default App;
