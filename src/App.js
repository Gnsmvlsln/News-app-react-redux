import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectComponent from './Component/Select-component'
// import Heading from './Component/Heading';
import Loading from './Component/Loading'

function App() {
  return (
    <div className="App">
    
      <SelectComponent/>
  <Loading/>
    </div>
  );
}

export default App;
