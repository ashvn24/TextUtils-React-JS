import "./App.css";
import Nav from "./components/nav"
import Form from "./components/Form"
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#254e8b'
      }else{
        setMode('light') 
      document.body.style.backgroundColor ='white'

    }
  }

  return(
    <div className="App ">
      <Nav title="App" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Form head="Fill in the fields" mode={mode} />
      </div>
    </div>
  );
}

export default App;
