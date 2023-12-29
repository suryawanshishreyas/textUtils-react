import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState();

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b0442';
      showAlert('Dark mode has been enabled', 'success');
      
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled', 'success');
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title ="Web Page" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'> 
        <Routes>
        <Route exact path="/about" element={<About/>} >
        </Route>
        <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>
        </Route>
        </Routes>
      </div>
    </Router>

</>
  );
}

export default App;
