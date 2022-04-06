
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Example from './Components/example';
import FoodShow from './Components/FoodShow';

function App() {
  return (
    <div className="App">
      <Example></Example>
    </div>
  );
}

export default App;
