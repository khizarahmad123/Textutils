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
  const removebodyclasses=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')   
    document.body.classList.remove('bg-warning')   
  }
 
  const toggleMode= (cls)=> {
    removebodyclasses()
    console.log(cls)
    document.body.classList.add('text-bg-'+ cls)
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor= 'grey'
      
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
