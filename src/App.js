import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }


  
  return (
    // <Router>
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* <Routes>
            <Route exact path="/" element={} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes> */}
      </div>
    </>
    // </Router>
  );
}

export default App;
