import React, { useState } from 'react'
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import Footer from './component/Footer';

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [modetxt, setmodetxt] = useState('light mode'); // whether dark mode text
  const [txtcolor, settxtcolor] = useState('text-dark');

  // sky blue mode
  const [skyblue, setskyblue] = useState(false)

  // Alert component
  const [alert, setalert] = useState(null);


  const showAlert = (message, type) =>{
    setalert({
        msg:message,
        type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode=()=>{
      if(mode==='light')
      {
        document.body.style.backgroundColor='#1d1d1e';
        setmode('dark');
        setmodetxt('Dark mode');
        settxtcolor('text-light');
        showAlert("Dark Mode enable", "success");
      }
      else{
        document.body.style.backgroundColor='white';
        setmode('light');
        setmodetxt('Light mode');
        settxtcolor('text-dark');
        showAlert("Light Mode enable", "success");
      }
  };

  const togglemode_blue = ()=>{
    if(skyblue === false)
    {
        document.body.style.backgroundColor='#B3FFFF';
        setmode('dark ');
        settxtcolor('text-light');
        showAlert("Sky-Blue Mode enable", "success");
        setskyblue(true);
    }
    else{
        document.body.style.backgroundColor='white';
        setmode('light');
        setmodetxt('Light mode');
        settxtcolor('text-dark');
        showAlert("Light Mode enable", "success");
        setskyblue(false);
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About TextUtils" Mode={mode} Modetxt={modetxt} togglemode={togglemode} txtcolor={txtcolor} togglemode_blue={togglemode_blue}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter your text here" subheading="Text Box" Mode={mode} showAlert={showAlert}/>
      <About Mode={mode}/>
      <Footer/>
      </div>
    </>
  );
}

export default App;