// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light')
  // wheather darkmode is enable or not
  const[alert, setAlert]=useState(null)
  const showalert=(message,type)=>{
      setAlert({
        msg : message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const toggleMode= ()=> {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor= 'grey'
      // showalert("dark mode has been enable", "success")
      // setInterval(() => {
      //   document.title='Textutils is amazing'
        
      // }, 2000);
      // setInterval(() => {
      //   document.title='install Textutils is now'
        
      // }, 1500);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor= 'white'
      showalert("light mode has been enable", "success")
      // document.title='Textutils- lightmode'

    } 
  }
  return (
    <>
     <BrowserRouter> 
    <Navbar title="Textutils2" abouttext="about utils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      {/* <TextForm showalert={showalert} heading="enter the text to analyze" mode={mode}/> */}
      {/* <About/> */}
       <Routes>
          <Route path="/about" element= {<About mode={mode} />}>
          </Route>
    <Route path="/" element={<TextForm showalert={showalert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces" mode={mode}/>}></Route>
        </Routes>
     </div>
</BrowserRouter> 
    </>
  );
}

export default App;
