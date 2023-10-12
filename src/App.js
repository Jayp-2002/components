// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App(){
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled","success");
       document.title='MyApp - Dark Mode';
      //  setInterval(() => {
      //   document.title= 'MyApp is amazing textbox';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title='Install MyApp Now';
      //  }, 1500);
    }
     else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled","success");
       document.title='MyApp - Light Mode';
  }
  } 
  return (
    <>
    {/* <Navbar title="MyApp" /> */}
    {/* <Navbar/> */}
    <Router>
      <div>
    <Navbar title="MyApp" aboutText="About MyApp" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Write Here" mode={mode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    {/* <About/> */}
    </div>
    </div>
    </Router>
    </>
  );

}
export default App;