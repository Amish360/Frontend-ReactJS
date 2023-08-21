import React from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    <div className="App">
      <h1>Smooth Airlines</h1>
      
      <input type="text" name="searchbar" id="searchbar" placeholder="Write your search here."/>
      <button>Search</button>
      <button>Filter</button>
      <button>Sort</button>
      <DataDisplay />
    </div>
  );
}


export default App;
