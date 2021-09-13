
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import React, { useState } from 'react';
import TextForm from './Component/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010621';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Words Counting, Analyzing Reading Time" mode={mode} />
        
      </div>
    </>
  );
}

export default App;
